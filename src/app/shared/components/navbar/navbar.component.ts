import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { ConfigService } from '../../../core/services/config.service';
import { ThemeService } from '../../../core/services/theme.service';
import { NavigationConfig, NavItem } from '../../../core/models/types';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar" [class.navbar--scrolled]="isScrolled" [class.navbar--mobile-open]="isMobileMenuOpen">
      <div class="container navbar__container">
        <!-- Logo -->
        <a routerLink="/" class="navbar__logo" (click)="closeMobileMenu()">
          <img src="assets/images/taj/tajlogo.png" alt="Taj Network Africa" class="navbar__logo-img" width="160" height="44">
        </a>

        <!-- Desktop Menu -->
        <ul class="navbar__menu">
          <li *ngFor="let item of navConfig?.main" class="navbar__item">
            <a [routerLink]="item.url" 
               routerLinkActive="navbar__link--active"
               [routerLinkActiveOptions]="{exact: item.url === '/'}"
               class="navbar__link">
              {{ item.text }}
            </a>
          </li>
        </ul>

        <!-- Actions -->
        <div class="navbar__actions">
          <a *ngIf="navConfig?.cta" 
             [routerLink]="navConfig!.cta!.url" 
             class="btn-primary navbar__cta">
            {{ navConfig!.cta!.text }}
          </a>

          <!-- Theme Toggle -->
          <!-- <button class="navbar__theme-toggle" (click)="toggleTheme()" [attr.aria-label]="themeService.isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'">
            <svg *ngIf="themeService.isDarkMode()" class="theme-icon theme-icon--sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
            <svg *ngIf="!themeService.isDarkMode()" class="theme-icon theme-icon--moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button> -->

          <!-- Mobile Toggle -->
          <button class="navbar__toggle" (click)="toggleMobileMenu()" aria-label="Toggle Navigation">
            <div class="navbar__toggle-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      <div class="navbar__mobile-menu" [class.navbar__mobile-menu--open]="isMobileMenuOpen">
        <div class="navbar__mobile-content">
          <ul class="navbar__mobile-list">
            <li *ngFor="let item of navConfig?.main">
              <a [routerLink]="item.url" 
                 class="navbar__mobile-link"
                 routerLinkActive="navbar__mobile-link--active"
                 [routerLinkActiveOptions]="{exact: item.url === '/'}"
                 (click)="closeMobileMenu()">
                {{ item.text }}
              </a>
            </li>
          </ul>
          <div class="navbar__mobile-footer">
             <a *ngIf="navConfig?.cta" 
               [routerLink]="navConfig!.cta!.url" 
               class="btn-primary w-full justify-center"
               (click)="closeMobileMenu()">
              {{ navConfig!.cta!.text }}
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      /* Dynamic Layout Variables for Morphing */
      --navbar-width: 80%;
      --navbar-top: 1.5rem;
      --navbar-radius: 100px;
      --navbar-bg: rgba(15, 20, 25, 0.95);
      --navbar-padding: 1rem 2rem;
      --navbar-border: rgba(255, 255, 255, 0.05);
      --navbar-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);

      position: fixed;
      top: var(--navbar-top);
      left: 50%;
      transform: translateX(-50%);
      width: var(--navbar-width);
      z-index: 1000;
      padding: var(--navbar-padding);
      background: var(--navbar-bg);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid var(--navbar-border);
      border-radius: var(--navbar-radius);
      box-shadow: var(--navbar-shadow);
      
      /* Seamless Morphing Transition */
      transition: 
        width 0.6s cubic-bezier(0.4, 0, 0.2, 1),
        top 0.6s cubic-bezier(0.4, 0, 0.2, 1),
        border-radius 0.6s cubic-bezier(0.4, 0, 0.2, 1),
        background 0.5s ease,
        padding 0.5s ease,
        box-shadow 0.5s ease,
        height 0.4s ease;

      &--mobile-open {
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
        display: block !important; /* Force block layout to prevent flex centering */
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }

      
      &--scrolled {
        --navbar-width: 100%;
        --navbar-top: 0;
        --navbar-radius: 0;
        --navbar-padding: 1.25rem 0;
        --navbar-bg: rgba(2, 12, 24, 0.95);
        --navbar-shadow: 0 4px 30px rgba(0, 102, 255, 0.15), 0 1px 3px rgba(0, 0, 0, 0.2);
        border: none;
        border-bottom: 1px solid rgba(0, 102, 255, 0.2);
      }

      @media (max-width: 768px) {
        --navbar-bg: #0b1120; /* Solid Dark on Mobile */
        --navbar-padding: 0.75rem 1rem;
        --navbar-radius: 100px;
        --navbar-width: 95%;
        --navbar-top: 0.75rem;
        --navbar-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

        &.navbar--mobile-open {
          --navbar-width: 100%;
          --navbar-top: 0;
          --navbar-radius: 0;
          height: 100vh;
          overflow: hidden;
        }
      }

      /* Tablet breakpoint - Extended to 1150px to cover iPad Pro 12.9" portrait */
      @media (min-width: 769px) and (max-width: 1150px) {
        --navbar-width: 92%;
        --navbar-padding: 1rem 1.5rem;
        --navbar-radius: 100px;
        --navbar-top: 1rem;
      }
    }

    /* Light Mode Floating Pill Overrides */
    :host-context(.theme-light) .navbar {
      --navbar-width: 80%;
      --navbar-top: 1.5rem;
      --navbar-radius: 100px;
      --navbar-bg: rgba(255, 255, 255, 0.97);
      --navbar-border: rgba(0, 74, 120, 0.1);
      --navbar-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
      --navbar-padding: 1.25rem 2rem;
      
      border: 1px solid var(--navbar-border);
      border-bottom: 1px solid var(--navbar-border);
      
      /* When scrolled: expand to full width glass bar to cover content */
      &.navbar--scrolled {
        --navbar-width: 100%;
        --navbar-top: 0;
        --navbar-radius: 0;
        --navbar-bg: rgba(255, 255, 255, 0.95);
        --navbar-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        --navbar-padding: 1.25rem 0;
        border: none;
        border-bottom: 1px solid var(--navbar-border);
      }

      @media (max-width: 768px) {
        --navbar-width: 95%; /* Increased from 90% for more space */
        --navbar-padding: 0.6rem 1.25rem;
        --navbar-top: 0.75rem;
        --navbar-radius: 100px; /* Kept rounder for "pill" feel */
        --navbar-bg: #ffffff; /* Solid White on Mobile Light Mode */
        --navbar-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        
        &.navbar--scrolled, &.navbar--mobile-open {
          --navbar-width: 100%;
          --navbar-top: 0;
          --navbar-radius: 0;
          --navbar-bg: #ffffff;
        }
      }

      /* Tablet breakpoint for light mode */
      @media (min-width: 769px) and (max-width: 1150px) {
        --navbar-width: 95%;
        --navbar-padding: 1rem 1.5rem;
        --navbar-radius: 100px;
        --navbar-top: 1rem;
      }
      
      /* Between 1151px and 1400px: Keep width slightly higher to prevent menu overlap */
      @media (min-width: 1151px) and (max-width: 1400px) {
        --navbar-width: 95%;
      }
    }

    .navbar__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      
      .navbar--mobile-open & {
        height: 80px !important; /* Fixed height for header bar when open */
        width: 100%;
        margin-top: 0;
      }
    }

    .navbar__logo {
      display: flex;
      align-items: center;
      z-index: 1001;
      flex-shrink: 0;
    }

    .navbar__logo-img {
      height: clamp(32px, 5vw, 40px);
      width: auto;
      transition: transform 0.3s ease;
      
      @media (min-width: 769px) {
        height: clamp(50px, 6vw, 65px);
      }
      
      &:hover {
        transform: scale(1.05);
      }
    }

    .navbar__menu {
      display: none;
      list-style: none;
      gap: 2.5rem;
      margin: 0;
      padding: 0;

      @media (min-width: 1151px) {
        display: flex;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        
        /* Reduce gap on smaller laptop screens */
        @media (max-width: 1300px) {
          gap: 1.5rem;
        }
      }
    }

    .navbar__link {
      color: var(--color-neutral-mediumGray);
      text-decoration: none;
      font-weight: 500;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--color-accent-blue);
        transition: width 0.3s ease;
      }

      &:hover, &--active {
        color: var(--color-neutral-white);
        
        &::after {
          width: 100%;
        }
      }

      :host-context(.theme-light) & {
        color: #1e1b4b; /* Indigo 950 for contrast */
        
        &:hover, &--active {
          color: var(--color-accent-blue);
        }
      }
    }

    .navbar__actions {
      display: flex;
      align-items: center;
      gap: 0.75rem; /* Reduced gap for mobile */
      z-index: 1001;

      @media (min-width: 769px) {
        gap: 1.5rem;
      }
    }

    .navbar__cta {
      display: none;
      
      @media (min-width: 769px) {
        display: inline-flex;
        padding:10px 43px;
        height: 48px;
        font-size: 1.05rem;
      }

      @media (min-width: 1151px) {
        padding: 0 40px;
        height: 52px;
        font-size: 1.25rem;
      }

      &:focus,
      &:focus-visible,
      &:focus:not(:focus-visible) {
        outline: none !important;
        box-shadow: none !important;
      }

      &:active {
        transform: translateY(0px) !important;
        box-shadow: none !important;
      }
    }

    .navbar__theme-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      color: #f1f5f9;

      &:hover {
        background: rgba(99, 102, 241, 0.2);
        border-color: rgba(99, 102, 241, 0.4);
        transform: rotate(15deg) scale(1.1);
      }

      :host-context(.theme-light) & {
        background: rgba(0, 74, 120, 0.05);
        border-color: rgba(0, 74, 120, 0.1);
        color: var(--color-accent-blue);

        &:hover {
          background: rgba(0, 74, 120, 0.1);
          border-color: rgba(0, 74, 120, 0.2);
        }
      }

      .theme-icon {
        width: 22px;
        height: 22px;
        transition: all 0.4s ease;
      }

      .theme-icon--sun {
        color: #fff;
      }

      .theme-icon--moon {
        color: currentColor;
      }

      :host-context(.theme-light) & .theme-icon--moon {
        color: #004a78;
      }
    }

    .navbar__toggle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      cursor: pointer;
      padding: 0;
      transition: all 0.3s ease;

      @media (min-width: 1151px) {
        display: none;
      }

      &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: var(--color-accent-blue);
      }

      :host-context(.theme-light) & {
        background: #f1f5f9;
        border: 1px solid #e2e8f0;
        
        span { background: #004a78; }
      }
    }

    .navbar__toggle-icon {
      width: 20px;
      height: 14px;
      position: relative;
      display:flex;
      span {
        position: absolute;
        width: 100%;
        height: 2px;
        background: var(--color-neutral-white);
        border-radius: 2px;
        transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

        &:nth-child(1) { top: 0; }
        &:nth-child(2) { top: 6px; }
        &:nth-child(3) { top: 12px; }
      }
    }

    .navbar--mobile-open {
      --navbar-bg: #0b1120 !important;
      --navbar-shadow: none;
      border-bottom-color: rgba(255, 255, 255, 0.1);

      :host-context(.theme-light) & {
        --navbar-bg: #ffffff !important;
        border-bottom-color: #f1f5f9;
      }

      .navbar__toggle-icon {
        span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        span:nth-child(2) { opacity: 0; }
        span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
      }
    }

    .navbar__mobile-menu {
      position: absolute; /* Changed from fixed to absolute since parent is now 100vh */
      top: 80px; /* Start below the fixed header bar */
      left: 0;
      right: 0;
      bottom: 0;
      background: #0b1120; /* Solid Dark Background */
      z-index: 998; /* Below the main container (1001) */
      padding: 0;
      transform: translateY(-100%);
      transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), visibility 0s linear 0.5s, opacity 0.5s ease;
      display: flex;
      flex-direction: column;
      visibility: hidden;
      opacity: 0;
      pointer-events: none;
      
      :host-context(.theme-light) & {
        background: #ffffff; /* Solid White Background */
      }
      
      &--open {
        transform: translateY(0);
        visibility: visible;
        opacity: 1;
        pointer-events: auto;
        transition: transform 0.5s cubic-bezier(0.2, 0, 0.1, 1), visibility 0s linear 0s, opacity 0.3s ease;
      }

      @media (min-width: 1024px) {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
    }

    .navbar__mobile-content {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 3rem;
      height: 100%;
    }

    .navbar__mobile-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .navbar__mobile-link {
      font-size: 2rem;
      font-weight: 700;
      color: var(--color-neutral-white);
      text-decoration: none;
      font-family: var(--font-heading);
      transition: all 0.3s ease;

      &--active {
        color: var(--color-accent-blue);
      }
      
      &:hover {
        padding-left: 1rem;
        color: var(--color-accent-blue);
      }

      :host-context(.theme-light) & {
        color: #004a78;
        
        &--active { color: #0066a5; }
      }
    }

    .navbar__mobile-footer {
      margin-top: auto;
      padding-bottom: 2rem;
    }
  `]
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  navConfig: NavigationConfig | null = null;

  constructor(
    private configService: ConfigService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    public themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.configService.getNavigation().subscribe(config => {
      this.navConfig = config;
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeMobileMenu();
    });

    if (isPlatformBrowser(this.platformId)) {
      this.handleScroll();
    }
  }

  @HostListener('window:scroll', [])
  handleScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.scrollY > 50;
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
