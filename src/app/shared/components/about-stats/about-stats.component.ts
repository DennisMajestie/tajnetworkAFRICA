import { Component, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-stats" #statsSection>
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item" *ngFor="let stat of animatedStats">
            <h2 class="stat-number">
              {{stat.prefix}}{{stat.displayValue}}{{stat.suffix}}
            </h2>
            <p class="stat-label">{{stat.label}}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-stats {
      padding: 100px 0;
      background: transparent;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .stats-grid {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      gap: 30px;
      
      @media (max-width: 768px) {
        flex-direction: column;
      }
    }

    .stat-item {
      flex: 1;
    }

    .stat-number {
      font-size: clamp(3.5rem, 8vw, 5.5rem);
      font-weight: 800;
      color: #fff;
      margin-bottom: 10px;
      letter-spacing: -0.02em;
      font-variant-numeric: tabular-nums;
    }

    .stat-label {
      font-size: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-accent-blue, #0066ff);
    }

    /* ================================
       LIGHT MODE OVERRIDES
       ================================ */
    :host-context(.theme-light) .about-stats {
      background: transparent;
      border-color: rgba(0, 102, 255, 0.05);
    }

    :host-context(.theme-light) .stat-number {
      color: #0c152a;
    }
  `]
})
export class AboutStatsComponent implements AfterViewInit {
  @ViewChild('statsSection') statsSection!: ElementRef;
  private isBrowser: boolean;

  animatedStats = [
    { target: 400, current: 0, displayValue: '0', label: 'Projects Delivered', suffix: '+', prefix: '' },
    { target: 350, current: 0, displayValue: '0', label: 'Happy Clients', suffix: '+', prefix: '' },
    { target: 15, current: 0, displayValue: '0', label: 'Years Experience', suffix: '+', prefix: '' }
  ];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.statsSection.nativeElement,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });

    this.animatedStats.forEach((stat, index) => {
      tl.to(stat, {
        current: stat.target,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          // Format number with commas for the 10,000 case
          stat.displayValue = Math.floor(stat.current).toLocaleString();
        }
      }, 0); // All start at same time
    });
  }
}
