import { Component, AfterViewInit, HostListener, OnDestroy, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { RouterOutlet, ChildrenOutletContexts, Router, NavigationEnd } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollAnimationService } from './core/services/scroll-animation.service';
import { PreloaderComponent } from './shared/components/preloader/preloader.component';
import { ModernFooterComponent } from './shared/components/modern-footer/modern-footer.component';
import { BackToTopComponent } from './shared/components/back-to-top/back-to-top.component';
import { CustomCursorComponent } from './shared/components/custom-cursor/custom-cursor.component';
import { BrandBackgroundComponent } from './shared/components/brand-background/brand-background.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, PreloaderComponent, ModernFooterComponent, BackToTopComponent, CustomCursorComponent, BrandBackgroundComponent],
  template: `
    <!-- Global Brand Background Elements (PDF Style) -->
    <app-brand-background></app-brand-background>
 
    <!-- Premium Magnetic Cursor -->
    <taj-custom-cursor></taj-custom-cursor>
    
    <!-- Radial Data Flow Preloader -->
    <app-preloader
      *ngIf="showPreloader"
      (loadingComplete)="onPreloaderComplete()">
    </app-preloader>

    <!-- Main App Container - Fades in after preloader -->
    <div class="app-container" [class.visible]="!showPreloader">
      <!-- Global Progress Bar -->
      <div id="scroll-progress"></div>

      <!-- Modern App Layout -->
      <app-navbar></app-navbar>
      
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>

      <!-- Global Footer -->
      <app-footer></app-footer>

      <!-- Go Back Top -->
      <app-back-to-top></app-back-to-top>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }

    .app-container {
      opacity: 0;
      transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
      
      &.visible {
        opacity: 1;
      }
    }

    .main-content {
      min-height: calc(100vh - 80px);
    }
  `]
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'tajAfrica';
  showPreloader = true;
  private isBrowser: boolean;

  constructor(
    private scrollAnimations: ScrollAnimationService,
    private contexts: ChildrenOutletContexts,
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;

    // Refresh scroll animations on every navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Small delay to allow DOM to render
      setTimeout(() => {
        this.scrollAnimations.initDramaticScrollEffects();
        window.scrollTo(0, 0);
      }, 100);
    });
  }


  onPreloaderComplete(): void {
    this.showPreloader = false;

    // CRITICAL: Add 'app-loaded' class to body - this reveals the content
    if (this.isBrowser) {
      // Mark body as fully loaded - triggers visibility
      document.body.classList.add('app-loaded');
    }
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    // Button Ripple Effect
    document.addEventListener('click', (e: any) => {
      const target = e.target as HTMLElement;
      const btn = target.closest('.btn-primary, .btn-secondary') as HTMLElement | null;

      // Exclude navbar CTA button from ripple effect
      if (!btn || btn.classList.contains('navbar__cta')) return;

      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      btn.style.setProperty('--ripple-x', `${x}px`);
      btn.style.setProperty('--ripple-y', `${y}px`);

      btn.classList.remove('ripple');
      void btn.offsetWidth; // Trigger reflow
      btn.classList.add('ripple');
    }, { passive: true });

    this.updateScrollProgress();

    // Initialize dramatic scroll animations after a short delay
    setTimeout(() => {
      this.scrollAnimations.initDramaticScrollEffects();
    }, 500);
  }

  ngOnDestroy(): void {
    this.scrollAnimations.destroy();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateScrollProgress();
  }

  private updateScrollProgress(): void {
    const doc = document.documentElement;
    const top = doc.scrollTop || document.body.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;
    const progress = height ? (top / height) * 100 : 0;
    const bar = document.getElementById('scroll-progress');
    if (bar) bar.style.width = progress + '%';
  }
}
