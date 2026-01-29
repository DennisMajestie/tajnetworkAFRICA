import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="cta-banner">
      <div class="cta-banner__bg"></div>
      <div class="container">
        <div class="cta-banner__content">
          <h2 class="cta-banner__title">{{ title }}</h2>
          <p class="cta-banner__subtitle">{{ subtitle }}</p>
          <div class="cta-banner__actions">
            <a [routerLink]="primaryLink" class="cta-btn cta-btn--primary">
              {{ primaryText }}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a [routerLink]="secondaryLink" class="cta-btn cta-btn--secondary">
              {{ secondaryText }}
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .cta-banner {
      position: relative;
      padding: 120px 0;
      overflow: hidden;
      
    box-shadow: 0 40px 100px rgba(0, 74, 120, 0.12), 0 20px 40px rgba(0, 74, 120, 0.08);
      // background: #0a0f14;

      @media (max-width: 768px) {
        padding: clamp(60px, 12vw, 80px) 0;
      }
    }

    .cta-banner__bg {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, #f8faff 0%, #eef2ff 100%);
      border-radius: 40px;
      box-shadow: 0 40px 100px rgba(0, 74, 120, 0.12), 0 20px 40px rgba(0, 74, 120, 0.08);
      z-index: 0;
      border: 1px solid rgba(0, 102, 255, 0.1);

      @media (max-width: 768px) {
        inset: 0 10px;
        border-radius: 20px;
      }
      
      &::before {
        content: '';
        position: absolute;
        top: -50%;
        right: -20%;
        width: 800px;
        height: 800px;
        background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 60%);
        border-radius: 50%;
      }
      
      &::after {
        content: '';
        position: absolute;
        bottom: -30%;
        left: -10%;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 60%);
        border-radius: 50%;
      }
    }

    .cta-banner__content {
      position: relative;
      z-index: 1;
      text-align: center;
      max-width: 700px;
      margin: 0 auto;
    }

    .cta-banner__title {
      font-family: var(--font-display);
      font-size: clamp(2.5rem, 6vw, 3.5rem);
      font-weight: 800;
      color: #004a78 !important; /* Taj Brand Blue */
      line-height: 1.15;
      margin-bottom: 1.5rem;
    }

    .cta-banner__subtitle {
      font-size: 1.25rem;
      color: #334155; /* Dark Gray for Visibility */
      line-height: 1.6;
      margin-bottom: 2.5rem;
    }

    .cta-banner__actions {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.25rem;
      flex-wrap: wrap;
    }

    .cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 2rem;
      border-radius: 30px;
      font-size: 1rem;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      
      svg {
        transition: transform 0.3s ease;
      }
    }

    .cta-btn--primary {
      background:#ffffff;
      color:#176391;
      font-weight: 700;
      box-shadow: 0 4px 20px rgba(0, 102, 255, 0.3);
      
      &:hover {
        transform: translateY(-3px);
        background: var(--color-accent-purple)!important;
        box-shadow: 0 8px 30px rgba(111, 66, 193, 0.4);
        
        svg {
          transform: translateX(5px);
        }
      }
    }

    .cta-btn--secondary {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: #ffffff;
      
      &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: #ffffff;
        transform: translateY(-3px);
      }
    }

    /* Light Mode: Consistent Deep Blue CTA Buttons */
    :host-context(.theme-light) .cta-btn--primary {
      background: #004a78 !important;
      box-shadow: 0 4px 20px rgba(0, 74, 120, 0.3);
      
      &:hover {
        background: #0066a5 !important;
        box-shadow: 0 8px 30px rgba(0, 74, 120, 0.4);
      }
    }

    :host-context(.theme-light) .cta-btn--secondary {
      background: rgba(0, 74, 120, 0.05);
      border-color: rgba(0, 74, 120, 0.2);
      color: #1e1b4b;
      
      &:hover {
        background: rgba(0, 74, 120, 0.1);
        border-color: rgba(0, 74, 120, 0.4);
      }
    }
  `]
})
export class CtaBannerComponent {
  @Input() title = 'Ready to Transform Your Business?';
  @Input() subtitle = 'Get started today with our expert team. From consultation to deployment, we\'re here to help you succeed in the digital landscape.';
  @Input() primaryText = 'Get Started';
  @Input() primaryLink = '/contact';
  @Input() secondaryText = 'Contact Us';
  @Input() secondaryLink = '/contact';
}
