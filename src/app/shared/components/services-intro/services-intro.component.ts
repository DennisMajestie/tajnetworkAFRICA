import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services-intro',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="services-intro services-intro-structural">
      <!-- <div class="services-intro__bg" [style.background-image]="'url(' + bgImage + ')'"></div> -->
      <div class="services-intro__overlay"></div>

      <!-- Decorative Shapes -->
      <div class="services-intro__shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
      </div>

      
      <div class="container services-intro-container">
        <div class="services-intro__content">
          <div class="services-intro__breadcrumbs" *ngIf="showBreadcrumbs">
            <a routerLink="/">Home</a>
            <span class="separator"><i class="fas fa-chevron-right"></i></span>
            <span class="current">{{ title }}</span>
          </div>
          <span class="services-intro__tag">{{ tag }}</span>
          <h2 class="services-intro__title">{{ title }}</h2>
          <p class="services-intro__subtitle" *ngIf="subtitle">{{ subtitle }}</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-intro {
      position: relative;
      padding: 240px 0 100px;
      overflow: hidden;
      min-height: 450px;
      display: flex;
      align-items: center;
      background: var(--color-primary-dark, #0f1419);

      @media (max-width: 768px) {
        padding: clamp(120px, 15vh, 160px) 0 80px;
        min-height: 350px;
      }
    }

    .services-intro-container {
      position: relative;
      z-index: 3;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .services-intro__bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      z-index: 0;
      transform: scale(1.05);
      transition: transform 10s ease;
    }

    .services-intro:hover .services-intro__bg {
      transform: scale(1.1);
    }

    .services-intro__overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, 
        rgba(2, 12, 24, 0.95) 0%, 
        rgba(0, 74, 120, 0.7) 50%, 
        rgba(2, 12, 24, 0.95) 100%
      );
      z-index: 1;
    }

    /* Decorative Shapes */
    .services-intro__shapes {
      position: absolute;
      inset: 0;
      z-index: 2;
      pointer-events: none;
    }

    .shape {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.3;
    }

    .shape-1 {
      width: 300px;
      height: 300px;
      background: var(--color-accent-blue);
      top: -100px;
      right: -50px;
    }

    .shape-2 {
      width: 200px;
      height: 200px;
      background: var(--color-accent-emerald);
      bottom: -50px;
      left: -50px;
    }

    .services-intro__content {
      text-align: center;
      width: 100%;
    }

    .services-intro__breadcrumbs {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin-bottom: 25px;
      font-size: 0.9rem;
      font-weight: 500;
      
      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        transition: color 0.3s ease;
        &:hover { color: #fff; }
      }

      .separator {
        color: rgba(255, 255, 255, 0.3);
        font-size: 0.7rem;
      }

      .current {
        color: var(--color-accent-emerald);
        font-weight: 700;
      }
    }

    .services-intro__tag {
      display: inline-block;
      padding: 10px 24px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 100px;
      font-size: 0.75rem;
      font-weight: 600;
      color: #ffffff;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-bottom: 30px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .services-intro__title {
      color: #fff !important;
      font-size: clamp(2.5rem, 8vw, 4.5rem);
      font-weight: 700;
      line-height: 1.1;
      margin: 0 0 20px;
      letter-spacing: -0.05em;
      text-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
    }

    .services-intro__subtitle {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.25rem;
      max-width: 750px;
      margin: 0 auto;
      line-height: 1.6;
      font-weight: 500;
    }

    /* Light Mode - HQ Elite Experience */
    :host-context(.theme-light) .services-intro {
      background: #f8faff;
    }


    :host-context(.theme-light) .services-intro__overlay {
      background: linear-gradient(135deg, 
        rgba(2, 12, 24, 0.95) 0%, 
        rgba(0, 74, 120, 0.7) 50%, 
        rgba(2, 12, 24, 0.95) 100%
      );
    }

    :host-context(.theme-light) .services-intro__title { color: #ffffff !important; text-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); }
    :host-context(.theme-light) .services-intro__subtitle { color: rgba(255, 255, 255, 0.9); }
    :host-context(.theme-light) .services-intro__breadcrumbs a { color: rgba(255, 255, 255, 0.7); }
    :host-context(.theme-light) .services-intro__breadcrumbs .current { color: #ffffff; }
    :host-context(.theme-light) .services-intro__breadcrumbs .separator { color: rgba(255, 255, 255, 0.2); }
    :host-context(.theme-light) .services-intro__tag { color: #ffffff; border-color: rgba(255, 255, 255, 0.2); background: rgba(255, 255, 255, 0.1); }
  `]
})
export class ServicesIntroComponent {
  @Input() tag: string = 'Our Solutions';
  @Input() title: string = 'Digital Excellence';
  @Input() subtitle: string = '';
  @Input() bgImage: string = 'assets/images/backgrounds/slider-3-1.jpg';
  @Input() showBreadcrumbs: boolean = false;
}
