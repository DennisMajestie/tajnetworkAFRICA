import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay, tap, catchError } from 'rxjs/operators';
import { PageConfig, ThemeConfig, NavigationConfig } from '../models/types';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private configSubject = new BehaviorSubject<any>(null);
  private pages$!: Observable<PageConfig[]>;
  private theme$!: Observable<ThemeConfig>;
  private nav$!: Observable<NavigationConfig>;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.initConfigs();
  }

  private initConfigs(): void {
    // Load pages config
    this.pages$ = this.http.get<{ pages: PageConfig[] }>('assets/config/pages.json').pipe(
      map(response => response.pages),
      tap(pages => this.configSubject.next(pages)),
      shareReplay(1),
      catchError(err => {
        console.error('Failed to load pages config', err);
        return of([]);
      })
    );

    // Load theme config and apply it
    this.theme$ = this.http.get<ThemeConfig>('assets/config/theme.json').pipe(
      tap(theme => {
        if (isPlatformBrowser(this.platformId)) {
          this.applyTheme(theme);
        }
      }),
      shareReplay(1),
      catchError(err => {
        console.error('Failed to load theme config', err);
        throw err;
      })
    );

    // Load navigation config (fallback to assets if not in pages.json)
    this.nav$ = this.http.get<NavigationConfig>('assets/config/navigation.json').pipe(
      shareReplay(1),
      catchError(() => {
        // Fallback or empty nav if file doesn't exist yet
        return of({ main: [] });
      })
    );
  }

  getPageConfig(slug: string): Observable<PageConfig | undefined> {
    return this.pages$.pipe(
      map(pages => pages.find(p => p.slug === slug || p.id === slug))
    );
  }

  getTheme(): Observable<ThemeConfig> {
    return this.theme$;
  }

  getNavigation(): Observable<NavigationConfig> {
    return this.nav$;
  }

  private applyTheme(theme: ThemeConfig): void {
    const root = document.documentElement;

    // Apply Colors
    if (theme.colors) {
      Object.entries(theme.colors).forEach(([category, variants]) => {
        Object.entries(variants).forEach(([name, value]) => {
          root.style.setProperty(`--color-${category}-${name}`, value as string);
        });
      });
    }

    // Apply Typography
    if (theme.typography?.fonts) {
      Object.entries(theme.typography.fonts).forEach(([name, value]) => {
        root.style.setProperty(`--font-${name}`, value as string);
      });
    }

    // Apply Spacing
    if (theme.spacing) {
      Object.entries(theme.spacing).forEach(([name, value]) => {
        root.style.setProperty(`--spacing-${name}`, value as string);
      });
    }
  }
}

