import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-slider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="tech-section">
      <!-- Section Branding Background -->
      <div class="section-taj">TAJ</div>

      <!-- Background Elements Sync with Portfolio -->
      <div class="bg-elements">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
      </div>

      <div class="container--wide">
        <!-- Standardized Header -->
        <div class="tech-header" data-aos="fade-up">
          <span class="tech-tag">{{ tag }}</span>
          <h2 class="tech-title">{{ title }}</h2>
          <p class="tech-subtitle">{{ subtitle }}</p>
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
    </section>
  `,
  styles: [`
    .tech-section {
      position: relative;
      padding: 120px 0;
      background: #020c18;
      overflow: hidden;

      :host-context(.theme-light) & {
        background: linear-gradient(180deg, #f8faff 0%, #eef2ff 100%);
      }
    }

    /* Animated Background Sync */
    .bg-elements {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .gradient-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(100px);
      opacity: 0.3;
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

    /* Vertical Section Branding */
    .section-taj {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%) rotate(-90deg);
      font-size: 15rem;
      font-weight: 900;
      color: rgba(255, 255, 255, 0.02);
      line-height: 1;
      pointer-events: none;
      z-index: 0;
      letter-spacing: -20px;
      transform-origin: left bottom;

      :host-context(.theme-light) & {
        color: rgba(0, 102, 255, 0.02);
      }
    }

    .container--wide {
      max-width: 1750px;
      margin: 0 auto;
      padding: 0 40px;
      position: relative;
      z-index: 1;
    }

    .tech-header {
      text-align: center;
      margin-bottom: 80px;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .tech-tag {
      display: inline-block;
      padding: 6px 16px;
      background: rgba(0, 102, 255, 0.1);
      border: 1px solid rgba(0, 102, 255, 0.2);
      border-radius: 100px;
      color: #0066ff;
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 2px;
      margin-bottom: 20px;
    }
    
    .tech-title {
      font-size: clamp(2.5rem, 5vw, 3.5rem);
      font-weight: 900;
      color: #fff;
      line-height: 1.1;
      margin-bottom: 20px;

      :host-context(.theme-light) & { color: #0c152a; }
    }
    
    .tech-subtitle {
     font-size: 1.25rem;
      color: #94a3b8;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;

      :host-context(.theme-light) & { color: #526077; }
    }

    .tech-slider {
      width: 100%;
    }

    .tech-slider__track {
      overflow: hidden;
      mask-image: linear-gradient(90deg, transparent 0%, black 20%, black 80%, transparent 100%);
      -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 20%, black 80%, transparent 100%);
    }

    .tech-slider__list {
      display: flex;
      padding: 40px 20px;
      gap: 3rem;
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
      gap: 2rem;
      padding: 2.5rem 3.5rem;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 32px;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      min-width: 240px;
      cursor: pointer;
      
      img {
        width: auto;
        height: 80px;
        object-fit: contain;
        filter: grayscale(1);
        opacity: 0.9;
        transition: all 0.4s ease;
      }
      
      span {
        font-size: 1rem;
        color: #94a3b8;
        font-weight: 700;
        white-space: nowrap;
        transition: color 0.3s ease;
      }
      
      &:hover {
        background: rgba(0, 74, 120, 0.1);
        border-color: #004a78;
        transform: translateY(-12px);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        
        img {
          filter: grayscale(0) brightness(1);
          opacity: 1;
        }
        
        span {
          color: #fff;
        }
      }

      :host-context(.theme-light) & {
        background: #fff;
        border-color: #e2e8f0;
        box-shadow: 0 10px 30px rgba(0, 74, 120, 0.03);

        img { filter: grayscale(1); opacity: 0.8; }
        span { color: #526077; }

        &:hover {
          background: #fff;
          border-color: #004a78;
          box-shadow: 0 20px 40px rgba(0, 74, 120, 0.08);
          img { filter: grayscale(0); opacity: 1; }
          span { color: #004a78; }
        }
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
