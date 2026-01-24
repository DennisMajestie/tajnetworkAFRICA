import { Injectable, inject, ApplicationRef } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { filter, take, firstValueFrom, race, timer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RouteInterceptor {
    private navigationTimeout: any;
    private appRef = inject(ApplicationRef);

    constructor(private router: Router) {
        this.setupInterceptor();
    }

    private setupInterceptor(): void {
        this.router.events.subscribe(async event => {
            if (event instanceof NavigationStart) {
                clearTimeout(this.navigationTimeout);
                document.body.classList.add('route-transitioning');

                this.navigationTimeout = setTimeout(() => {
                    document.body.classList.add('show-route-loader');
                }, 200);
            }

            if (event instanceof NavigationEnd ||
                event instanceof NavigationCancel ||
                event instanceof NavigationError) {

                clearTimeout(this.navigationTimeout);

                // Wait for the application to be stable OR a hard 1s timeout
                // This prevents infinite "blackouts" if stability is delayed
                try {
                    await firstValueFrom(
                        race(
                            this.appRef.isStable.pipe(filter(stable => stable)),
                            timer(1000) // Hard limit for the "Visibility Gate"
                        ).pipe(take(1))
                    );

                    // Final safety frame to ensure style application
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            this.revealContent();
                        });
                    });
                } catch (e) {
                    this.revealContent();
                }
            }
        });
    }

    private revealContent(): void {
        document.body.classList.remove('route-transitioning');
        document.body.classList.remove('show-route-loader');
    }
}
