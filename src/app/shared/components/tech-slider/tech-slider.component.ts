import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-slider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tech-section">
      <div class="container">
        <!-- Standardized Header -->
        <!-- <div class="tech-header">
          <span class="tech-tag">{{ tag }}</span>
          <h2 class="tech-title">{{ title }}</h2>
          <p class="tech-subtitle">{{ subtitle }}</p>
        </div> -->
      </div>
      
      <div class="tech-slider">
        <div class="tech-slider__track">
          <div class="tech-slider__list">
            <!-- First set of items -->
            <div class="tech-slider__item" *ngFor="let tech of technologies">
              <img [src]="tech.icon" [alt]="tech.name">
              <span>{{ tech.name }}</span>
            </div>
            <!-- Duplicate for seamless loop -->
            <div class="tech-slider__item" *ngFor="let tech of technologies">
              <img [src]="tech.icon" [alt]="tech.name">
              <span>{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .tech-section {
      position: relative;
      padding: 50px 0;
      // background: var(--color-primary-dark);
    background: linear-gradient(180deg, #f8faff 0%, #eef2ff 100%);

      overflow: hidden;
    }

    .tech-header {
      text-align: center;
      margin-bottom: 5rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .tech-tag {
      display: inline-block;
      padding: 0.5rem 1.25rem;
      background: rgba(99, 102, 241, 0.1);
      border: 1px solid rgba(99, 102, 241, 0.2);
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      color: #6366f1;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin-bottom: 1.5rem;
    }
    
    .tech-title {
      font-family: var(--font-display);
      font-size: clamp(2.5rem, 6vw, 3.5rem);
      font-weight: 800;
      color: var(--color-neutral-white);
      margin-bottom: 1.5rem;
      line-height: 1.1;
      background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%);
      -webkit-background-clip: text;
    }
    
    .tech-subtitle {
      font-size: 1.25rem;
      color: var(--color-neutral-darkGray);
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .tech-slider {
      width: 100%;
    }

    .tech-slider__track {
      overflow: hidden;
      mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
      -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
    }

    .tech-slider__list {
      display: flex;
      padding: 30px 20px;
      gap: 2rem;
      animation: slide-infinite 40s linear infinite;
      width: max-content;
      
      &:hover {
        animation-play-state: paused;
      }
    }

    @keyframes slide-infinite {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .tech-slider__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      padding: 1.5rem 2rem;
      background: rgba(0, 102, 255, 0.05); /* Taj Blue tint as default background */
      border: 1px solid rgba(0, 102, 255, 0.2);
      border-radius: 20px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      min-width: 180px;
      cursor: pointer;
      
      img {
        width: auto;
        height: 60px;
        object-fit: contain;
        filter: grayscale(0.6);
        transition: all 0.4s ease;
      }
      
      span {
        font-size: 0.875rem;
        color: var(--color-neutral-darkGray);
        font-weight: 600;
        white-space: nowrap;
        transition: color 0.3s ease;
      }
      
      &:hover {
        background: rgba(0, 102, 255, 0.15);
        border-color: rgba(0, 102, 255, 0.5);
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 102, 255, 0.2);
        
        img {
          filter: grayscale(0);
          transform: scale(1.15);
        }
        
        span {
          color: #ffffff;
        }
      }
    }
    :host-context(.theme-light) .tech-slider__item {
      background: #ffffff;
      border: 1.5px solid rgba(0, 102, 255, 0.1);
      box-shadow: 0 5px 15px rgba(0, 74, 120, 0.05);

      &:hover {
        background: rgba(0, 102, 255, 0.04);
        border-color: rgba(0, 102, 255, 0.3);
      }

      span {
        color: #0c152a;
      }
    }
  `]
})
export class TechSliderComponent {
  @Input() tag: string = 'Our Tech Stack';
  @Input() title: string = 'Technologies We Master';
  @Input() subtitle: string = 'Powering innovation with cutting-edge tools and frameworks';
  technologies = [
    { name: 'Angular', icon: 'assets/images/brand/angular.png' },
    { name: 'TypeScript', icon: 'assets/images/brand/typescript.png' },
    { name: 'Node.js', icon: 'assets/images/brand/node.png' },
    { name: 'Python', icon: 'assets/images/brand/python.png' },
    { name: 'PHP', icon: 'assets/images/brand/php.png' },
    { name: 'Firebase', icon: 'assets/images/brand/firebase.png' },
    { name: 'Bootstrap', icon: 'assets/images/brand/bootstrap.png' },
    { name: 'Ionic', icon: 'assets/images/brand/ionic.png' },
    { name: 'SQL', icon: 'assets/images/brand/sql.png' },
    { name: 'Flutter', icon: 'assets/images/brand/flutter.png' }
  ];
}
