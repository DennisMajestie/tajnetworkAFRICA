import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-about-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="home-about-new">
      <!-- Decorative Shapes Background -->
      <div class="decorative-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
      <!-- Section Branding Background -->
      <div class="section-taj">TAJ</div>

      <div class="container--full">
        <div class="split-layout">
          <!-- Text Content Side -->
          <div class="content-side" data-aos="fade-right">
            <div class="text-wrapper">
              <span class="concept-tag taj-floating">The Taj Narrative</span>
              <h2 class="display-title">Engineering Digital <br><span class="text-accent">Legacies</span></h2>
              
              <div class="story-blocks">
                <p class="lead-text">
                  Taj Network Africa is a technology power-house dedicated to designing and engineering digital solutions that solve real business problems and enable sustainable growth.
                </p>
                
                <p class="desc-text">
                  We combine strategy, engineering, and innovation to build scalable web platforms, mobile applications, and secure digital infrastructures. Our solutions are developed with a strong focus on functionality, reliability, and long-term adaptability ensuring they meet both immediate operational needs and future demands.
                </p>

                <p class="desc-text highlight">
                  Operating at the intersection of technology and business strategy, we translate complex challenges into practical, performance-driven solutions that deliver measurable impact.
                </p>
              </div>

              <div class="cta-mini">
                <a href="#our-services" class="link-btn">See More <i class="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <!-- Visual Side -->
          <div class="visual-side" data-aos="fade-left">
            <div class="image-perspective">
              <img src="/assets/images/taj/Taj Team/taj-bg.jpg" alt="Innovating at Taj" class="bg-visual">
              <div class="overlay-gradient"></div>
              
              <!-- Floating Principle Badges -->
              <div class="floating-badges">
                <div class="principle-badge badge-1" data-aos="zoom-in" data-aos-delay="200">
                  <i class="fas fa-microchip"></i>
                  <span>Engineering Excellence</span>
                </div>
                <div class="principle-badge badge-2" data-aos="zoom-in" data-aos-delay="400">
                  <i class="fas fa-chess-knight"></i>
                  <span>Strategic Execution</span>
                </div>
                <div class="principle-badge badge-3" data-aos="zoom-in" data-aos-delay="600">
                  <i class="fas fa-rocket"></i>
                  <span>Impact Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .home-about-new {
      padding: 120px 0;
      background: #020c18;
      overflow: hidden;
      position: relative;

      :host-context(.theme-light) & {
        background: #f8faff;
      }
    }

    /* Decorative Shapes background */
    .decorative-shapes {
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;

      .shape {
        position: absolute;
        opacity: 0.08;
        filter: blur(80px);
        animation: floatHomeA 25s infinite alternate ease-in-out;
        :host-context(.theme-light) & { opacity: 0.04; }
      }

      .shape-1 {
        width: 500px;
        height: 500px;
        background: var(--color-accent-blue);
        top: -100px;
        right: -100px;
      }

      .shape-2 {
        width: 400px;
        height: 400px;
        background: var(--color-accent-purple);
        bottom: -50px;
        left: -100px;
        animation-delay: -7s;
      }

      .shape-3 {
        width: 300px;
        height: 300px;
        background: var(--color-accent-emerald);
        top: 20%;
        left: 20%;
        animation-delay: -14s;
      }
    }

    @keyframes floatHomeA {
      0% { transform: translateY(0) scale(1); }
      100% { transform: translateY(-40px) scale(1.1); }
    }

    /* Vertical Section Branding */
    .section-taj {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%) rotate(-90deg);
      font-size: 15rem;
      font-weight: 900;
      color: rgba(255, 255, 255, 0.03);
      line-height: 1;
      pointer-events: none;
      z-index: 0;
      letter-spacing: -20px;
      transform-origin: left bottom;

      :host-context(.theme-light) & {
        color: rgba(0, 102, 255, 0.03);
      }
    }

    .container--full {
      max-width: 1500px;
      margin: 0 auto;
      padding: 0 40px;
      position: relative;
      z-index: 1;
    }

    .split-layout {
      display: grid;
      grid-template-columns: 1.1fr 1fr;
      gap: 100px;
      align-items: center;

      @media (max-width: 1100px) {
        grid-template-columns: 1fr;
        gap: 60px;
      }
    }

    /* Text Side Styling */
    .content-side {
      position: relative;
    }

    .concept-tag {
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 3px;
      color: var(--taj-accent-cyan);
      background: rgba(24, 93, 132, 0.1);
      padding: 6px 16px;
      border-radius: 100px;
      border: 1px solid rgba(24, 93, 132, 0.3);
      display: inline-block;
      margin-bottom: 25px;
    }

    .display-title {
      font-size: clamp(3rem, 6vw, 3.8rem);
      font-weight: 950;
      color: #fff;
      line-height: 1;
      margin-bottom: 40px;
      letter-spacing: -0.03em;

      .text-accent {
        color: #0066ff;
        :host-context(.theme-light) & { color: #004a78; }
      }

        :host-context(.theme-light) & { color: #004a78; }
    }

    .story-blocks {
      max-width: 580px;
    }

    .lead-text {
      font-size: 1.35rem;
      color: #fff;
      line-height: 1.5;
      margin-bottom: 30px;
      font-weight: 500;
      opacity: 0.95;

        :host-context(.theme-light) & { color: #1a2332; }
    }

    .desc-text {
      font-size: 1.1rem;
      color: #94a3b8;
      line-height: 1.7;
      margin-bottom: 25px;

      &.highlight {
        color: #fff;
        opacity: 0.9;
        :host-context(.theme-light) & { color: #334155; opacity: 1; }
      }

      :host-context(.theme-light) & { color: #526077; }
    }

    .cta-mini {
      margin-top: 40px;
      .link-btn {
        color: #fff;
        text-decoration: none;
        font-weight: 700;
        font-size: 1.1rem;
        display: inline-flex;
        align-items: center;
        gap: 15px;
        transition: gap 0.3s ease;

        i { color: #0066ff; }
        &:hover { gap: 25px; }
        
          :host-context(.theme-light) & { color: #004a78; }
      }
    }

    /* Visual Side Styling */
    .visual-side {
      position: relative;
    }

    .image-perspective {
      position: relative;
      border-radius: 40px;
      overflow: hidden;
      aspect-ratio: 1/1.1;
      box-shadow: 0 50px 100px rgba(0,0,0,0.5);
      border: 1px solid rgba(255, 255, 255, 0.1);

      .bg-visual {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .overlay-gradient {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, #020c18, transparent 40%);
        opacity: 0.8;
      }

      :host-context(.theme-light) & {
        box-shadow: 0 50px 100px rgba(0, 74, 120, 0.15);
        border-color: #e2e8f0;
        .overlay-gradient { background: linear-gradient(to top, rgba(248, 250, 255, 0.8), transparent 40%); }
      }
    }

    .floating-badges {
      position: absolute;
      inset: 0;
      padding: 40px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 15px;
    }

    .principle-badge {
      align-self: flex-start;
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(12px);
      padding: 12px 24px;
      border-radius: 100px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      gap: 15px;
      color: #fff;
      font-weight: 600;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      transition: all 0.3s ease;

      i { color: #0066ff; font-size: 1rem; }
      &:hover {
        transform: translateX(10px);
        background: rgba(0, 102, 255, 0.2);
        border-color: rgba(0, 102, 255, 0.4);
      }

      &.badge-2 { margin-left: 30px; }
      &.badge-3 { margin-left: 60px; }

      :host-context(.theme-light) & {
        background: rgba(255, 255, 255, 0.9);
        color: #1a2332;
        border-color: #e2e8f0;
        box-shadow: 0 10px 30px rgba(0, 74, 120, 0.1);
      }
    }
  `]
})
export class HomeAboutSectionComponent { }
