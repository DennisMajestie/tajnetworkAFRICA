import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-history',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-history">
      <div class="container">
        <div class="company-grid">
          <!-- Left: Title and Main Description -->
          <div class="company-text">
            <div class="section-tag">About Our Company</div>
            <h2 class="company-title">Empowering Your Digital Success.</h2>
            <p class="company-desc">
              TAJ Network Africa is a premier technology group dedicated to transforming the African digital landscape through innovative software solutions. We are a dynamic team committed to delivering exceptional software solutions that drive innovation and success.
            </p>
            <p class="company-desc">
              At the heart of our mission lies a dedication to fostering a unique and inclusive environment where creativity thrives and diverse talents collaborate with a focus on excellence.
            </p>
          </div>

          <!-- Right: Key Pillars/Points -->
          <div class="company-pillars">
            <div class="pillar-item" *ngFor="let pillar of pillars; let i = index" 
                 [style.--pillar-color]="pillar.color">
              <div class="pillar-icon" [style.background-color]="pillar.color">
                <i [class]="pillar.icon"></i>
              </div>
              <div class="pillar-content">
                <h3 class="pillar-title">{{pillar.title}}</h3>
                <p class="pillar-text">{{pillar.text}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-history {
      padding: 120px 0;
      background: transparent;
      position: relative;

      @media (max-width: 768px) {
        padding: 60px 0;
      }
    }

    .about-history::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 10%;
      right: 10%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    }

    .company-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 100px;
      align-items: center;
    }

    @media (max-width: 1100px) {
      .company-grid {
        grid-template-columns: 1fr;
        gap: 60px;
      }
    }

    .section-tag {
      display: inline-block;
      color: var(--color-accent-blue);
      font-size: 0.9rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      margin-bottom: 25px;
      background: rgba(0, 102, 255, 0.1);
      padding: 8px 20px;
      border-radius: 50px;
      border: 1px solid rgba(0, 102, 255, 0.15);
    }

    .company-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 800;
      color: #fff;
      line-height: 1.1;
      margin-bottom: 40px;
    }

    .company-desc {
      font-size: 1.15rem;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.6);
      margin-bottom: 25px;
    }

    /* Pillars */
    .company-pillars {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    .pillar-item {
      display: flex;
      gap: 25px;
      align-items: flex-start;
      padding: 30px;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 24px;
      transition: all 0.4s ease;
      position: relative;
      overflow: hidden;
    }

    .pillar-item::before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--pillar-color);
      opacity: 0.04;
      pointer-events: none;
    }

    .pillar-item:hover {
      background: rgba(255, 255, 255, 0.04);
      border-color: var(--pillar-color);
      transform: translateX(10px);

      .pillar-icon i { color: #fff !important; }
    }

    .pillar-item:hover::before {
      opacity: 0.08;
    }

    .pillar-icon {
      width: 50px;
      height: 50px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 1.25rem;
      flex-shrink: 0;
      z-index: 1;
    }

    .pillar-title {
      font-size: 1.35rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 10px;
    }

    .pillar-text {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.5);
      line-height: 1.6;
      margin: 0;
    }

    /* ================================
       LIGHT MODE OVERRIDES
       ================================ */
    :host-context(.theme-light) .about-history { background: transparent; }
    :host-context(.theme-light) .company-title { color: #0c152a; }
    :host-context(.theme-light) .company-desc { color: #475569; }
    
    :host-context(.theme-light) .pillar-item {
      background: #fff;
      border-color: rgba(0, 102, 255, 0.08);
      box-shadow: 0 10px 30px rgba(0, 74, 120, 0.05);
    }
    
    :host-context(.theme-light) .pillar-title { color: #0c152a; }
    :host-context(.theme-light) .pillar-text { color: #64748b; }
    :host-context(.theme-light) .pillar-icon { color: #fff !important; }
    :host-context(.theme-light) .pillar-icon i { color: #fff !important; }

    :host-context(.theme-light) .company-cta {
      border-top-color: rgba(0, 74, 120, 0.1);
    }

    :host-context(.theme-light) .cta-tagline {
      color: #0c152a;
    }
  `]
})
export class AboutHistoryComponent {
  pillars = [
    {
      title: 'Innovation at its Best',
      icon: 'fas fa-lightbulb',
      text: 'Blending creativity and strategy to deliver transformative solutions across the African continent.',
      color: '#0066ff' // TAJ Blue
    },
    {
      title: 'Award-Winning Excellence',
      icon: 'fas fa-trophy',
      text: 'Setting benchmarks with unconventional and exceptional results in every digital system we build.',
      color: '#00d084' // TAJ Emerald
    },
    {
      title: 'Client Empowerment',
      icon: 'fas fa-users',
      text: 'Our success is measured by the growth and success of our clients and their digital evolution.',
      color: '#d4a574' // TAJ Gold
    }
  ];
}
