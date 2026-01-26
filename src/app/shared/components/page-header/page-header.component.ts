import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="page-header">
      <div class="page-header__bg" [style.background-image]="'url(' + bgImage + ')'"></div>
      <div class="page-header__overlay"></div>

      <!-- Decorative Shapes -->
      <div class="page-header__shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
      
      <div class="container">
        <div class="page-header__inner">
          <!-- <div class="page-header__breadcrumbs" *ngIf="showBreadcrumbs">
            <a routerLink="/services">Services</a>
            <span class="separator"><i class="fas fa-chevron-right"></i></span>
            <span class="current">{{ title }}</span>
          </div> -->
          <h2 class="page-header__title">{{ title }}</h2>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-header {
      position: relative;
      display: flex;
      align-items: center;
      padding-top: clamp(140px, 20vh, 240px);
      padding-bottom: clamp(60px, 10vh, 120px);
      min-height: clamp(350px, 50vh, 480px);
      overflow: hidden;
      z-index: 1;
      background: var(--color-primary-dark, #0f1419);
    }

    .page-header__bg {
      position: absolute;
      inset: 0;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      z-index: -2;
      transform: scale(1.05);
      transition: transform 10s ease;
    }

    .page-header:hover .page-header__bg {
      transform: scale(1.1);
    }

    .page-header__overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(0, 74, 120, 0.92) 0%, rgba(15, 20, 25, 0.85) 100%);
        z-index: -1;
    }

    /* Decorative Shapes */
    .page-header__shapes {
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
    }

    .shape {
      position: absolute;
      border-radius: 50%;
      filter: blur(100px);
      opacity: 0.2;
    }

    .shape-1 {
      width: 400px;
      height: 400px;
      background: var(--color-accent-blue);
      top: -150px;
      left: -100px;
    }

    .shape-2 {
      width: 300px;
      height: 300px;
      background: var(--color-accent-purple);
      bottom: -100px;
      right: -50px;
    }

    .shape-3 {
      width: 250px;
      height: 250px;
      background: var(--color-accent-emerald);
      top: 20%;
      right: 15%;
    }


    .page-header__inner {
      position: relative;
      text-align: center;
      z-index: 3;
      width: 100%;
    }

    .page-header__breadcrumbs {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin-bottom: 20px;
      font-size: 0.95rem;
      font-weight: 500;
      
      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        transition: color 0.3s ease;
        &:hover { color: #fff; }
      }

      .separator {
        color: rgba(255, 255, 255, 0.2);
        font-size: 0.75rem;
      }

      .current {
        color: #fff;
        font-weight: 700;
        opacity: 0.9;
      }
    }

    .page-header__title {
      font-size: clamp(3rem, 8vw, 5rem);
      font-weight: 900;
      color: #fff !important;
      margin: 0;
      line-height: 1.1;
      letter-spacing: -0.04em;
      text-transform: capitalize;
      text-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
    }

    /* Light Mode - Keep Dark Hero Design */
    :host-context(.theme-light) .page-header {
      /* No change to background - keep dark */
    }

    :host-context(.theme-light) .page-header__overlay {
        /* Keep original dark gradient */
    }
  `]
})
export class PageHeaderComponent {
  @Input() title: string = '';
  @Input() bgImage: string = 'assets/images/taj/homeslider/slider5.jpg'; // Default
  @Input() showBreadcrumbs: boolean = true;
}
