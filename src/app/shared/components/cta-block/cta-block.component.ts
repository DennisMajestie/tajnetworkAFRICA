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

          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cta-section {
       padding: 100px 0; 
       background: transparent;
    }
    
    .cta-glass {
      position: relative;
      background: var(--bg-card, rgba(255, 255, 255, 0.03));
      border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.1));
      border-radius: 3rem;
      padding: 6rem 3rem;
      text-align: center;
      overflow: hidden;
      backdrop-filter: blur(20px);
      
      @media (max-width: 640px) { padding: 3rem 1.5rem; }
    }

    .cta-content { position: relative; z-index: 5; max-width: 800px; margin: 0 auto; }

    .cta-title {
      font-family: var(--font-heading);
      font-size: clamp(2.5rem, 6vw, 4rem);
      font-weight: 800;
      color: #004a78 !important; /* Taj Brand Blue */
      margin-bottom: 2rem;
      line-height: 1.1;
      letter-spacing: -0.02em;
    }

    .cta-desc {
      color: var(--text-secondary);
      font-size: 1.35rem;
      margin-bottom: 4rem;
      line-height: 1.6;
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
      position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.15;
      &.orb-1 { width: 600px; height: 600px; background: var(--color-accent-blue); top: -300px; left: -200px; }
      &.orb-2 { width: 500px; height: 500px; background: var(--color-accent-purple); bottom: -250px; right: -150px; }
    }

    /* Light Mode Refinement */
    :host-context(.theme-light) .cta-glass {
      background: rgba(255, 255, 255, 0.4);
      border: 1px solid rgba(0, 74, 120, 0.1);
      box-shadow: 0 30px 60px rgba(0, 74, 120, 0.05);
    }

    :host-context(.theme-light) .cta-desc {
      color: #334155;
    }

    :host-context(.theme-light) .cta-btn--secondary {
      color: #004a78;
      border-color: rgba(0, 74, 120, 0.3);
      &:hover {
        background: rgba(0, 74, 120, 0.05);
        border-color: #004a78;
      }
    }
  `]
})
export class CtaBlockComponent {
  @Input() data: any;
}

