import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ServiceData {
  id: number | string;
  title?: string;
  service?: string;
  description?: string;
  intro?: string;
  caption?: string;
  image?: string;
}

// Icon mapping for different service types
const SERVICE_ICONS: { [key: string]: string } = {
  'crm': 'fa-solid fa-users-gear',
  'erp': 'fa-solid fa-users-gear',
  'chatbot': 'fa-solid fa-robot',
  'software': 'fa-solid fa-code',
  'mentorship': 'fa-solid fa-chalkboard-user',
  'website': 'fa-solid fa-globe',
  'consultancy': 'fa-solid fa-lightbulb',
  'seo': 'fa-solid fa-magnifying-glass-chart',
  'data': 'fa-solid fa-chart-pie',
  'cyber': 'fa-solid fa-shield-halved',
  'mobile': 'fa-solid fa-mobile-screen-button',
  'web': 'fa-solid fa-laptop-code',
  'digital': 'fa-solid fa-bullhorn',
  'hosting': 'fa-solid fa-server',
  'design': 'fa-solid fa-palette',
  'sem': 'fa-solid fa-rectangle-ad',
  'payment': 'fa-solid fa-credit-card',
  'maintenance': 'fa-solid fa-wrench',
  'content': 'fa-solid fa-pen-nib',
  'social': 'fa-solid fa-hashtag',
  'email': 'fa-solid fa-envelope',
  'cloud': 'fa-solid fa-cloud',
  'automation': 'fa-solid fa-gears',
  'default': 'fa-solid fa-layer-group'
};

