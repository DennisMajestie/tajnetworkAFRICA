import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServicesIntroComponent } from '../../shared/components/services-intro/services-intro.component';
import { EliteCardComponent } from '../../shared/components/elite-card/elite-card.component';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  description: string;
  type?: 'standard' | 'elite';
  accentColor?: string;
  tags?: string[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule, ServicesIntroComponent, EliteCardComponent],
  template: `
    <main class="portfolio-page">
      <app-services-intro 
        tag="Innovating Africa" 
        title="Innovation in Action"
        subtitle="Explore our journey of digital transformation across various industries and sectors."
        bgImage="assets/images/project/portfolio-page-v3-1-1.jpg">
      </app-services-intro>

      <section class="portfolio-grid-section">
        <!-- Animated Background Elements -->
        <div class="bg-elements">
          <div class="gradient-orb orb-1"></div>
          <div class="gradient-orb orb-2"></div>

        </div>

        <div class="container">
          <div class="portfolio-filters">
            <button 
              *ngFor="let cat of categories"
              (click)="setCategory(cat)"
              class="filter-btn" 
              [class.active]="activeCategory === cat">
              {{ cat === 'All' ? 'All Projects' : cat }}
            </button>
          </div>

          <div class="portfolio-grid">
            <ng-container *ngFor="let item of filteredItems; let i = index">
              <!-- Elite Coded Card -->
              <app-elite-card 
                *ngIf="item.type === 'elite'"
                [title]="item.title"
                [description]="item.description"
                [image]="item.image"
                [accentColor]="item.accentColor || ''"
                [tags]="item.tags || []"
                class="wow fadeInUp">
              </app-elite-card>

              <!-- Standard Image Card -->
              <div *ngIf="item.type !== 'elite'" class="portfolio-card wow fadeInUp">
                <div class="portfolio-card__image-box">
                  <img [src]="item.image" [alt]="item.title" class="portfolio-card__image">
                  <div class="portfolio-card__overlay">
                    <div class="portfolio-card__content">
                      <span class="portfolio-card__category">{{ item.category }}</span>
                      <h3 class="portfolio-card__title">{{ item.title }}</h3>
                      <p class="portfolio-card__desc">{{ item.description }}</p>
                      <a routerLink="#" class="portfolio-card__btn">
                        Explore Case Study <i class="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ng-container>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .portfolio-page {
      background: var(--color-primary-dark, #0f1419);
      min-height: 100vh;
    }

    .portfolio-grid-section {
      padding: 100px 0;
      background: #020c18;
      position: relative;
      overflow: hidden;

      @media (max-width: 768px) {
        padding: 60px 0;
      }
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

    .portfolio-filters {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-bottom: 60px;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: clamp(10px, 2vw, 12px) clamp(20px, 4vw, 30px);
      border-radius: 50px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #fff;
      font-weight: 600;
      font-size: clamp(0.8rem, 2vw, 0.9rem);
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover, &.active {
        background: var(--color-accent-blue, #0066ff);
        border-color: var(--color-accent-blue, #0066ff);
        box-shadow: 0 10px 20px rgba(0, 102, 255, 0.3);
      }
    }

    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;

      @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }

    .portfolio-card {
      border-radius: 24px;
      overflow: hidden;
      padding-top: 35px;
      aspect-ratio: 3/3;
      position: relative;
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        transform: translateY(-10px);
        
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
      background: linear-gradient(to top, rgba(2, 6, 23, 0.95) 0%, rgba(0, 74, 120, 0.4) 100%);
      padding: 50px;
      display: flex;
      align-items: flex-end;
      opacity: 0;
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .portfolio-card__content {
      width: 100%;
    }

    .portfolio-card__category {
      color: var(--color-accent-blue, #0066ff);
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 0.1em;
      margin-bottom: 10px;
      display: block;
    }

    .portfolio-card__title {
      font-size: clamp(1.4rem, 4vw, 2rem);
      font-weight: 800;
      color: #fff;
      margin-bottom: 12px;
      letter-spacing: -0.02em;
    }

    .portfolio-card__desc {
      color: rgba(255, 255, 255, 0.7);
      font-size: clamp(0.9rem, 2.5vw, 1rem);
      line-height: 1.6;
      margin-bottom: 25px;
      max-width: 500px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .portfolio-card__btn {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 14px 30px;
      background: var(--color-accent-blue, #0066ff);
      color: #fff;
      font-size: 0.95rem;
      font-weight: 700;
      border-radius: 50px;
      text-decoration: none;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 10px 25px rgba(0, 102, 255, 0.25);

      i {
        transition: transform 0.3s ease;
      }

      &:hover {
        background: #0052cc;
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 15px 35px rgba(0, 102, 255, 0.35);
        
        i {
          transform: translateX(5px);
        }
      }
    }

    /* Light Mode */
    :host-context(.theme-light) .portfolio-page {
      background: linear-gradient(180deg, #f8faff 0%, #eef2ff 100%);
    }

    :host-context(.theme-light) .portfolio-grid-section {
      background: linear-gradient(180deg, #f8faff 0%, #eef2ff 100%);
    }

    :host-context(.theme-light) .gradient-orb {
      opacity: 0.15;
    }



    :host-context(.theme-light) .filter-btn {
      background: #fff;
      border-color: rgba(0, 102, 255, 0.1);
      color: #0c152a;

      &:hover, &.active {
        color: #fff;
        background: var(--color-accent-blue, #0066ff);
      }
    }

    :host-context(.theme-light) .portfolio-card {
      &:hover {
        .portfolio-card__overlay {
          background: linear-gradient(to top, 
            rgba(0, 74, 120, 0.9) 0%, 
            rgba(0, 74, 120, 0.7) 100%
          );
        }

        .portfolio-card__category,
        .portfolio-card__title,
        .portfolio-card__btn {
          color: #ffffff !important;
        }

        .portfolio-card__btn {
          background: #fff;
          color: var(--color-accent-blue, #004a78) !important;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .portfolio-card__desc {
          color: rgba(255, 255, 255, 0.95) !important;
        }
      }
    }
  `]
})
export class PortfolioComponent implements OnInit {
  activeCategory: string = 'All';
  categories: string[] = ['All'];

  portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'AmPay',
      category: 'Fintech',
      image: 'assets/images/portfolio/AmPay.svg',
      link: '/portfolio',
      description: 'AmPay is a digital payment platform that enables secure, fast, and convenient financial transactions for individuals and businesses. It simplifies payments, transfers, and collections through a user-friendly and reliable digital experience.',
      type: 'elite',
      accentColor: 'rgba(20, 184, 166, 0.35)',
      tags: ['Fintech', 'Real Estate', 'Shortlets', 'Payments']
    },
    {
      id: 2,
      title: 'AS-SABUR',
      category: 'Travel',
      image: 'assets/images/portfolio/AS-SABUR.svg',
      link: '/portfolio',
      description: 'AS-SABUR Travels & Tours is a Nigeria-based travel agency offering personalised travel planning, ticketing, visa support, and holiday packages to destinations worldwide. It combines professional service with seamless booking experiences to make every journey smooth and memorable.',
      type: 'elite',
      accentColor: 'rgba(0, 102, 255, 0.25)',
      tags: ['Travel', 'Tours', 'Visa', 'Booking']
    },
    {
      id: 3,
      title: 'AiR Radio',
      category: 'Media',
      image: 'assets/images/portfolio/AiR Radio.svg',
      link: '/portfolio',
      description: 'AI Radio is a digital broadcasting platform that leverages artificial intelligence to deliver curated audio content, music, and talk shows. It offers personalised listening experiences powered by smart automation and data-driven recommendations.',
      type: 'elite',
      accentColor: 'rgba(56, 189, 248, 0.3)',
      tags: ['Entertainment', 'Media', 'Broadcasting', 'Audio']
    },
    {
      id: 4,
      title: 'Elixr Attorneys',
      category: 'Legal',
      image: 'assets/images/portfolio/Elixr Attorneys.svg',
      link: '/portfolio',
      description: 'Elixr Attorneys is a legal firm providing expert counsel across areas such as corporate law, tax planning, real estate, family law, and litigation for both individuals and businesses. The firm focuses on ensuring full legal compliance and strategic solutions tailored to clients\' needs.',
      type: 'elite',
      accentColor: 'rgba(255, 191, 0, 0.4)',
      tags: ['Compliance', 'Law', 'Legal', 'Counsel']
    },
    {
      id: 5,
      title: 'Eclipse Law Firm',
      category: 'Legal',
      image: 'assets/images/portfolio/Eclipse Law Firm.svg',
      link: '/portfolio',
      description: 'Eclipse Law Firm is a legal practice providing expert advisory and representation across key areas of law for individuals and corporate clients. The firm combines legal precision with strategic insight to deliver dependable legal solutions.',
      type: 'elite',
      accentColor: 'rgba(180, 83, 9, 0.3)',
      tags: ['Law', 'Advisory', 'Representation']
    },
    {
      id: 7,
      title: 'National ID day',
      category: 'Government',
      image: 'assets/images/portfolio/National ID day.svg',
      link: '/portfolio',
      description: 'The NIMC National ID Day App is a digital platform created to support Nigeria’s National Identity Management Commission initiatives and public engagement activities. It provides access to identity-related information and awareness resources around national identity.',
      type: 'elite',
      accentColor: 'rgba(34, 197, 94, 0.35)',
      tags: ['Government', 'ID', 'National', 'Verification']
    },
    {
      id: 8,
      title: 'NANTA',
      category: 'Government',
      image: 'assets/images/portfolio/NANTA.svg',
      link: '/portfolio',
      description: 'The National Association of Nigeria Travel Agencies (NANTA) is the umbrella organisation representing travel agencies and tour operators in Nigeria, promoting industry professionalism and member interests since 1973.',
      type: 'elite',
      accentColor: 'rgba(34, 197, 94, 0.4)',
      tags: ['Association', 'Travel', 'Verify']
    },
    {
      id: 9,
      title: 'Password Prof. Tutors',
      category: 'Education',
      image: 'assets/images/portfolio/Password Professional Tutors.svg',
      link: '/portfolio',
      description: 'Password Professional Tutors is an educational support centre in Lagos focused on helping students excel academically through personalised guidance, quality content development, and critical thinking skill building.',
      type: 'elite',
      accentColor: 'rgba(99, 102, 241, 0.3)',
      tags: ['Education', 'Learning', 'Tutoring']
    },
    {
      id: 10,
      title: 'Prime Gym & Spa',
      category: 'Fitness',
      image: 'assets/images/portfolio/Prime Gym & Spa.svg',
      link: '/portfolio',
      description: 'Prime Gym & Spa in Ogudu, Lagos is a fitness and wellness destination offering gym training, workout sessions, muscle strengthening programmes, and spa treatment packages. It blends modern fitness facilities with personalised support to help clients improve strength and health.',
      type: 'elite',
      accentColor: 'rgba(148, 163, 184, 0.3)',
      tags: ['Fitness', 'Wellness', 'Training', 'Spa']
    },
    {
      id: 11,
      title: 'Royal Newton',
      category: 'Travel',
      image: 'assets/images/portfolio/Royal Newton.svg',
      link: '/portfolio',
      description: 'Royal Newton is a professional services brand offering structured solutions across consulting, business support, and strategic advisory services. It focuses on delivering reliable, results-driven outcomes tailored to client goals.',
      type: 'elite',
      accentColor: 'rgba(234, 179, 8, 0.25)',
      tags: ['Consulting', 'Strategy', 'Professional']
    },
    {
      id: 12,
      title: 'SingingBee',
      category: 'Media',
      image: 'assets/images/portfolio/SingingBee.svg',
      link: '/portfolio',
      description: 'SingingBee Agency is a creative surprise-call service that uses music and heartfelt messages to help people celebrate, connect, and strengthen relationships in meaningful ways. Its personalised approach makes every message memorable and impactful for recipients.',
      type: 'elite',
      accentColor: 'rgba(219, 39, 119, 0.35)',
      tags: ['Music', 'Surprise', 'Celebration']
    },
    {
      id: 13,
      title: 'Tifa Travels & Tours',
      category: 'Travel',
      image: 'assets/images/portfolio/Tifa Travels & Tours.svg',
      link: '/portfolio',
      description: 'TIFA is a travel booking platform that helps users find and book flights, hotels, and car rentals with best-price guarantees and easy search tools. It offers curated travel deals and 24/7 customer support to simplify travel planning from start to finish.',
      type: 'elite',
      accentColor: 'rgba(168, 85, 247, 0.3)',
      tags: ['Flights', 'Convenience', 'Hotels']
    }
  ];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    // Extract unique categories
    const uniqueCats = [...new Set(this.portfolioItems.map(item => item.category))];
    this.categories = ['All', ...uniqueCats];
  }

  get filteredItems(): PortfolioItem[] {
    if (this.activeCategory === 'All') {
      return this.portfolioItems;
    }
    return this.portfolioItems.filter(item => item.category === this.activeCategory);
  }

  setCategory(category: string): void {
    this.activeCategory = category;
  }
}
