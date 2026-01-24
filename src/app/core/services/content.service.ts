import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, shareReplay, distinctUntilChanged, catchError, of } from 'rxjs';
import { ContentStore } from '../models/types';

@Injectable({ providedIn: 'root' })
export class ContentService {
    private contentSubject = new BehaviorSubject<ContentStore | null>(null);
    public content$ = this.contentSubject.asObservable().pipe(
        distinctUntilChanged(),
        shareReplay(1)
    );

    constructor(private http: HttpClient) {
        this.loadAllContent();
    }

    private loadAllContent(): void {
        this.http.get<{ content: ContentStore }>('assets/config/pages.json').pipe(
            map(response => response.content),
            catchError(err => {
                console.error('Failed to load content from pages.json', err);
                return of(null);
            })
        ).subscribe(data => {
            if (data) {
                this.contentSubject.next(data);
            }
        });
    }

    /**
     * Get any content by dot-notation reference (e.g., 'services', 'forms.contactForm')
     */
    getContent<T = any>(ref: string): Observable<T> {
        return this.content$.pipe(
            map(data => this.extractByPath(data, ref) as T)
        );
    }

    /**
     * Get filtered content from an array reference
     */
    getFiltered<T = any>(ref: string, filter: Record<string, any>): Observable<T[]> {
        return this.getContent<T[]>(ref).pipe(
            map(items => {
                if (!Array.isArray(items)) return [];
                return items.filter(item =>
                    Object.entries(filter).every(([key, val]) => (item as any)[key] === val)
                );
            })
        );
    }

    private extractByPath(obj: any, path: string): any {
        if (!obj || !path) return null;
        return path.split('.').reduce((acc, part) => acc?.[part], obj);
    }
}

