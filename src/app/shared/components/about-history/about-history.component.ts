import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-history',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-combined">
      <!-- Background Mesh Gradient -->
      <div class="mesh-gradient"></div>
      
      <div class="container relative z-10">
        <div class="combined-grid">
          <!-- Left: Narrative -->
          <div class="narrative-col">
            <div class="section-tag">Our Philosophy</div>
            <h2 class="section-title">Engineering Digital Solutions for <span class="text-gradient">Sustainable Growth.</span></h2>
            
            <div class="description-content">
              <p class="company-desc">
                Taj Network Africa is a technology company dedicated to designing and engineering digital solutions that solve real business problems and enable sustainable growth.
              </p>
              <p class="company-desc">
                We combine strategy, engineering, and innovation to build scalable web platforms, mobile applications, e-commerce systems, and secure digital infrastructures. Our solutions are developed with a strong focus on functionality, reliability, efficiency, and long term adaptability ensuring they meet both immediate operational needs and future demands.
              </p>
              <p class="company-desc">
                Operating at the intersection of technology and business strategy, we translate complex challenges into practical, performance driven solutions that deliver measurable impact.
              </p>
              <p class="company-desc founder-line">
                Founded by <strong>Akibu Ismail</strong>, Taj Network Africa is committed to building high quality digital products with a strong emphasis on system performance, user experience, security, and operational efficiency.
              </p>
              <p class="company-desc conclusion-line">
                At Taj Network Africa, technology is engineered to solve problems, scale with purpose, and drive results.
              </p>
            </div>
          </div>

          <!-- Right: Core Values Cards -->
          <div class="values-col">
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

          <!-- Middle: Innovation Team Image -->
          <div class="image-col">
            <div class="image-frame">
              <div class="frame-glass"></div>
              <img src="assets/images/taj/Taj Team/taj-mentor.jpeg" alt="Innovation Team" class="main-img" loading="lazy">
              
              <!-- Award Badge Overlay -->
              <div class="award-badge">
                <div class="badge-text">
                  <svg viewBox="0 0 100 100" width="100" height="100">
                    <defs>
                      <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text font-size="10" font-weight="700">
                      <textPath xlink:href="#circlePath">
                        BEST AWARD WINNER • BEST AWARD WINNER •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div class="badge-center">
                  <i class="fas fa-arrow-right"></i>
                </div>
              </div>

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
    .about-combined {
      padding: 150px 0;
      position: relative;
      overflow: hidden;
      background: transparent;

      @media (max-width: 991px) {
        padding: 80px 0;
      }
    }

    .mesh-gradient {
      position: absolute;
      inset: 0;
      background: 
        radial-gradient(circle at 10%, rgba(0, 102, 255, 0.08) 0%, transparent 40%),
        radial-gradient(circle at 90%, rgba(111, 66, 193, 0.08) 0%, transparent 40%);
      filter: blur(80px);
      z-index: 1;
      pointer-events: none;
    }

    .combined-grid {
      display: grid;
      grid-template-columns: 1.4fr 0.5fr 1.1fr; /* Narrative gets more space, cards narrowed */
      gap: 20px;
      align-items: center;

      @media (max-width: 1400px) {
        grid-template-columns: 1.2fr 1fr;
        gap: 0px;
      }

      @media (max-width: 991px) {
        grid-template-columns: 1fr;
        gap: 40px;
      }
    }

    /* Narrative Column */
    .narrative-col {
      @media (max-width: 1400px) {
        grid-column: span 2;
      }
      @media (max-width: 991px) {
        grid-column: span 1;
      }
    }

    .section-tag {
      display: inline-flex;
      align-items: center;
      padding: 8px 20px;
      background: rgba(0, 102, 255, 0.1);
      border: 1px solid rgba(0, 102, 255, 0.2);
      border-radius: 100px;
      color: var(--color-accent-blue);
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 30px;
    }

    .section-title {
      font-size: clamp(2.2rem, 3.5vw, 3rem); /* Slightly smaller for better fit */
      font-weight: 800;
      line-height: 1.1;
      color: #fff;
      margin-bottom: 35px;
      letter-spacing: -1px;

      .text-gradient {
        background: linear-gradient(135deg, var(--color-accent-blue), #6f42c1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .company-desc {
      font-size: 1rem;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.6);
      margin-bottom: 20px;
    }

    .values-col {
      display: flex;
      flex-direction: column;
      gap: 20px;
      z-index: 20; 
      position: relative;
      margin-right: -280px; /* Shifted further onto image to free up text space */
      align-self: center; 

      @media (max-width: 1400px) {
        margin-right: -80px;
      }
      
      @media (max-width: 1200px) {
        margin-right: 0;
      }
    }

    .value-card {
      position: relative;
      padding: 18px 22px; /* More compact padding */
      border-radius: 20px;
      overflow: hidden;
      transition: all 0.4s ease;
      background: transparent;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      min-width: 280px; /* Ensure content doesn't break */
      
      &:hover {
        transform: translateY(-10px) scale(1.05); /* Zoom and lift */
        .card-glass {
          background: rgba(255, 255, 255, 0.12); /* Slightly more opaque glass */
          border-color: rgba(255, 255, 255, 0.4);
        }
        .icon-box {
          background: var(--color-accent-blue);
          color: #fff !important; /* Force white icon on hover */
          transform: scale(1.1);
          i { color: #fff !important; }
        }
      }
    }

    .card-glass {
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      transition: all 0.4s ease;
    }

    .card-content {
      position: relative;
      z-index: 2;
      display: flex;
      gap: 25px; /* Increased gap for better spacing */
      align-items: center;
    }

    .icon-box {
      width: 56px; /* Slightly larger icon box */
      height: 56px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 102, 255, 0.1);
      border-radius: 14px;
      color: var(--color-accent-blue);
      font-size: 1.4rem;
      transition: all 0.4s ease;
    }

    .value-name {
      font-size: 1.35rem; /* Increased text size */
      font-weight: 800;
      color: #fff;
      margin-bottom: 8px;
      letter-spacing: -0.5px;
    }

    .value-text {
      font-size: 1rem; /* Increased text size */
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.6);
      margin: 0;
    }

    .value-num {
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 2rem;
      font-weight: 900;
      color: rgba(255, 255, 255, 0.02);
      pointer-events: none;
    }

    /* Image Column */
    .image-col {
      position: relative;
      z-index: 10;

      @media (max-width: 1400px) {
        grid-row: 2;
        grid-column: 2;
        padding-left: 20px;
      }
      @media (max-width: 1200px) {
        grid-row: auto;
        grid-column: auto;
        padding-left: 0;
      }
      @media (max-width: 991px) {
        display: none;
      }
    }

    .image-frame {
      position: relative;
      border-radius: 50px; /* Increased border-radius */
      overflow: visible; 
      aspect-ratio: 1/1.2; /* Taller aspect ratio for more presence */
      box-shadow: 0 40px 100px rgba(0,0,0,0.5);

      &:hover .main-img {
        transform: scale(1.1);
      }
    }

    /* Award Badge Styles */
    .award-badge {
      position: absolute;
      top: 15%;
      right: -40px;
      width: 100px;
      height: 100px;
      background: #ffffff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      box-shadow: 0 15px 35px rgba(0, 102, 255, 0.2);
    }

    .badge-text {
      position: absolute;
      width: 100%;
      height: 100%;
      animation: rotate-badge 15s linear infinite;
      text { fill: #0c152a; letter-spacing: 1px; }
    }

    @keyframes rotate-badge {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .badge-center {
      width: 40px;
      height: 40px;
      background: #0c152a;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-size: 1.1rem;
      transform: rotate(-45deg);
    }

    .frame-glass {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(10, 15, 20, 0.6), transparent 40%);
      z-index: 1;
    }

    .main-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
      border-radius: 50px; /* Match the frame for clipping */
    }

    .floating-label {
      position: absolute;
      bottom: 20px;
      left: 15px;
      right: 15px;
      padding: 12px 20px;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 15px;
      z-index: 2;
      display: flex;
      align-items: center;
      gap: 12px;
      color: #fff;
      font-size: 0.9rem;
      font-weight: 600;

      i { color: var(--color-accent-blue); }
    }

    :host-context(.theme-light) {
      .section-tag { background: rgba(0, 74, 120, 0.1); color: #004a78; border-color: rgba(0, 74, 120, 0.2); }
      .section-title { color: #0c152a; .text-gradient { background: linear-gradient(135deg, #004a78, #0066a5); -webkit-background-clip: text; } }
      .company-desc { color: #475569; }
      .card-glass { background: #fff; box-shadow: 0 10px 30px rgba(0, 74, 120, 0.05); border-color: rgba(0, 0, 0, 0.05); }
      .value-name { color: #0c152a; }
      .value-text { color: #64748b; }
      .icon-box { background: rgba(0, 74, 120, 0.1); color: #004a78; }
      .value-num { color: rgba(0, 74, 120, 0.03); }
    }
  `]
})
export class AboutHistoryComponent {
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
