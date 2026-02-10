import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="why-choose-us-v6">
      <!-- Section Branding Background -->
      <div class="section-taj">TAJ</div>
      
      <!-- Decorative Shapes Background -->
      <div class="decorative-shapes">
        <img src="assets/images/shapes/why-choose-one-shape-1.png" alt="" class="shape shape-1">
        <img src="assets/images/shapes/why-choose-one-shape-2.png" alt="" class="shape shape-2">
        <img src="assets/images/shapes/why-choose-two-shape-1.png" alt="" class="shape shape-3">
      </div>

      <div class="container--wide">
        <header class="section-header" data-aos="fade-up">
          <span class="concept-tag taj-floating">WHY CHOOSE US</span>
          <h2 class="main-title">Why <span class="text-accent">Taj Network</span> is Your Strategic Advantage</h2>
          <p class="section-desc">
            Experience digital transformation led by elite engineering and strategic excellence. 
            We don't just build software; we architect the future of African business.
          </p>
        </header>

        <div class="bento-layout">
          <!-- Left Column Group (2 Rows) -->
          <div class="bento-group-left">
            <!-- Row 1: Two Smaller Cards -->
            <div class="bento-row-top">
              <div class="bento-card card--white" data-aos="fade-up" data-aos-delay="100">
                <div class="icon-circle">
                  <i class="fas fa-users-cog"></i>
                </div>
                <h3 class="card-title">Hands-on Expertise</h3>
                <p class="card-desc">
                  Direct collaboration with experienced strategists and engineers who build and execute your vision from the ground up.
                </p>
              </div>

              <div class="bento-card card--white" data-aos="fade-up" data-aos-delay="200">
                <div class="icon-circle">
                  <i class="fas fa-rocket"></i>
                </div>
                <h3 class="card-title">Engineering Impact</h3>
                <p class="card-desc">
                  We don't just write code; we engineer scalable digital legacies using the latest frameworks and cloud-native standards.
                </p>
              </div>
            </div>

            <!-- Row 2: One Wide Card -->
            <div class="bento-card card--white card--wide" data-aos="fade-up" data-aos-delay="300">
              <div class="icon-circle">
                <i class="fas fa-microchip"></i>
              </div>
              <h3 class="card-title">Cutting-Edge Tech Mastery</h3>
              <p class="card-desc">
                From high-performance Angular/React frontends to robust Python/Node.js backends and custom ERP modules. We master the tools that power modern business. Our solutions are designed for longevity, security, and peak performance.
              </p>
            </div>
          </div>

          <!-- Right Column: One Tall Feature Card -->
          <div class="bento-card card--dark-blue card--tall" data-aos="fade-up" data-aos-delay="400">
            <div class="card-content-wrap">
              <span class="card-category">Scalable & Adaptive <span class="text-accent">Solutions</span></span>
              
              <div class="feature-highlights">
                <div class="highlight-item">
                  <i class="fas fa-cloud"></i>
                  <span>Cloud-Native Core</span>
                </div>
                <div class="highlight-item">
                  <i class="fas fa-expand-arrows-alt"></i>
                  <span>Auto-Scaling Ready</span>
                </div>
                <div class="highlight-item">
                  <i class="fas fa-shield-alt"></i>
                  <span>Enterprise Security</span>
                </div>
              </div>

              <h3 class="card-title">Future-Proof Infrastructure</h3>
              <div class="feature-text">
                <p>At Taj Network, technology evolves with your business. Our infrastructure is built to scale on-demand, ensuring you grow without technical constraints or operational bottlenecks.</p>
              </div>
            </div>
            
            <div class="card-footers">
               <a href="#contact" class="btn-brand btn-primary-glow">Get Started Today <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .why-choose-us-v6 {
      padding: 120px 0;
      background: #010816;
      position: relative;
      overflow: hidden;

      :host-context(.theme-light) & { background: #f8faff; }
    }

    /* Vertical Section Branding */
    .section-taj {
      position: absolute;
      top: 50%;
      right: 5%;
      transform: translateY(-50%) rotate(90deg);
      font-size: 12rem;
      font-weight: 950;
      color: rgba(0, 74, 120, 0.03);
      line-height: 1;
      pointer-events: none;
      z-index: 0;
      letter-spacing: -10px;
      transform-origin: center;
    }

    /* Decorative Shapes Background */
    .decorative-shapes {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 2;
      overflow: hidden;
    }

    .shape {
      position: absolute;
      opacity: 0.15;
      filter: blur(1px);
      animation: float 20s ease-in-out infinite;
      
      :host-context(.theme-light) & {
        opacity: 0.12;
      }
    }

    .shape-1 {
      top: -5%;
      left: -5%;
      width: 45%;
      max-width: 500px;
      animation-delay: 0s;
    }

    .shape-2 {
      bottom: 5%;
      right: -8%;
      width: 40%;
      max-width: 450px;
      animation-delay: -5s;
      transform: rotate(180deg);
    }

    .shape-3 {
      top: 40%;
      right: 10%;
      width: 20%;
      max-width: 250px;
      opacity: 0.1;
      animation-delay: -10s;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(3deg); }
    }

    .container--wide {
      max-width: 1600px;
      margin: 0 auto;
      padding: 0 20px;
      position: relative;
      z-index: 10;
    }

    .section-header {
      margin-bottom: 70px;
      max-width: 850px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }

    .section-desc {
      font-size: 1.15rem;
      color: rgba(255, 255, 255, 0.6);
      line-height: 1.7;
      margin-top: 25px;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      :host-context(.theme-light) & { color: #526077; }
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
      margin-bottom: 20px;
    }

    .main-title {
      font-size: clamp(2.25rem, 5vw, 3.8rem);
      color: #004a78;
      line-height: 1.1;
      font-weight: 800;
    }

    /* Bento Grid Logic */
    .bento-layout {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 25px;

      @media (max-width: 1100px) {
        grid-template-columns: 1fr;
      }
    }

    .bento-group-left {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }

    .bento-row-top {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 25px;
      @media (max-width: 768px) { grid-template-columns: 1fr; }
    }

    .bento-card {
      padding: 50px 40px;
      border-radius: 30px;
      position: relative;
      transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      display: flex;
      flex-direction: column;
      height: 100%;

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 30px 60px rgba(0, 74, 120, 0.1);
      }
    }

    .card--white {
      background: linear-gradient(135deg, rgb(0 102 255 / 18%) 0%, #fff 100%);
      border: 1px solid rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      
      &:hover {
        background: rgba(255, 255, 255, 0.04);
        border-color: rgba(255, 255, 255, 0.15);
      }
      
      .card-title { color: #fff; }
      .card-desc { color: rgba(255, 255, 255, 0.6); }
 
      :host-context(.theme-light) & {
        background: linear-gradient(135deg, rgb(0 102 255 / 18%) 0%, #fff 100%);
        border-color: rgba(0, 74, 120, 0.08);
        .card-title { color: #004a78; }
        .card-desc { color: #526077; }
        &:hover {
          background: rgba(0, 74, 120, 0.04);
          border-color: rgba(0, 74, 120, 0.15);
        }
      }
    }

    .card--dark-blue {
      background: #206189;
      backdrop-filter: blur(25px);
      -webkit-backdrop-filter: blur(25px);
      border: 1px solid rgba(255, 255, 255, 0.25);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
      
      &:hover { 
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 30px 70px rgba(0, 74, 120, 0.4);
      }
      
      .card-title { color: #ffffff !important; }
      .card-category { color: #ccff00 !important; }
      .highlight-item { color: #ffffff !important; }
      .feature-text { color: rgba(255, 255, 255, 0.9) !important; }
      
      .card-content-wrap {
        position: relative;
        z-index: 2;
      }

      .card-category {
        display: block;
        font-size: 0.85rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        margin-bottom: 25px;
        
        .text-accent { color: #fff; opacity: 1; }
      }

      .card-title { 
        font-size: 1.8rem;
        font-weight: 800;
        margin-bottom: 20px;
        line-height: 1.2;
      }

      .feature-highlights {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 35px;
      }

      .highlight-item {
        display: flex;
        align-items: center;
        gap: 15px;
        font-weight: 700;
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 1px;

        i {
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          color: #ffffff !important;
        }
      }

      .feature-text { 
        font-size: 1.05rem;
        line-height: 1.6;
        // color: #fff !important;
        margin-bottom: 35px;
        max-width: 90%;
      }

      .btn-brand {
        background: #ffffff !important;
        color: #004a78 !important;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        
        &:hover {
          background: #f8faff !important;
          transform: scale(1.05);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
      }
    }

    .card--tall {
      height: 100%;
    }

    .icon-circle {
      width: 54px;
      height: 54px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: #004a78;
      margin-bottom: 30px;

      &.icon--outline {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: #fff;
      }
    }

    .card-title {
      font-size: 1.75rem;
      font-weight: 800;
      color: #fff;
      margin-bottom: 20px;
      line-height: 1.2;

      :host-context(.theme-light) & { color: #004a78; }
    }

    .card-desc {
      font-size: 1.05rem;
      color: rgba(255, 255, 255, 0.6);
      line-height: 1.6;

      :host-context(.theme-light) & { color: #526077; }
    }

    .feature-text p {
      margin-bottom: 20px;
      line-height: 1.7;
      color: #fff !important;

    }

    .card-footers {
      margin-top: auto;
      // padding-top: 40px;
    }

    .btn-brand {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: #004a78;
      color: #fff;
      text-decoration: none;
      padding: 14px 30px;
      border-radius: 100px;
      font-weight: 700;
      transition: all 0.3s ease;
      
      &:hover {
        background: #0066ff;
        gap: 18px;
        box-shadow: 0 10px 20px rgba(0, 102, 255, 0.3);
      }
    }

    :host-context(.theme-dark) .why-choose-us-v6 {
        background: #020c18;
    }
    :host-context(.theme-dark) .card--white {
        background: rgba(255, 255, 255, 0.02);
        border-color: rgba(255, 255, 255, 0.05);
        .card-title { color: #fff; }
        .card-desc { color: rgba(255, 255, 255, 0.6); }
        .icon-circle { background: rgba(255, 255, 255, 0.05); }
    }
    :host-context(.theme-dark) .main-title {
        color: #fff;
    }
  `]
})
export class WhyChooseUsComponent implements OnInit, AfterViewInit, OnDestroy {
  private isBrowser: boolean;
  private scrollTriggers: ScrollTrigger[] = [];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.initParallax();
    }
  }

  private initParallax(): void {
    // Parallax effect for decorative shapes
    const shapes = document.querySelectorAll('.why-choose-us-v6 .shape');

    shapes.forEach((shape, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const t = gsap.to(shape, {
        yPercent: 30 * direction,
        xPercent: 10 * direction,
        ease: 'none',
        scrollTrigger: {
          trigger: '.why-choose-us-v6',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1 + (index * 0.5)
        }
      });
      if (t.scrollTrigger) {
        this.scrollTriggers.push(t.scrollTrigger);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      this.scrollTriggers.forEach(trigger => trigger.kill());
    }
  }
}
