import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" 
         [class]="'card--' + (layout || 'default')"
         [class.card--glow]="item.featured"
         [attr.data-index]="index">
      
      <!-- Card Image/Media -->
      <div class="card__media" *ngIf="item.image">
        <img [src]="item.image" [alt]="item.title" class="card__img" loading="lazy">
        <div class="card__overlay"></div>
        <div class="card__tags" *ngIf="item.tags || item.category">
          <span class="card__tag" *ngFor="let tag of (item.tags || [item.category])">{{ tag }}</span>
        </div>
      </div>

      <!-- Card Content -->
      <div class="card__content">
        <div class="card__type" *ngIf="item.clientName">{{ item.industry }} • Case Study</div>
        <h3 class="card__title">{{ item.title || item.projectTitle }}</h3>
        <p class="card__description">{{ item.description || item.excerpt }}</p>
        
        <!-- Case Study Specifics -->
        <div class="card__stats" *ngIf="item.results">
          <div class="card__stat" *ngFor="let result of (item.results | keyvalue | slice:0:2)">
            <span class="stat-key">{{ result.key }}</span>
            <span class="stat-value">{{ result.value }}</span>
          </div>
        </div>

        <!-- Card Footer -->
        <div class="card__footer">
          <a [href]="item.url || '#'" class="card__link">
            <span>Learn More</span>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
          <div class="card__icon" *ngIf="item.icon">
            <i [class]="item.icon"></i>
          </div>
        </div>
      </div>

      <!-- Hover Glow Effect -->
      <div class="card__glow"></div>
    </div>
  `,
  styles: [`
    .card {
      position: relative;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 1.5rem;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      height: 100%;
      display: flex;
      flex-direction: column;
      
      &:hover {
        transform: translateY(-8px);
        background: rgba(255, 255, 255, 0.04);
        border-color: rgba(99, 102, 241, 0.3);
        box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.5);
        
        .card__glow { opacity: 1; }
        .card__img { transform: scale(1.1); }
        .card__overlay { opacity: 0.4; }
        .card__link i { transform: translateX(5px); }
      }
    }

    .card--glow {
      border-color: rgba(99, 102, 241, 0.3);
      &::after {
        content: '';
        position: absolute;
        inset: -1px;
        border-radius: inherit;
        padding: 1px;
        background: linear-gradient(135deg, var(--color-accent-blue), var(--color-accent-emerald));
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0.5;
      }
    }

    .card__media {
      position: relative;
      height: 220px;
      overflow: hidden;
    }

    .card__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .card__overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, transparent, rgba(15, 20, 25, 0.8));
      opacity: 0.6;
      transition: opacity 0.4s ease;
    }

    .card__tags {
      position: absolute;
      top: 1.25rem;
      left: 1.25rem;
      display: flex;
      gap: 0.5rem;
      z-index: 2;
    }

    .card__tag {
      padding: 0.25rem 0.75rem;
      background: rgba(15, 20, 25, 0.6);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 99px;
      font-size: 0.7rem;
      font-weight: 600;
      color: white;
      text-transform: uppercase;
    }

    .card__content {
      padding: 2rem;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .card__type {
      font-size: 0.65rem;
      font-weight: 700;
      color: var(--color-accent-blue);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 0.75rem;
    }

    .card__title {
      font-family: var(--font-heading);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-neutral-white);
      margin-bottom: 1rem;
      line-height: 1.3;
    }

    .card__description {
      color: var(--color-neutral-mediumGray);
      font-size: 0.9375rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .card__stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-bottom: 2rem;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 1rem;
    }

    .card__stat {
      display: flex;
      flex-direction: column;
      
      .stat-key { font-size: 0.65rem; color: var(--color-neutral-darkGray); text-transform: uppercase; }
      .stat-value { font-size: 1rem; font-weight: 700; color: var(--color-accent-emerald); }
    }

    .card__footer {
      margin-top: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card__link {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      color: var(--color-accent-blue);
      font-weight: 600;
      text-decoration: none;
      
      svg {
        transition: transform 0.3s ease;
      }
      
      &:hover {
        color: #a5b4fc;
      }
    }
  `]
})
export class GridCardComponent {
  @Input() item: any;
  @Input() index: number = 0;
  @Input() layout: string = 'default';
  @Input() animation: boolean = true;
}
