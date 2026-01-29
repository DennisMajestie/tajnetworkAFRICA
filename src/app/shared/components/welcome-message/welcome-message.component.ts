import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-welcome-message',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="welcome-section">
      <div class="container">
        <div class="welcome-grid">
          <!-- Left: Narrative -->
          <div class="welcome-text">
            <span class="section-tag">Welcome</span>
            <h2 class="welcome-title">Technology with <span class="text-blue">Intention</span></h2>
            <p class="welcome-desc">
              At Taj Network Africa, we build technology with intention. Our work goes beyond code and design—we create digital solutions that are strategic, secure, and built to scale.
            </p>
            <p class="welcome-desc">
              We build digital solutions that empower businesses, strengthen brands, and drive growth through technology designed for impact. Every project is approached with clarity, precision, and a commitment to excellence.
            </p>
          </div>

          <!-- Right: Strategic Boxes -->
          <div class="welcome-boxes">
            <div class="strategy-box" *ngFor="let box of boxes">
              <div class="box-icon">
                <i [class]="box.icon"></i>
              </div>
              <div class="box-content">
                <p class="box-text">{{ box.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
    styles: [`
    .welcome-section {
      padding: 100px 0;
      background: transparent;
    }

    .welcome-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 80px;
      align-items: center;

      @media (max-width: 1100px) {
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
      background: rgba(0, 74, 120, 0.1);
      padding: 8px 20px;
      border-radius: 50px;
    }

    .welcome-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 800;
      color: var(--text-primary);
      line-height: 1.1;
      margin-bottom: 30px;

      .text-blue { color: var(--color-accent-blue); }
    }

    .welcome-desc {
      font-size: 1.15rem;
      line-height: 1.8;
      color: var(--text-secondary);
      margin-bottom: 20px;
    }

    .welcome-boxes {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }

    .strategy-box {
      display: flex;
      gap: 25px;
      align-items: center;
      padding: 30px;
      background: #0066a5; /* Using the shade from the PDF */
      border-radius: 24px;
      color: #fff;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 10px 30px rgba(0, 74, 120, 0.15);

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(0, 74, 120, 0.25);
      }
    }

    .box-icon {
      width: 60px;
      height: 60px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      
      i {
        font-size: 1.8rem;
        color: #fff !important;
      }
    }

    .box-text {
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 1.6;
      margin: 0;
      border-left: 2px solid rgba(255, 255, 255, 0.3);
      padding-left: 20px;
    }
  `]
})
export class WelcomeMessageComponent {
    boxes = [
        {
            icon: 'fas fa-briefcase',
            text: 'We build Technology that solves real world problems and design scalable systems for growth and longevity.'
        },
        {
            icon: 'fas fa-lightbulb',
            text: 'We turn ideas into efficient, working solutions and simplify complexity through smart engineering.'
        },
        {
            icon: 'fas fa-handshake',
            text: 'We prioritize clients need at every stage, creating solutions that support their goals and drive mutual growth.'
        }
    ];
}