@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="services-grid-section services-grid-structural">
      <!-- Animated Background Elements -->
      <div class="bg-elements">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>

      </div>

      <div class="services-grid-container">
        <!-- Header -->
        <div class="section-header" *ngIf="title && showHeader">
          <span class="section-tag" *ngIf="tag">{{ tag }}</span>
          <h2 class="section-title">{{ title }}</h2>
          <p class="section-subtitle" *ngIf="subtitle">{{ subtitle }}</p>
        </div>

        <!-- Grid -->
        <div class="services-grid">
          <div class="service-card" *ngFor="let item of displayedServices; let i = index">
            <!-- Icon - White circle with shadow, positioned ABOVE card -->
            <div class="service-card__icon-wrapper">
              <div class="service-card__icon">
                <i [class]="getIconClass(item.title || item.service || '', i)"></i>
              </div>
            </div>

            <!-- Content -->
            <div class="service-card__content">
              <h3 class="service-card__title">{{ item.title || item.service }}</h3>
              <p class="service-card__desc">{{ item.description || item.intro || item.caption }}</p>
              <a [routerLink]="['/service-detail', item.id]" class="service-card__link btn-primary">
                Read More <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-grid-section {
      padding: 100px 0 120px;
      background: #010816;
      position: relative;
      overflow: hidden;

      :host-context(.theme-light) & {
        background: linear-gradient(180deg, #f8faff 0%, #eef2ff 100%);
      }
    }

    .services-grid-container {
      max-width: 1300px;
      margin: 0 auto;
      padding: 0 25px;
    }

    /* Animated Background (Consistent with Portfolio/Contact) */
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

      :host-context(.theme-light) & {
        opacity: 0.15;
      }
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

    /* Section Header */
    .section-header {
      text-align: center;
      margin: 0 auto 80px;
      max-width: 800px;
    }

    .section-tag {
      display: inline-block;
      color: var(--color-accent-blue, #0066ff);
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 25px;
      background: rgba(0, 102, 255, 0.1);
      padding: 8px 20px;
      border-radius: 50px;
      border: 1px solid rgba(0, 102, 255, 0.15);
    }

    .section-title {
      color: #004a78; /* Taj Brand Blue */
      font-size: clamp(2.25rem, 5vw, 3.8rem);
      margin: 0 0 18px;
      line-height: 1.1;
      font-weight: 800;
    }

    .section-subtitle {
      color: var(--color-neutral-mediumGray, #d0d5dd);
      font-size: 1.125rem;
      max-width: 650px;
      margin: 0 auto;
      line-height: 1.7;
      opacity: 0.9;
    }

    /* Services Grid - 3 columns */
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 360px), 1fr));
      gap: 40px 30px;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 30px;
      }
    }

    /* Service Card Decorative */
    .service-card {
      position: relative;
      padding-top: 40px; /* Space for icon that overlaps */
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Icon Wrapper - positioned to overlap card */
    .service-card__icon-wrapper {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
    }

    /* Icon - Based on TAJ Blue */
    .service-card__icon {
      width: 80px;
      height: 80px;
      background: var(--color-primary-light, #1a1f2e);
      border: 2px solid var(--color-accent-blue, #0066ff);
      border-radius: 20px; /* Modern squircle look */
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      color: var(--color-accent-blue, #0066ff);
      box-shadow: 0 8px 25px rgba(0, 102, 255, 0.2);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      transform: rotate(0deg);
    }

    .service-card:hover .service-card__icon {
      transform: rotate(360deg) scale(1.1);
      background: #004a78;
      color: #ffffff;
      box-shadow: 0 12px 30px rgba(0, 74, 120, 0.4);
    }

    /* Card Content - Dark Glass effect */
    .service-card__content {
      padding: 80px 40px 40px; /* Even 40px sides/bottom, 80px top to clear icon */
      text-align: center;
      border-radius: 24px;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .service-card:hover .service-card__content {
      background: #004a78;
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 74, 120, 0.3);

      .service-card__desc { color: #ffffff; opacity: 1; }
    }

    /* Target link specifically during card hover but NOT in light mode */
    :host:not(.theme-light) .service-card:hover .service-card__content .service-card__link {
      background: rgba(255, 255, 255, 0.1) !important;
      color: #ffffff !important;
      border: 1px solid rgba(255, 255, 255, 0.3) !important;
      
      &:hover {
        background: #ffffff !important;
        color: #004a78 !important;
      }
    }

    /* Title */
    .service-card__title {
      font-size: 1.35rem;
      font-weight: 700;
      margin: 0 0 15px;
      color: var(--color-neutral-white, #ffffff);
      line-height: 1.3;
    }

    /* Description */
    .service-card__desc {
      color: var(--color-neutral-mediumGray, #d0d5dd);
      font-size: 1rem;
      line-height: 1.6;
      margin: 0 0 25px;
      opacity: 0.8;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      flex-grow: 1;
    }

    /* Link */
    .service-card__link {
      margin-top: 1.5rem;
      width: fit-content;
      align-self: center;
      text-decoration: none !important;
    }

    .service-card__link i {
      font-size: 0.85rem;
    }

    /* ================================
       LIGHT MODE OVERRIDES
       ================================ */
    :host-context(.theme-light) .services-grid-section {
      background: transparent;
    }

    :host-context(.theme-light) .section-title {
      color: #004a78;
    }

    :host-context(.theme-light) .section-subtitle {
      color: #3f5175;
      opacity: 1;
    }

    :host-context(.theme-light) .service-card__icon {
      background: #fff;
      box-shadow: 0 8px 30px rgba(0, 74, 120, 0.12);
    }

    :host-context(.theme-light) .service-card__content {
      background: #ffffff;
       border: 1.5px solid rgb(0 102 255 / 23%);
      box-shadow: 0 10px 40px rgba(0, 74, 120, 0.06);
    }

    :host-context(.theme-light) .service-card:hover .service-card__content {
      background: rgba(0, 74, 120, 0.04);
      border-color: rgba(0, 74, 120, 0.5);
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 74, 120, 0.12);
      
      .service-card__desc { color: #3f5175; opacity: 1; }

      .service-card__link {
        background: #004a78 !important;
        color: white !important;
        border-color: #004a78 !important;
      }
    }

    :host-context(.theme-light) .service-card__title {
      color: #1a2332;
    }

    :host-context(.theme-light) .service-card__desc {
      color: #3f5175;
      opacity: 0.9;
    }

    :host-context(.theme-light) .service-card:hover .service-card__icon {
      background: #004a78;
      color: #fff;
    }

    :host-context(.theme-light) .service-card__link {
      background: transparent !important;
      color: #004a78 !important;
      border: 1.5px solid #004a78 !important;
      transition: all 0.3s ease;
    }

    :host-context(.theme-light) .service-card__link:hover {
      background: #004a78 !important;
      color: #ffffff !important;
      border-color: #004a78 !important;
      transform: translateY(-2px);
    }
    :host-context(.theme-light) .section-title {
      color: #004a78;
    }
  `]
})
export class ServicesGridComponent {
  @Input() tag = 'Our Services';
  @Input() title = 'We Provide Best Solutions';
  @Input() subtitle = '';
  @Input() showHeader = true;
  @Input() services: ServiceData[] = [];
  @Input() limit?: number; // Optional limit for number of services to display

  get displayedServices(): ServiceData[] {
    return this.limit ? this.services.slice(0, this.limit) : this.services;
  }

  getIconClass(serviceName: string, index: number): string {
    if (!serviceName) {
      return SERVICE_ICONS['default'];
    }

    const name = serviceName.toLowerCase();

    if (name.includes('crm') || name.includes('erp')) return SERVICE_ICONS['crm'];
    if (name.includes('chatbot')) return SERVICE_ICONS['chatbot'];
    if (name.includes('software')) return SERVICE_ICONS['software'];
    if (name.includes('mentorship')) return SERVICE_ICONS['mentorship'];
    if (name.includes('website')) return SERVICE_ICONS['website'];
    if (name.includes('consultancy') || name.includes('consult')) return SERVICE_ICONS['consultancy'];
    if (name.includes('seo')) return SERVICE_ICONS['seo'];
    if (name.includes('data') || name.includes('analytics') || name.includes('insight')) return SERVICE_ICONS['data'];
    if (name.includes('cyber') || name.includes('security')) return SERVICE_ICONS['cyber'];
    if (name.includes('mobile')) return SERVICE_ICONS['mobile'];
    if (name.includes('web')) return SERVICE_ICONS['web'];
    if (name.includes('digital') || name.includes('marketing')) return SERVICE_ICONS['digital'];
    if (name.includes('hosting')) return SERVICE_ICONS['hosting'];
    if (name.includes('ui') || name.includes('ux') || name.includes('design')) return SERVICE_ICONS['design'];
    if (name.includes('sem')) return SERVICE_ICONS['sem'];
    if (name.includes('payment')) return SERVICE_ICONS['payment'];
    if (name.includes('maintenance') || name.includes('support')) return SERVICE_ICONS['maintenance'];
    if (name.includes('content')) return SERVICE_ICONS['content'];
    if (name.includes('social')) return SERVICE_ICONS['social'];
    if (name.includes('email')) return SERVICE_ICONS['email'];
    if (name.includes('cloud')) return SERVICE_ICONS['cloud'];
    if (name.includes('automation')) return SERVICE_ICONS['automation'];

    // Fallback to rotating icons
    const fallbackIcons = ['fa-solid fa-code', 'fa-solid fa-server', 'fa-solid fa-chart-line',
      'fa-solid fa-cogs', 'fa-solid fa-globe', 'fa-solid fa-rocket'];
    return fallbackIcons[index % fallbackIcons.length];
  }
}



