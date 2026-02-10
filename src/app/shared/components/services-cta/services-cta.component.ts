import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services-cta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="cta-section">
      <div class="container">
        <div class="cta-header">
          <h2 class="cta-title">Let's Create an <span class="highlight">Amazing</span> Project Together!</h2>
          <p class="cta-subtitle">Expertise in Fintech, Real Estate, Ecommerce, and Digital Transformation</p>
          
          <div class="cta-actions">
            <a routerLink="/contact" class="cta-primary-btn">
              <span>START YOUR PROJECT</span>
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div class="cta-showcase">
          <!-- Central Mockup -->
          <div class="mockup-wrapper">
             <img src="assets/images/taj/tajlogo.png" alt="TAJ Network Logo" class="mockup-img">
          </div>

          <!-- Floating Cards -->
          <div class="floating-card card-1">
            <div class="card-icon"><i class="fas fa-city"></i></div>
            <div class="card-content">
              <h4>Enterprise ERP</h4>
            </div>
          </div>

          <div class="floating-card card-2">
            <div class="card-icon"><i class="fas fa-user-check"></i></div>
            <div class="card-content">
              <h4>Elite Mentorship</h4>
            </div>
          </div>

          <div class="floating-card card-3">
             <!-- <div class="card-badge">TAJ</div> -->
                          <div class="card-icon"><i class="fas fa-user-check"></i></div>

             <div class="card-info">Taj Network Africa</div>
          </div>

          <div class="floating-card card-4">
             <div class="card-icon"><i class="fas fa-shield-virus"></i></div>
             <div class="card-content">
                <h4>Cyber Defense</h4>
             </div>u5
          </div>

          <div class="floating-card card-5">
             <div class="card-icon"><i class="fas fa-laptop-code"></i></div>
             <div class="card-content">
                <h4>Engineered Apps</h4>
             </div>
          </div>

          <div class="floating-card card-6">
            <div class="card-icon"><i class="fas fa-server"></i></div>
            <div class="card-content">
              <h4>Cloud Mastery</h4>
            </div>
          </div>

          <div class="floating-card card-7">
            <div class="card-icon"><i class="fas fa-chess-knight"></i></div>
            <div class="card-content">
              <h4>Digital Strategy</h4>
            </div>
          </div>

          <div class="floating-card card-8">
            <div class="card-icon"><i class="fas fa-microchip"></i></div>
            <div class="card-content">
              <h4>AI Integration</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cta-section {
      padding: 180px 0;
      position: relative;
      overflow: hidden;
      background: #000;
      text-align: center;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url('/assets/images/taj/service-details/cta-premium.png');
        background-size: cover;
        background-position: center;
        opacity: 0.5;
        z-index: 1;
        filter: brightness(0.4) contrast(1.1);
      }

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%);
        z-index: 2;
      }

      /* Blending Joint */
      &::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; height: 150px;
        background: linear-gradient(to bottom, #010811 0%, transparent 100%);
        z-index: 3;
      }
    }

    .container {
        position: relative;
        z-index: 5;
    }

    .cta-header {
      max-width: 900px;
      margin: 0 auto 100px;
      position: relative;
      z-index: 10;
    }

    .cta-title {
      font-size: clamp(3rem, 7vw, 5.5rem);
      font-weight: 900;
      line-height: 1;
      margin-bottom: 30px;
      letter-spacing: -0.04em;
      background: linear-gradient(135deg, #fff 0%, var(--color-accent-blue) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .cta-subtitle {
      font-size: clamp(0.95rem, 3vw, 1.5rem);
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 50px;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .cta-actions {
      display: flex;
      justify-content: center;
      gap: 20px;
    }

    .cta-primary-btn {
      display: inline-flex;
      align-items: center;
      gap: 15px;
      padding: 22px 55px;
      background: white;
      color: var(--color-accent-blue) !important;
      font-size: 1.1rem;
      font-weight: 900;
      border-radius: 100px;
      text-decoration: none;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      letter-spacing: 0.1em;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
      
      i {
        transition: transform 0.4s ease;
      }

      &:hover {
        background: var(--color-accent-blue) !important;
        color: white !important;
        transform: translateY(-10px) scale(1.05);
        box-shadow: 0 30px 60px rgba(0, 102, 255, 0.4);
        
        i {
          transform: translateX(8px);
        }
      }
    }

    /* Cinematic Showcase */
    .cta-showcase {
         position: relative;
    height: 700px;
    margin-right: 129px;

      align-items: center;
      justify-content: center;
      margin-top: 50px;
    }

    .mockup-wrapper {
      position: absolute;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 5;
      width: 280px;
      animation: floatMockup 8s ease-in-out infinite;
    }

    .mockup-img {
      width: 100%;
      height: auto;
      // filter: drop-shadow(0 0 40px rgba(0, 102, 255, 0.4)) brightness(1.2);
    }

    .floating-card {
      position: absolute;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(25px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 35px;
      padding: 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 160px;
      height: 160px;
      gap: 12px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
      animation: floatCard 10s ease-in-out infinite;
      z-index: 6;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &:hover {
        background: rgba(0, 102, 255, 0.15);
        border-color: var(--color-accent-blue);
        transform: scale(1.15) translateY(-15px) rotate(3deg);
        z-index: 10;
        box-shadow: 0 40px 80px rgba(0, 102, 255, 0.3);
      }
    }

    .card-icon {
      width: 54px;
      height: 54px;
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      background: rgba(255,255,255,0.05);
      color: var(--color-accent-blue);
    }

    .card-content h4 {
      margin: 0;
      font-size: 0.9rem;
      font-weight: 800;
      color: #fff;
      line-height: 1.2;
      letter-spacing: 0.5px;
    }

    /* Mathematical Protractor Arc (180deg Semi-Circle) - Mockup as Origin */
    .card-1 { left: 5%; bottom: 85px; animation-delay: 0s; }
    .card-2 { left: 10%; bottom: 240px; animation-delay: -1.2s; }
    .card-3 { left: 22%; bottom: 380px; animation-delay: -2.4s; .card-badge { font-size: 2rem; color: var(--color-accent-blue); font-weight: 900; } }
    .card-4 { left: 38%; bottom: 480px; animation-delay: -3.6s; .card-icon { color: #fbbf24; } }
    .card-5 { left: 62%; bottom: 480px; animation-delay: -4.8s; .card-icon { color: #818cf8; } }
    .card-6 { left: 78%; bottom: 380px; animation-delay: -6s; .card-icon { color: #38bdf8; } }
    .card-7 { left: 90%; bottom: 240px; animation-delay: -7.2s; }
    .card-8 { left: 95%; bottom: 85px; animation-delay: -8.4s; .card-icon { color: #a78bfa; } }

    @keyframes floatMockup {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-30px) scale(1.05); }
    }

    @keyframes floatCard {
      0%, 100% { transform: translateY(0) rotate(2deg); }
      50% { transform: translateY(-40px) rotate(-2deg); }
    }

    @media (max-width: 1200px) {
        .floating-card { width: 140px; height: 140px; padding: 15px; }
    }

    @media (max-width: 991px) {
      .cta-showcase { display: none; }
      .cta-section { padding: 120px 0; }
    }

    /* ================================
       LIGHT MODE OPTIMIZATIONS
       ================================ */
    :host-context(.theme-light) .cta-section {
      background: linear-gradient(135deg, #f8faff 0%, #eef2ff 100%);
      
      &::before {
        opacity: 0.1;
        filter: brightness(1.8) grayscale(0.8);
      }

      &::after {
        background: radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.7) 100%);
      }
    }

    :host-context(.theme-light) .cta-title {
      background: linear-gradient(135deg, #0c152a 0%, var(--color-accent-blue) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    :host-context(.theme-light) .cta-subtitle {
      color: #3f5175;
    }

    :host-context(.theme-light) .floating-card {
      background: rgba(255, 255, 255, 0.85);
      border-color: rgba(0, 74, 120, 0.1);
      box-shadow: 0 20px 50px rgba(0, 74, 120, 0.08);
      
      &:hover {
        background: #ffffff;
        box-shadow: 0 30px 60px rgba(0, 102, 255, 0.2);
        border-color: var(--color-accent-blue);
      }
    }

    :host-context(.theme-light) .card-content h4 {
      color: #0c152a;
    }

    :host-context(.theme-light) .mockup-img {
      // filter: drop-shadow(0 20px 40px rgba(0, 74, 120, 0.15));
    }
  `]
})
export class ServicesCtaComponent { }
