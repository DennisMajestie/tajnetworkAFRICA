import { Component, Input, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-testimonial-block',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonial-section">
      <div class="container">
        <header class="section-header" *ngIf="data.title || data.subtitle">
          <span class="section-tag" *ngIf="data.title">
            <span class="tag-dot"></span>
            {{ data.title }}
          </span>
          <h2 class="section-title" *ngIf="data.subtitle">{{ data.subtitle }}</h2>
        </header>

        <div class="testimonial-carousel">
          <div class="testimonial-track" #track>
            <div *ngFor="let item of data.items" class="testimonial-item">
              <div class="testimonial-glass">
                <div class="quote-icon">
                  <i class="fa-solid fa-quote-left"></i>
                </div>
                <p class="testimonial-text">"{{ item.quote }}"</p>
                <div class="testimonial-footer">
                  <div class="author-avatar" *ngIf="item.avatar">
                    <img [src]="item.avatar" [alt]="item.author">
                  </div>
                  <div class="author-info">
                    <h4 class="author-name">{{ item.author }}</h4>
                    <p class="author-role">{{ item.role }} at {{ item.company }}</p>
                  </div>
                  <div class="testimonial-rating" *ngIf="item.rating">
                    <div class="stars">
                      <i class="fa-solid fa-star" *ngFor="let s of [1,2,3,4,5]" [class.filled]="s <= item.rating"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Navigation -->
          <div class="carousel-nav" *ngIf="data.items?.length > 1">
            <button class="nav-btn nav-btn--prev" (click)="scroll(-1)">
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <button class="nav-btn nav-btn--next" (click)="scroll(1)">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonial-section { padding: 100px 0; background: var(--color-primary-dark); overflow: hidden; }
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

    .testimonial-carousel { position: relative; max-width: 1000px; margin: 0 auto; padding: 0 4rem; }
    .testimonial-track {
      display: flex; gap: 2rem; overflow-x: auto; scroll-behavior: smooth;
      scroll-snap-type: x mandatory; padding: 2rem 0;
      &::-webkit-scrollbar { display: none; }
    }
    .testimonial-item { flex: 0 0 100%; scroll-snap-align: center; }

    .testimonial-glass {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 2rem;
      padding: 4rem;
      backdrop-filter: blur(20px);
      position: relative;
      transition: all 0.4s ease;

      &:hover { border-color: rgba(99, 102, 241, 0.3); transform: translateY(-5px); }
    }

    .quote-icon {
      position: absolute; top: 3rem; right: 4rem;
      font-size: 4rem; color: rgba(255, 255, 255, 0.03);
    }

    .testimonial-text {
      font-size: 1.5rem; font-style: italic; color: var(--color-neutral-white);
      line-height: 1.6; margin-bottom: 3rem; position: relative; z-index: 1;
      @media (max-width: 640px) { font-size: 1.125rem; }
    }

    .testimonial-footer { display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap; }
    .author-avatar {
      width: 60px; height: 60px; border-radius: 50%; overflow: hidden;
      border: 2px solid var(--color-accent-blue);
      img { width: 100%; height: 100%; object-fit: cover; }
    }
    .author-info { flex: 1; }
    .author-name { font-size: 1.125rem; font-weight: 700; margin-bottom: 0.25rem; }
    .author-role { font-size: 0.875rem; color: var(--color-neutral-darkGray); }

    .stars { display: flex; gap: 0.25rem; color: rgba(255, 255, 255, 0.15); }
    .stars i.filled { color: #facc15; }

    .carousel-nav {
      position: absolute; top: 50%; left: 0; right: 0; transform: translateY(-50%);
      display: flex; justify-content: space-between; pointer-events: none;
    }
    .nav-btn {
      width: 50px; height: 50px; background: #ffffff !important;
      border: 1px solid #ffffff; border-radius: 50%;
      color: #004a78 !important; cursor: pointer; pointer-events: auto; backdrop-filter: blur(10px);
      display: flex; align-items: center; justify-content: center;
      transition: all 0.3s ease;
      &:hover { background: #f8faff !important; border-color: #f8faff !important; transform: scale(1.1); }
    }
  `]
})
export class TestimonialBlockComponent implements AfterViewInit {
  @Input() data: any;

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    const track = this.el.nativeElement.querySelector('.testimonial-track');
    if (track) {
      gsap.from(this.el.nativeElement.querySelectorAll('.testimonial-glass'), {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this.el.nativeElement,
          start: 'top 80%'
        }
      });
    }
  }

  scroll(direction: number): void {
    const track = this.el.nativeElement.querySelector('.testimonial-track');
    if (track) {
      const scrollAmount = track.offsetWidth * direction;
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}
