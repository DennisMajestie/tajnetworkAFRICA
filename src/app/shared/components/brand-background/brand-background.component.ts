import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-brand-background',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="brand-bg-container">
      <div class="ribbon ribbon--left"></div>
      <div class="ribbon ribbon--right"></div>
      <div class="glow-orb"></div>
    </div>
  `,
    styles: [`
    .brand-bg-container {
      position: fixed;
      inset: 0;
      z-index: -1;
      pointer-events: none;
      overflow: hidden;
      background: var(--color-primary-dark);
      transition: background 0.8s ease;
    }

    .ribbon {
      position: absolute;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: contain;
      opacity: 0.15;
      filter: blur(20px);
      transition: opacity 1s ease;

      &--left {
        top: -10%;
        left: -20%;
        background-image: radial-gradient(circle at 30% 30%, var(--color-accent-blue) 0%, transparent 60%);
        transform: rotate(-15deg);
        animation: float-left 20s infinite alternate linear;
      }

      &--right {
        bottom: -20%;
        right: -30%;
        background-image: radial-gradient(circle at 70% 70%, var(--color-accent-purple) 0%, transparent 60%);
        transform: rotate(15deg);
        animation: float-right 25s infinite alternate linear;
      }
    }

    /* Target Light Mode specifically for the white ribbons from the PDF */
    :host-context(.theme-light) {
      .brand-bg-container {
        background: #E1E8F4; /* Matching implementation plan sky blue */
      }

      .ribbon {
        opacity: 0.8;
        filter: blur(40px);
      }

      .ribbon--left {
        background-image: radial-gradient(circle at 10% 20%, #ffffff 0%, rgba(255, 255, 255, 0) 50%);
      }

      .ribbon--right {
        background-image: radial-gradient(circle at 90% 80%, #ffffff 0%, rgba(255, 255, 255, 0) 50%);
      }
      
      .glow-orb {
        position: absolute;
        width: 80vw;
        height: 80vw;
        top: 10%;
        left: 10%;
        background: radial-gradient(circle, rgba(165, 180, 252, 0.1) 0%, transparent 70%);
        filter: blur(100px);
      }
    }

    @keyframes float-left {
      from { transform: translate(0, 0) rotate(-15deg) scale(1); }
      to { transform: translate(50px, 100px) rotate(-10deg) scale(1.1); }
    }

    @keyframes float-right {
      from { transform: translate(0, 0) rotate(15deg) scale(1); }
      to { transform: translate(-100px, -50px) rotate(20deg) scale(0.9); }
    }
  `]
})
export class BrandBackgroundComponent { }
