import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="contact-info">
      <div class="container">
        <!-- Section Header Removed as requested -->
        
        <div class="info-grid">
          <div class="info-card" *ngFor="let item of contactItems">
            <div class="info-card__glow"></div>
            <div class="info-card__icon">
              <i [class]="item.icon"></i>
            </div>
            <div class="info-card__content">
              <h3 class="info-card__label">{{item.label}}</h3>
              <p class="info-card__detail" [innerHTML]="item.detail"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-info {
      padding: 40px 0 120px;
      background: var(--bg-primary, #0f1419);
      position: relative;
      overflow: hidden;

      @media (max-width: 768px) {
        padding: 80px 0;
      }
    }

    .section-header {
      margin-bottom: 70px;
      text-align: center;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    .section-tag {
      display: inline-block;
      color: var(--color-accent-blue);
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 15px;
      padding: 6px 16px;
      background: rgba(0, 102, 255, 0.1);
      border: 1px solid rgba(0, 102, 255, 0.12);
      border-radius: 50px;
    }

    .section-title {
      font-size: clamp(2.5rem, 5vw, 3.5rem);
      font-weight: 900;
      color: #fff;
      letter-spacing: -0.03em;
      margin-bottom: 15px;
    }

    .section-desc {
      color: #94a3b8;
      font-size: 1.15rem;
      line-height: 1.6;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      
      @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @media (max-width: 640px) {
        grid-template-columns: 1fr;
      }
    }

    .info-card {
      position: relative;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 32px;
      padding: 50px 35px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 25px;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;

      &:hover {
        background: #ffffff;
        transform: translateY(-12px);
        border-color: rgba(0, 102, 255, 0.2);
        box-shadow: 0 40px 80px rgba(0, 0, 0, 0.4);
        
        .info-card__icon {
          background: #004a78;
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 74, 120, 0.3);
          
          i {
            color: #ffffff !important;
          }
        }

        .info-card__label {
          color: #0c152a;
        }

        .info-card__detail {
          color: #475569;
        }

        .info-card__glow {
          opacity: 1;
        }
      }
    }

    .info-card__glow {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, rgba(0, 102, 255, 0.08) 0%, transparent 70%);
      opacity: 0;
      transition: opacity 0.5s ease;
      pointer-events: none;
    }

    .info-card__icon {
      width: 70px;
      height: 70px;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.75rem;
      flex-shrink: 0;
      transition: all 0.4s ease;
      border: 1px solid rgba(255, 255, 255, 0.05);
      z-index: 1;

      i {
        color: var(--color-accent-blue);
        transition: color 0.4s ease;
      }
    }

    .info-card__content {
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 1;
    }

    .info-card__label {
      font-size: 1.35rem;
      font-weight: 800;
      color: #fff;
      margin-bottom: 0;
      letter-spacing: -0.01em;
    }

    .info-card__detail {
      margin: 0;
      color: #94a3b8;
      font-size: 1.1rem;
      line-height: 1.6;
      font-weight: 500;
    }

    /* Light Mode */
    :host-context(.theme-light) .contact-info { background: #dbd9fd; }
    :host-context(.theme-light) .section-title { color: #0c152a; }
    :host-context(.theme-light) .section-desc { color: #475569; }
    :host-context(.theme-light) .section-tag { background: rgba(0, 74, 120, 0.05); color: #004a78; }

    :host-context(.theme-light) .info-card {
      background: #fff;
      border-color: rgba(0, 102, 255, 0.06);
      box-shadow: 0 10px 40px rgba(0, 74, 120, 0.04);
      
      &:hover {
        background: #fff;
        border-color: rgba(0, 102, 255, 0.15);
        box-shadow: 0 30px 60px rgba(0, 74, 120, 0.08);

        .info-card__icon {
          background: #004a78;
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 74, 120, 0.2);

          i {
            color: #ffffff !important;
          }
        }
      }
    }

    :host-context(.theme-light) .info-card__icon {
      background: #f1f5f9;
      
      i {
        color: #004a78 !important;
      }
    }

    :host-context(.theme-light) .info-card__label { color: #0c152a; }
    :host-context(.theme-light) .info-card__detail { color: #526077; }
  `]
})
export class ContactInfoComponent {
  contactItems = [
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      detail: '+234 802 982 4786'
    },
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      detail: 'info@tajnetworkafrica.com'
    },
    {
      icon: 'fas fa-location-arrow',
      label: 'Location',
      detail: 'Block 1, Flat 2, Philcruz Estate,<br>Lugbe Airport Road, Abuja'
    }
  ];
}
