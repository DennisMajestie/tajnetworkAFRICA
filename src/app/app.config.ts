import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, APP_INITIALIZER } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withPreloading, PreloadAllModules, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouteInterceptor } from './interceptors/route.interceptor';

function initializeRouteInterceptor(routeInterceptor: RouteInterceptor) {
    return () => { }; // Just inject to initialize listeners
}

export const appConfig: ApplicationConfig = {
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initializeRouteInterceptor,
            deps: [RouteInterceptor],
            multi: true
        },
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(
            routes,
            withViewTransitions({
                skipInitialTransition: true,
            }),
            withPreloading(PreloadAllModules),
            withInMemoryScrolling({
                scrollPositionRestoration: 'top',
                anchorScrolling: 'enabled'
            })
        ),
        provideAnimations(),
        provideHttpClient(),
        provideClientHydration()
    ]
};
