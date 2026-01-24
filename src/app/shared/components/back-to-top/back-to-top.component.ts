import { Component, HostListener, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-back-to-top',
    standalone: true,
    imports: [CommonModule],
    template: `
    <button 
      class="back-to-top" 
      [class.is-visible]="isVisible" 
      (click)="scrollToTop()" 
      aria-label="Scroll to top">
      <div class="progress-wrap">
        <svg class="progress-circle" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" 
                [style.strokeDasharray]="'307.919, 307.919'"
                [style.strokeDashoffset]="strokeDashoffset">
          </path>
        </svg>
        <div class="icon-wrap">
          <i class="fas fa-arrow-up"></i>
        </div>
      </div>
    </button>
  `,
    styles: [`
    .back-to-top {
      position: fixed;
      right: 40px;
      bottom: 40px;
      width: 55px;
      height: 55px;
      background: rgba(2, 12, 24, 0.8);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      cursor: pointer;
      z-index: 999;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px) scale(0.8);
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      padding: 0;

      &.is-visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0) scale(1);
      }

      &:hover {
        background: rgba(0, 102, 255, 0.1);
        border-color: var(--color-accent-blue);
        
        .icon-wrap i {
          transform: translateY(-5px);
          color: var(--color-accent-blue);
        }
      }

      @media (max-width: 768px) {
        right: 25px;
        bottom: 25px;
        width: 48px;
        height: 48px;
      }
    }

    .progress-wrap {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .progress-circle {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;

      path {
        fill: none;
        stroke: var(--color-accent-blue);
        stroke-width: 4;
        transition: stroke-dashoffset 0.1s linear;
      }
    }

    .icon-wrap {
      z-index: 1;
      
      i {
        font-size: 1.2rem;
        color: #fff;
        transition: all 0.3s ease;
      }
    }

    :host-context(.theme-light) .back-to-top {
      background: rgba(255, 255, 255, 0.9);
      border-color: rgba(0, 74, 120, 0.1);
      box-shadow: 0 10px 30px rgba(0, 74, 120, 0.1);

      i { color: #0c152a; }
      
      &:hover {
        background: #f8faff;
        border-color: var(--color-accent-blue);
        i { color: var(--color-accent-blue); }
      }
    }
  `]
})
export class BackToTopComponent implements OnInit {
    isVisible = false;
    strokeDashoffset = 307.919;
    private isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngOnInit(): void {
        if (this.isBrowser) {
            this.updateProgress();
        }
    }

    @HostListener('window:scroll')
    onScroll(): void {
        if (!this.isBrowser) return;

        const scrollPos = window.scrollY;
        this.isVisible = scrollPos > 400;
        this.updateProgress();
    }

    updateProgress(): void {
        if (!this.isBrowser) return;

        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPos = window.scrollY;
        const progress = scrollPos / scrollHeight;
        const totalLength = 307.919; // Circumference of the circle (2 * PI * r)

        this.strokeDashoffset = totalLength - (progress * totalLength);
    }

    scrollToTop(): void {
        if (this.isBrowser) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}
