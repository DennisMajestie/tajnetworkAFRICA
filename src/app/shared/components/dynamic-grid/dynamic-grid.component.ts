import { Component, Input, OnInit, AfterViewInit, ElementRef, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridCardComponent } from '../grid-card/grid-card.component';
import { ContentService } from '../../../core/services/content.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GridData } from '../../../core/models/types';

@Component({
  selector: 'app-dynamic-grid',
  standalone: true,
  imports: [CommonModule, GridCardComponent],
  template: `
    <section class="grid-section" [class]="'grid-section--' + (data.layout || 'default')">
      <div class="container">
        <!-- Section Header -->
        <header class="section-header" *ngIf="data.title || data.subtitle">
          <span class="section-tag" *ngIf="data.title">
            <span class="tag-dot"></span>
            {{ data.title }}
          </span>
          <h2 class="section-title" *ngIf="data.subtitle">{{ data.subtitle }}</h2>
        </header>

        <!-- Filters -->
        <div class="grid-filters" *ngIf="data.filters && data.filters.length">
          <button class="filter-btn" 
                  [class.filter-btn--active]="activeFilter === 'all'"
                  (click)="setFilter('all')">All</button>
          <button *ngFor="let filter of data.filters" 
                  class="filter-btn"
                  [class.filter-btn--active]="activeFilter === filter"
                  (click)="setFilter(filter)">
            {{ filter }}
          </button>
        </div>

        <!-- Grid Layouts -->
        <ng-container [ngSwitch]="data.layout">
          
          <!-- Carousel Layout -->
          <div *ngSwitchCase="'carousel'" class="carousel-wrapper">
            <div class="carousel-track" #carouselTrack>
              <div *ngFor="let item of filteredItems; let i = index" class="carousel-item">
                <app-grid-card [item]="item" [index]="i" layout="carousel"></app-grid-card>
              </div>
            </div>
            <div class="carousel-controls">
              <button (click)="scrollCarousel(-1)" class="carousel-btn"><i class="fa-solid fa-chevron-left"></i></button>
              <button (click)="scrollCarousel(1)" class="carousel-btn"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>

          <!-- Accordion Layout -->
          <div *ngSwitchCase="'accordion'" class="accordion-list">
            <div *ngFor="let item of filteredItems; let i = index" 
                 class="accordion-item"
                 [class.accordion-item--open]="openIndex === i">
              <div class="accordion-header" (click)="toggleAccordion(i)">
                <h3 class="accordion-title">{{ item.title }}</h3>
                <span class="accordion-icon"><i class="fa-solid" [class.fa-plus]="openIndex !== i" [class.fa-minus]="openIndex === i"></i></span>
              </div>
              <div class="accordion-content" *ngIf="openIndex === i">
                <p>{{ item.longDescription || item.description }}</p>
                <div class="accordion-meta" *ngIf="item.technologies">
                  <span class="tech-tag" *ngFor="let tech of item.technologies">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Masonry / Default Grid Layout -->
          <div *ngSwitchDefault 
               class="card-grid" 
               [class]="'cols-' + (data.columns || 3)"
               [class.grid-masonry]="data.layout === 'masonry'">
            <app-grid-card 
              *ngFor="let item of filteredItems; let i = index"
              [item]="item"
              [index]="i"
              [layout]="data.layout || 'default'">
            </app-grid-card>
          </div>

        </ng-container>

        <!-- View All Link -->
        <div class="grid-footer" *ngIf="data.showViewAll">
          <a [href]="data.viewAllUrl || '#'" class="view-all-link">
            <span>View All</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .grid-section { padding: 100px 0; position: relative; }
    .section-header { text-align: center; margin-bottom: 4rem; }
    .section-tag {
      display: inline-flex; align-items: center; gap: 0.5rem;
      padding: 0.4rem 1rem; background: rgba(99, 102, 241, 0.1);
      border: 1px solid rgba(99, 102, 241, 0.2); border-radius: 99px;
      font-size: 0.75rem; font-weight: 600; color: #a5b4fc;
      text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1.5rem;
    }
    .tag-dot { width: 6px; height: 6px; background: #6366f1; border-radius: 50%; }
    .section-title {
      font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 800; color: var(--color-neutral-white); line-height: 1.2;
    }

    .grid-filters {
      display: flex; justify-content: center; gap: 1rem; margin-bottom: 3rem; flex-wrap: wrap;
    }
    .filter-btn {
      padding: 0.6rem 1.5rem; background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 99px;
      color: var(--color-neutral-mediumGray); cursor: pointer; transition: all 0.3s ease;
      
      &:hover, &--active {
        background: #ffffff !important; border-color: #ffffff !important;
        color: #004a78 !important; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      }
    }

    .card-grid {
      display: grid; gap: 2rem;
      &.cols-3 { grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); }
      &.cols-2 { grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); }
      &.cols-1 { grid-template-columns: 1fr; max-width: 800px; margin: 0 auto; }
    }

    /* Masonry Layout */
    .grid-masonry {
      display: block; columns: 3; column-gap: 2rem;
      @media (max-width: 1024px) { columns: 2; }
      @media (max-width: 640px) { columns: 1; }
      ::ng-deep app-grid-card { display: inline-block; width: 100%; margin-bottom: 2rem; }
    }

    /* Carousel Layout */
    .carousel-wrapper { position: relative; padding: 0 4rem; }
    .carousel-track {
      display: flex; gap: 2rem; overflow-x: auto; scroll-behavior: smooth;
      padding: 1rem 0 2rem; scroll-snap-type: x mandatory;
      &::-webkit-scrollbar { display: none; }
    }
    .carousel-item { flex: 0 0 350px; scroll-snap-align: start; }
    .carousel-controls {
      position: absolute; top: 50%; left: 0; right: 0; transform: translateY(-50%);
      display: flex; justify-content: space-between; pointer-events: none;
    }
    .carousel-btn {
      width: 50px; height: 50px; background: #ffffff !important;
      border: 1px solid #ffffff; border-radius: 50%;
      color: #004a78 !important; cursor: pointer; pointer-events: auto; backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      &:hover { background: #f8faff !important; border-color: #f8faff !important; transform: scale(1.1); }
    }

    /* Accordion Layout */
    .accordion-list { max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem; }
    .accordion-item {
      background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 1rem; overflow: hidden; transition: all 0.3s ease;
      &--open { background: rgba(255, 255, 255, 0.05); border-color: var(--color-accent-blue); }
    }
    .accordion-header {
      padding: 1.5rem 2rem; display: flex; justify-content: space-between; align-items: center; cursor: pointer;
    }
    .accordion-title { font-size: 1.25rem; font-weight: 600; }
    .accordion-content { padding: 0 2rem 2rem; color: var(--color-neutral-mediumGray); line-height: 1.7; }
    .tech-tag {
      display: inline-block; padding: 0.2rem 0.8rem; background: rgba(99, 102, 241, 0.1);
      border-radius: 99px; font-size: 0.75rem; color: #a5b4fc; margin-right: 0.5rem; margin-top: 1rem;
    }

    .grid-footer { text-align: center; margin-top: 5rem; }
    .view-all-link {
      display: inline-flex; align-items: center; gap: 1rem;
      color: var(--color-accent-blue); font-weight: 700; text-decoration: none;
      font-size: 1.125rem; transition: all 0.3s ease;
      &:hover { color: white; transform: translateY(-3px); svg { transform: translateX(5px); } }
      svg { transition: transform 0.3s ease; }
    }
    :host-context(.theme-light) .grid-section {
      background: linear-gradient(180deg, #f8faff 0%, #eef2ff 100%);
    }

    :host-context(.theme-light) .section-title {
      color: #004a78;
    }
  `]
})
export class DynamicGridComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() data!: GridData;
  @Input() items: any[] = [];
  @Input() columns: number = 3;

  filteredItems: any[] = [];
  activeFilter: string = 'all';
  openIndex: number = -1;

  @ViewChild('carouselTrack') carouselTrack?: ElementRef;

  constructor(private contentService: ContentService, private el: ElementRef) { }

  ngOnInit(): void {
    if (this.data.contentRef && this.items.length === 0) {
      this.contentService.getContent(this.data.contentRef).subscribe(items => {
        this.items = items || [];
        this.applyFilter();
        setTimeout(() => this.animateIn(), 0);
      });
    } else {
      this.applyFilter();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.applyFilter();
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.animateIn(), 0);
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
    this.applyFilter();
    setTimeout(() => this.animateIn(), 0);
  }

  private applyFilter(): void {
    if (this.activeFilter === 'all') {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter(item =>
        item.category === this.activeFilter ||
        (item.tags && item.tags.includes(this.activeFilter)) ||
        (item.industry === this.activeFilter)
      );
    }

    if (this.data.limit) {
      this.filteredItems = this.filteredItems.slice(0, this.data.limit);
    }
  }

  toggleAccordion(index: number): void {
    this.openIndex = this.openIndex === index ? -1 : index;
  }

  scrollCarousel(direction: number): void {
    const track = this.el.nativeElement.querySelector('.carousel-track');
    if (track) {
      const scrollAmount = track.offsetWidth * 0.8 * direction;
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  private animateIn(): void {
    gsap.registerPlugin(ScrollTrigger);
    const cards = this.el.nativeElement.querySelectorAll('.card, .accordion-item');
    if (cards && cards.length) {
      gsap.killTweensOf(cards);
      gsap.set(cards, { clearProps: 'all' });
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this.el.nativeElement.querySelector('.grid-section'),
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    }
  }
}
