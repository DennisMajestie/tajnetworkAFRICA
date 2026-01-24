import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-scroll-indicator',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="scroll-indicator" [style.width.%]="scrollProgress">
      <div class="scroll-glow"></div>
    </div>
  `,
    styles: [`
    .scroll-indicator {
      position: fixed;
      top: 0;
      left: 0;
      height: 4px;
      background: linear-gradient(90deg, #0066ff, #00d084);
      z-index: 10000;
      transition: width 0.1s ease-out;
      border-radius: 0 2px 2px 0;
    }

    .scroll-glow {
      position: absolute;
      right: 0;
      top: 0;
      width: 100px;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(0, 208, 132, 0.5));
      filter: blur(3px);
    }

    /* Hide when at top */
    :host {
      opacity: 1;
      transition: opacity 0.3s ease;
    }
  `]
})
export class ScrollIndicatorComponent {
    scrollProgress = 0;

    @HostListener('window:scroll', [])
    onScroll(): void {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        this.scrollProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    }
}
