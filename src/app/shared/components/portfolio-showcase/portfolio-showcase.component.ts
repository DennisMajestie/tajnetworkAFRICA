import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-portfolio-showcase',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  template: `
    <section class="portfolio-showcase">
      
      <!-- Animated Background Elements -->
      <div class="bg-elements">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>

      </div>

      <div class="container">
        <div class="section-header">
          <span class="section-tag taj-floating" *ngIf="tag">{{ tag }}</span>
          <h2 class="section-title" *ngIf="title">{{ title }}</h2>
          <p class="section-subtitle" *ngIf="subtitle">{{ subtitle }}</p>
        </div>

        <div class="portfolio-grid">
          <div class="portfolio-card" *ngFor="let item of displayItems; let i = index" 
               [style.animation-delay]="i * 0.1 + 's'">
            <div class="">
              <img [ngSrc]="item.image" [alt]="item.title" class="portfolio-card__image" fill>
              <div class="portfolio-card__overlay">
                <div class="portfolio-card__content">
                  <span class="portfolio-card__category">{{ item.category }}</span>
                  <h3 class="portfolio-card__title">{{ item.title }}</h3>
                  <a [routerLink]="['/portfolio']" class="portfolio-card__link">
                    View Project <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="portfolio-footer">
          <a routerLink="/portfolio" class="portfolio-btn-primary">
            <span>Explore All Projects</span>
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .portfolio-showcase {
      padding: 120px 0;
      background: #010816;
      position: relative;
      overflow: hidden;
    }

    /* Animated Background */
    .bg-elements {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .gradient-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(100px);
      opacity: 0.4;
      animation: float 20s ease-in-out infinite;
    }

    .orb-1 {
      width: 600px;
      height: 600px;
      background: linear-gradient(135deg, #0066ff 0%, #6366f1 100%);
      top: -200px;
      left: -100px;
    }

    .orb-2 {
      width: 500px;
      height: 500px;
      background: linear-gradient(135deg, #00d084 0%, #0066ff 100%);
      bottom: -150px;
      right: -100px;
      animation-delay: -10s;
    }



    @keyframes float {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(30px, -30px) scale(1.1); }
    }

    /* Light Mode Overrides */
    :host-context(.theme-light) .portfolio-showcase {
      background: linear-gradient(180deg, #f8faff 0%, #eef2ff 100%);
    }

    :host-context(.theme-light) .gradient-orb {
      opacity: 0.15;
    }



    .section-header {
      text-align: center;
      max-width: 800px;
      margin: 0 auto 60px;
    }

    .section-tag {
      display: inline-block;
      color: var(--taj-accent-cyan);
      font-size: 0.9rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      margin-bottom: 20px;
      background: rgba(24, 93, 132, 0.1);
      padding: 8px 20px;
      border-radius: 50px;
      border: 1px solid rgba(24, 93, 132, 0.15);
    }

    .section-title {
      font-size: clamp(2.25rem, 5vw, 3.8rem);
      color: #fff;
      margin-bottom: 20px;
      line-height: 1.1;
      font-weight: 800;
    }

    .section-subtitle {
      color: rgba(255, 255, 255, 0.6);
      font-size: 1.2rem;
      line-height: 1.6;
    }

    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      margin-bottom: 60px;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }

    .portfolio-card {
      position: relative;
      border-radius: 24px;
      overflow: hidden;
      aspect-ratio: 3/3;
  
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      animation: fadeInUp 0.8s both;

      &:hover {
        transform: translateY(-7px);

        .portfolio-card__image {
          transform: scale(1.1);
        }

        .portfolio-card__overlay {
          opacity: 1;
        }
      }
    }

    .portfolio-card__image-box {
      width: 100%;
      height: 100%;
      position: relative;
    }

    .portfolio-card__image {
      width: 100%;
      height: 100%;
      object-fit: center;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .portfolio-card__overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0, 74, 120, 0.95) 0%, rgba(0, 102, 255, 0.4) 100%);
      display: flex;
      align-items: flex-end;
      padding: 40px;
      opacity: 0;
      transition: all 0.4s ease;
      z-index: 2;
    }

    .portfolio-card__content {
      width: 100%;
    }

    .portfolio-card__category {
      display: block;
      font-size: 1rem;
      font-weight: 800;
      text-transform: uppercase;
      color: var(--color-accent-blue);
      margin-bottom: 8px;
    }

    .portfolio-card__title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 15px;
      line-height: 1.3;
    }

    .portfolio-card__link {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: #fff;
      font-size: 0.9rem;
      font-weight: 600;
      text-decoration: none;
      
      i {
        font-size: 0.8rem;
        transition: transform 0.3s ease;
      }

      &:hover i {
        transform: translateX(5px);
      }
    }

    .portfolio-footer {
      text-align: center;
      margin-top: 40px;
    }

    .portfolio-btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 15px;
      padding: 18px 45px;
      background: #ffffff !important;
      color: #004a78 !important;
      font-size: 1.1rem;
      font-weight: 800;
      border-radius: 100px;
      text-decoration: none;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      letter-spacing: 0.05em;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
      
      i {
        transition: transform 0.3s ease;
      }

      &:hover {
        background: #f8faff !important;
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        
        i {
          transform: translateX(5px);
        }
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Light Mode */
    :host-context(.theme-light) .portfolio-showcase {
      background: transparent;
    }

    :host-context(.theme-light) .section-title {
      color: #004a78;
    }

    :host-context(.theme-light) .section-subtitle {
      color: #3f5175;
    }

    :host-context(.theme-light) .portfolio-card {
      &:hover {
        .portfolio-card__overlay {
          background: linear-gradient(to top, 
            rgba(0, 74, 120, 0.85) 0%, 
            rgba(0, 102, 255, 0.7) 100%
          );
        }

        .portfolio-card__category,
        .portfolio-card__title,
        .portfolio-card__link {
          color: #ffffff !important;
        }
      }
    }

    :host-context(.theme-light) .portfolio-btn-primary {
      background: var(--color-accent-blue, #004a78);
      box-shadow: 0 15px 35px rgba(0, 74, 120, 0.2);
      
      &:hover {
        background: #003d63;
        box-shadow: 0 20px 50px rgba(0, 74, 120, 0.3);
      }
    }
  `]
})
export class PortfolioShowcaseComponent {
  @Input() tag: string = 'Our Portfolio';
  @Input() title: string = 'Success Stories & Digital Excellence';
  @Input() subtitle: string = "A glimpse into the transformative solutions we've delivered for leading regional brands.";
  @Input() limit: number = 0;

  get displayItems(): PortfolioItem[] {
    return this.limit > 0 ? this.portfolioItems.slice(0, this.limit) : this.portfolioItems;
  }

  portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'NANTA',
      category: 'GovTech',
      image: 'assets/images/taj/Portfolio Cards/NANTA.png',
      link: '/portfolio'
    },

    {
      id: 2,
      title: 'AMPAY',
      category: 'FinTech',
      image: 'assets/images/portfolio/Frame 25.png',
      link: '/portfolio'
    },

    {
      id: 3,
      title: 'National ID Day',
      category: 'GovTech',
      image: 'assets/images/portfolio/Frame 28.png',
      link: '/portfolio'
    },

    // {
    //   id: 4,
    //   title: 'AI Air Radio',
    //   category: 'Media & Entertainment',
    //   image: 'assets/images/portfolio/Frame 26.png',
    //   link: '/portfolio'
    // }
  ];
}
