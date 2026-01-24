import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-block',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="cta-section">
      <div class="container">
        <div class="cta-glass">
          <div class="cta-content">
            <h2 class="cta-title" *ngIf="data.heading">{{ data.heading }}</h2>
            <p class="cta-desc" *ngIf="data.subheading">{{ data.subheading }}</p>
            
            <div class="cta-group" *ngIf="data.buttons">
              <a *ngFor="let btn of data.buttons"
                 [href]="btn.url"
                 class="cta-btn"
                 [class.cta-btn--primary]="btn.style === 'primary'"
                 [class.cta-btn--secondary]="btn.style !== 'primary'">
                {{ btn.text }}
                <i class="fa-solid fa-arrow-right" *ngIf="btn.style === 'primary'"></i>
              </a>
            </div>
          </div>

          <!-- Decorative Background Elements -->
          <div class="cta-bg">
            <div class="orb orb-1"></div>
            <div class="orb orb-2"></div>
            <div class="grid-mesh"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cta-section {
       padding: 100px 0; 
       
    background: linear-gradient(180deg, #f8faff 0%, #eef2ff 100%);
      //  background: var(--color-primary-dark);
       }
    
    .cta-glass {
      position: relative;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 2.5rem;
      padding: 5rem 3rem;
      text-align: center;
      overflow: hidden;
      backdrop-filter: blur(10px);
      
      @media (max-width: 640px) { padding: 3rem 1.5rem; }
    }

    .cta-content { position: relative; z-index: 5; max-width: 800px; margin: 0 auto; }

    .cta-title {
      font-family: var(--font-heading);
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 800;
      color: white;
      margin-bottom: 1.5rem;
      line-height: 1.1;
      letter-spacing: -0.02em;
    }

    .cta-desc {
      color: var(--color-neutral-darkGray);
      font-size: 1.25rem;
      margin-bottom: 3rem;
      line-height: 1.5;
    }

    .cta-group { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

    .cta-btn {
      padding: 1rem 2.5rem;
      border-radius: 99px;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      
      i { transition: transform 0.3s ease; }
      &:hover i { transform: translateX(4px); }
    }

    .cta-btn--primary {
      background: var(--color-accent-blue);
      color: white;
      box-shadow: 0 10px 20px -5px rgba(0, 102, 255, 0.3);
      &:hover { background: var(--color-accent-purple); transform: translateY(-3px); box-shadow: 0 20px 40px -10px rgba(111, 66, 193, 0.4); }
    }

    .cta-btn--secondary {
      background: transparent;
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.2);
      &:hover { background: rgba(255, 255, 255, 0.1); border-color: #ffffff; }
    }

    /* Background Orbs */
    .cta-bg { position: absolute; inset: 0; pointer-events: none; }
    
    .orb {
      position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.3;
      &.orb-1 { width: 400px; height: 400px; background: var(--color-accent-blue); top: -200px; left: -100px; }
      &.orb-2 { width: 300px; height: 300px; background: var(--color-accent-emerald); bottom: -150px; right: -50px; }
    }

    .grid-mesh {
      position: absolute; inset: 0;
      background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
      background-size: 40px 40px;
    }

    /* Light Mode Overrides */
    :host-context(.theme-light) .cta-glass {
      background: #ffffff;
      border: 1.5px solid rgba(0, 102, 255, 0.15);
      box-shadow: 0 20px 40px rgba(0, 74, 120, 0.08);
    }

    :host-context(.theme-light) .cta-title {
      color: #004a78;
    }

    :host-context(.theme-light) .cta-desc {
      color: #475569;
    }

    :host-context(.theme-light) .cta-btn--secondary {
      color: #004a78;
      border-color: rgba(0, 74, 120, 0.3);
      &:hover {
        background: rgba(0, 74, 120, 0.05);
        border-color: #004a78;
      }
    }

    :host-context(.theme-light) .grid-mesh {
      background-image: radial-gradient(rgba(0, 74, 120, 0.1) 1px, transparent 1px);
    }
  `]
})
export class CtaBlockComponent {
  @Input() data: any;
}

