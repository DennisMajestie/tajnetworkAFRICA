import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-values',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-values">
      <!-- Background Mesh Gradient -->
      <div class="mesh-gradient"></div>
      
      <div class="container relative z-10">
        <div class="values-wrapper">
          <!-- Left: Text Content -->
          <div class="values-text-col">
            <div class="badge-wrapper">
              <span class="section-badge">
                <i class="fa-solid fa-gem me-2"></i>
                Our Philosophy
              </span>
            </div>
            <h2 class="section-title">
              Our <span class="text-gradient">Core Values</span>
            </h2>
            <p class="section-desc">
              Pioneering digital excellence across Africa with innovative Fintech, Real Estate, Ecommerce, and Cloud solutions tailored for the modern era.
            </p>
            <div class="stats-mini">
              <div class="stat-item">
                <span class="stat-num">100%</span>
                <span class="stat-label">Transparency</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <span class="stat-num">24/7</span>
                <span class="stat-label">Support</span>
              </div>
            </div>
          </div>

          <!-- Middle: Values Cards -->
          <div class="values-cards-col">
            <div class="value-card" *ngFor="let value of values; let i = index" [style.--delay]="i * 0.2 + 's'">
              <div class="card-glass"></div>
              <div class="card-content">
                <div class="icon-box">
                  <i [class]="value.icon"></i>
                </div>
                <div class="text-box">
                  <h3 class="value-name">{{value.title}}</h3>
                  <p class="value-text">{{value.desc}}</p>
                </div>
                <span class="value-num">0{{i+1}}</span>
              </div>
            </div>
          </div>

          <!-- Right: Interactive Image -->
          <div class="values-image-col">
            <div class="image-frame">
              <div class="frame-glass"></div>
              <img src="assets/images/taj/Taj Team/taj-mentor.jpeg" alt="Our Values" class="main-img" loading="lazy">
              <div class="floating-label">
                <i class="fa-solid fa-users-gear"></i>
                <span>Innovation Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      --accent-blue: #0066ff;
      --accent-purple: #6f42c1;
      --accent-emerald: #00d084;
    }

    .about-values {
      padding: 180px 0;
      position: relative;
      overflow: hidden;
      background: transparent;

      @media (max-width: 991px) {
        padding: 100px 0;
      }
    }

    /* Mesh Gradient Background */
    .mesh-gradient {
      position: absolute;
      inset: 0;
      background: 
        radial-gradient(circle at 10%, rgba(0, 102, 255, 0.12) 0%, transparent 40%),
        radial-gradient(circle at 90%, rgba(111, 66, 193, 0.12) 0%, transparent 40%),
        radial-gradient(circle at 50%, rgba(0, 208, 132, 0.03) 0%, transparent 40%);
      filter: blur(80px);
      z-index: 1;
      pointer-events: none;
    }

    .values-wrapper {
      display: grid;
      grid-template-columns: 1.1fr 1fr 1fr;
      align-items: center;
      gap: 40px;
      position: relative;

      @media (max-width: 1400px) {
        grid-template-columns: 1fr 1.1fr 1fr;
        gap: 20px;
      }

      @media (max-width: 1200px) {
        grid-template-columns: 1fr 1.2fr;
        gap: 60px;
      }

      @media (max-width: 991px) {
        grid-template-columns: 1fr;
      }
    }

    /* Text Column */
    .section-badge {
      display: inline-flex;
      align-items: center;
      padding: 8px 20px;
      background: rgba(0, 102, 255, 0.1);
      border: 1px solid rgba(0, 102, 255, 0.2);
      border-radius: 100px;
      color: var(--accent-blue);
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 30px;
    }

    .section-title {
      font-size: clamp(2.5rem, 5vw, 3.8rem);
      font-weight: 900;
      line-height: 1.1;
      color: #fff;
      margin-bottom: 25px;
      letter-spacing: -1px;

      .text-gradient {
        background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .section-desc {
      font-size: 1.15rem;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.6);
      max-width: 500px;
      margin-bottom: 40px;
    }

    .stats-mini {
      display: flex;
      align-items: center;
      gap: 30px;
    }

    .stat-item {
      display: flex;
      flex-direction: column;
    }

    .stat-num {
      font-size: 1.8rem;
      font-weight: 800;
      color: #fff;
    }

    .stat-label {
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.5);
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .stat-divider {
      width: 1px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
    }

    /* Cards Column */
    .values-cards-col {
      display: flex;
      flex-direction: column;
      gap: 25px;
      z-index: 20;

      @media (min-width: 1201px) {
        margin-left: -20px;
        margin-right: -150px;
      }

      @media (max-width: 1200px) {
        order: 3;
        grid-column: span 2;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: 0;
      }

      @media (max-width: 991px) {
        grid-column: span 1;
        grid-template-columns: 1fr;
      }
    }

    .value-card {
      position: relative;
      padding: clamp(24px, 5vw, 35px);
      border-radius: 30px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      animation: fadeInUp 0.8s both;
      animation-delay: var(--delay);

      &:hover {
        transform: translateY(-5px) scale(1.02);
        
        .card-glass {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(0, 102, 255, 0.4);
          box-shadow: 0 20px 40px rgba(0, 102, 255, 0.2);
        }

        .icon-box {
          background: var(--accent-blue);
          color: #fff !important;
          transform: rotate(10deg);

          i { color: #fff !important; }
        }
      }
    }

    .card-glass {
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 30px;
      transition: all 0.4s ease;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .card-content {
      position: relative;
      z-index: 2;
      display: flex;
      gap: 20px;
    }

    .icon-box {
      width: 54px;
      height: 54px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 102, 255, 0.1);
      border: 1px solid rgba(0, 102, 255, 0.2);
      border-radius: 16px;
      color: var(--accent-blue);
      font-size: 1.5rem;
      transition: all 0.4s ease;
    }

    .value-name {
      font-size: 1.25rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 8px;
    }

    .value-text {
      font-size: 0.95rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.5);
      margin: 0;
    }

    .value-num {
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 3rem;
      font-weight: 900;
      color: rgba(255, 255, 255, 0.03);
      line-height: 1;
      pointer-events: none;
    }

    /* Image Column */
    .values-img-box {
      border-radius: 40px;
      overflow: hidden;
      height: 600px;
      box-shadow: 0 30px 60px rgba(0,0,0,0.4);
      position: relative;

      @media (max-width: 1200px) {
        height: 450px;
      }
    }

    .main-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }

    .values-img-box:hover .main-img {
      transform: scale(1.1);
    }

    .image-frame {
      position: relative;
      border-radius: 40px;
      overflow: hidden;
    }

    .frame-glass {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(10, 15, 20, 0.8), transparent 40%);
      z-index: 1;
    }

    .floating-label {
      position: absolute;
      bottom: 25px;
      left: 20px;
      right: 20px;
      padding: 15px 25px;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      z-index: 2;
      display: flex;
      align-items: center;
      gap: 15px;
      color: #fff;
      font-weight: 600;

      i {
        color: var(--accent-blue);
      }
    }

    /* Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Light Mode Overrides */
    :host-context(.theme-light) {
      .section-badge {
        background: rgba(0, 74, 120, 0.1);
        border-color: rgba(0, 74, 120, 0.2);
        color: #004a78;
      }

      .section-title {
        color: #0c152a;
        .text-gradient {
          background: linear-gradient(135deg, #004a78, #0066a5);
          -webkit-background-clip: text;
        }
      }

      .section-desc {
        color: #1e293b;
      }

      .stat-num { color: #004a78; }
      .stat-label { color: #475569; }
      .stat-divider { background: rgba(0, 0, 0, 0.1); }

      .card-glass {
        background: #ffffff;
        border-color: rgba(0, 102, 255, 0.05);
        box-shadow: 0 20px 40px rgba(0, 74, 120, 0.08);
      }

      .value-card:hover .card-glass {
        background: #ffffff;
        border-color: #004a78;
        box-shadow: 0 30px 60px rgba(0, 74, 120, 0.15);
      }

      .value-name { color: #0c152a; }
      .value-text { color: #475569; }
      .value-num { color: rgba(0, 74, 120, 0.05); }

      .icon-box {
        background: rgba(0, 74, 120, 0.1);
        border-color: rgba(0, 74, 120, 0.2);
        color: #004a78;
      }

      .value-card:hover .icon-box {
        background: #004a78;
        color: #fff;
      }

      .floating-label {
        background: rgba(255, 255, 255, 0.9);
        border-color: rgba(255, 255, 255, 0.5);
        color: #0c152a;
        
        i { color: #004a78; }
      }
    }
  `]
})
export class AboutValuesComponent {
  values = [
    {
      title: 'Integrity First',
      desc: 'We build trust through transparency, honesty, and ethical practices in every project we undertake.',
      icon: 'fa-solid fa-shield-halved'
    },
    {
      title: 'Relentless Innovation',
      desc: 'We never stop exploring new technologies to find the smartest, most efficient solutions for Africa.',
      icon: 'fa-solid fa-microchip'
    },
    {
      title: 'Client Empowerment',
      desc: 'Our success is measured by the growth and success of our clients and their digital evolution.',
      icon: 'fa-solid fa-hand-holding-heart'
    }
  ];
}