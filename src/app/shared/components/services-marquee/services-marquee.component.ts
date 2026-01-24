import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-marquee',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="marquee-section">
      <div class="marquee-track">
        <div class="marquee-content">
          <ng-container *ngFor="let item of items">
            <span class="marquee-item">{{ item }}</span>
            <span class="marquee-separator"><i class="fas fa-star-of-life"></i></span>
          </ng-container>
        </div>
        <!-- Duplicate for seamless loop -->
        <div class="marquee-content" aria-hidden="true">
          <ng-container *ngFor="let item of items">
            <span class="marquee-item">{{ item }}</span>
            <span class="marquee-separator"><i class="fas fa-star-of-life"></i></span>
          </ng-container>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .marquee-section {
      background: var(--color-accent-blue);
      padding: 1.5rem 0;
      overflow: hidden;
      position: relative;
      width: 100%;
      transform: rotate(-2deg) scale(1.05);
      margin: 2rem 0;
      border-top: 2px solid rgba(0,0,0,0.1);
      border-bottom: 2px solid rgba(0,0,0,0.1);
      box-shadow: 0 10px 40px rgba(0, 102, 255, 0.3);
      z-index: 5;
    }

    .marquee-track {
      display: flex;
      width: fit-content;
      animation: marquee 20s linear infinite;
    }

    .marquee-content {
      display: flex;
      align-items: center;
      gap: 3rem;
      padding-right: 3rem;
    }

    .marquee-item {
      font-family: var(--font-display);
      font-size: 1.75rem;
      font-weight: 800;
      text-transform: uppercase;
      color: #ffffff;
      white-space: nowrap;
      letter-spacing: 1px;
    }

    .marquee-separator {
      color: rgba(255, 255, 255, 0.6);
      font-size: 1.25rem;
      animation: spin 6s linear infinite;
    }

    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @media (max-width: 768px) {
      .marquee-section {
        transform: rotate(-1deg) scale(1.02);
        padding: 1rem 0;
      }

      .marquee-item {
        font-size: 1rem;
        font-weight: 700;
      }
    }
  `]
})
export class ServicesMarqueeComponent {
  items = [
    'Web Design', 'App Development', 'UI/UX Design',
    'Cyber Security', 'Digital Marketing', 'Cloud Solutions',
    'Dashboard', 'Wireframing', 'Brand Identity',
    'SEO Optimization', 'Consultancy'
  ];
}
