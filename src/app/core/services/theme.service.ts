import { Injectable, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'dark' | 'light';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private isBrowser: boolean;
    private readonly STORAGE_KEY = 'taj-theme-mode';
    private isInitialLoad = true;

    // Reactive signal for theme state - Forced to light
    currentTheme = signal<ThemeMode>('light');

    constructor(@Inject(PLATFORM_ID) platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);

        if (this.isBrowser) {
            this.initTheme();
        }
    }

    private initTheme(): void {
        // Force light mode
        this.applyThemeInstantly('light');

        // Re-enable transitions after first paint
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                this.isInitialLoad = false;
                document.body.style.transition = 'background 0.3s ease, color 0.3s ease';
            });
        });

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem(this.STORAGE_KEY)) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    /** Apply theme WITHOUT transition (for initial load) */
    private applyThemeInstantly(theme: ThemeMode): void {
        this.currentTheme.set(theme);

        // Ensure no transition
        document.body.style.transition = 'none';

        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(this.STORAGE_KEY, theme);

        // Apply theme class to body
        document.body.classList.remove('theme-dark', 'theme-light');
        document.body.classList.add(`theme-${theme}`);
    }

    /** Apply theme WITH transition (for user-triggered changes) */
    private applyThemeWithTransition(theme: ThemeMode): void {
        const doc = document as any;

        // Use View Transitions API if available
        if (doc.startViewTransition) {
            doc.startViewTransition(() => {
                this.executeThemeChange(theme);
            });
        } else {
            // Fallback for older browsers
            this.executeThemeChange(theme);
        }
    }

    private executeThemeChange(theme: ThemeMode): void {
        this.currentTheme.set(theme);
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(this.STORAGE_KEY, theme);

        // Apply theme class to body
        document.body.classList.remove('theme-dark', 'theme-light');
        document.body.classList.add(`theme-${theme}`);
    }

    setTheme(theme: ThemeMode): void {
        if (this.isBrowser) {
            if (this.isInitialLoad) {
                this.applyThemeInstantly(theme);
            } else {
                this.applyThemeWithTransition(theme);
            }
        }
    }

    toggleTheme(): void {
        // Forced to light mode
        this.setTheme('light');
    }

    isDarkMode(): boolean {
        return this.currentTheme() === 'dark';
    }
}
