import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServicesIntroComponent } from '../../shared/components/services-intro/services-intro.component';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  description: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule, ServicesIntroComponent],
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
            <div class="portfolio-card wow fadeInUp" *ngFor="let item of filteredItems; let i = index">
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
      padding: 12px 30px;
      border-radius: 50px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #fff;
      font-weight: 600;
      font-size: 0.9rem;
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
      font-size: 2rem;
      font-weight: 800;
      color: #fff;
      margin-bottom: 15px;
    }

    .portfolio-card__desc {
      color: rgba(255, 255, 255, 0.6);
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 25px;
      max-width: 500px;
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
      id: 2,
      title: 'NANTA',
      category: 'GovTech',
      image: 'assets/images/taj/Portfolio Cards/NANTA.png',
      link: '/portfolio',
      description: 'Unified travel agency network portal for streamlined bookings and member management.'
    },
    // --- Other Projects ---
    {
      id: 1,
      title: 'AS-SABUR',
      category: 'Travel Tech',
      image: 'assets/images/taj/Portfolio Cards/AS-SABUR.png',
      link: '/portfolio',
      description: 'A comprehensive travel management system tailored for modern business efficiency.'
    },

    {
      id: 10,
      title: 'National ID Day',
      category: 'GovTech',
      image: 'assets/images/portfolio/Frame 28.png',
      link: '/portfolio',
      description: 'Identification management and outreach systems for national digital identity initiatives.'
    },

    {
      id: 3,
      title: 'Tifa Travels & Tours',
      category: 'Travel Tech',
      image: 'assets/images/taj/Portfolio Cards/Tifa Travels & Tours.png',
      link: '/portfolio',
      description: 'End-to-end travel management system with real-time flight and hotel integration.'
    },

    {
      id: 5,
      title: 'Elixir Attorneys',
      category: 'Legal Tech',
      image: 'assets/images/taj/Portfolio Cards/Elixir attorneys.png',
      link: '/portfolio',
      description: 'Sophisticated digital identity and case management platform for legal professionals.'
    },
    {
      id: 4,
      title: 'SingingBee',
      category: 'Media & Entertainment',
      image: 'assets/images/taj/Portfolio Cards/SingingBee.png',
      link: '/portfolio',
      description: 'Dynamic mobile application focused on high-performance media and community engagement.'
    },

    {
      id: 6,
      title: 'Password Professionals',
      category: 'E-Learning',
      image: 'assets/images/taj/Portfolio Cards/Password Professional Tutors.png',
      link: '/portfolio',
      description: 'Adaptive e-learning platform providing interactive educational resources for students.'
    },
    {
      id: 7,
      title: 'Prime Gym & Spa',
      category: 'Fitness and Ecommerce',
      image: 'assets/images/portfolio/Frame 22.png',
      link: '/portfolio',
      description: 'Dynamic fitness management and high-performance e-commerce integration.'
    },
    {
      id: 8,
      title: 'Ampay Fintech',
      category: 'Fintech',
      image: 'assets/images/portfolio/Frame 25.png',
      link: '/portfolio',
      description: 'Secure cross-border payment infrastructure designed for the African digital economy.'
    },

    {
      id: 11,
      title: 'Royal Newton',
      category: 'Travel Tech',
      image: 'assets/images/portfolio/Frame 29.png',
      link: '/portfolio',
      description: 'Client relationship management system optimized for rapid scaling and market excellence.'
    },

    {
      id: 9,
      title: 'AI Air Radio',
      category: 'Media & Entertainment',
      image: 'assets/images/portfolio/Frame 26.png',
      link: '/portfolio',
      description: 'High-performance audio-visual management platform for modern media enterprises.'
    },

    {
      id: 12,
      title: 'Eclipse Legal Consult',
      category: 'Legal Tech',
      image: 'assets/images/portfolio/Frame 31.png',
      link: '/portfolio',
      description: 'Bespoke software suite for modern legal consulting and case management.'
    },
    // {
    //   id: 13,
    //   title: 'eSKILLZ',
    //   category: 'E-Learning',
    //   image: 'assets/images/portfolio/Frame 34.png',
    //   link: '/portfolio',
    //   description: 'An interactive repository of technical curricula and professional development resources.'
    // }
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
