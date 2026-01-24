import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="contact-hero">
      <div class="contact-hero__bg">
        <!-- Overlay removed per user request -->
      </div>
      
      <div class="container relative">
        <div class="contact-hero__header">
          <h1 class="hero-title">Contact Us</h1>
          <p class="hero-subtitle">We're ready to learn about your goals and help you navigate the next steps of your digital journey.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Default Styles (Keep Dark Hero Design) */
    .contact-hero {
      position: relative;
      padding: 180px 0 80px;
      min-height: 400px;
      overflow: hidden;
      background: #020c18; /* Always dark background */

      @media (max-width: 768px) {
        padding: 140px 0 60px;
        min-height: auto;
      }
    }

    .contact-hero__bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 600px;
      background: linear-gradient(rgba(2, 12, 24, 0.85), rgba(5, 11, 21, 0.85)), url('/assets/images/taj/contact-hero.png') no-repeat center center;
      background-size: cover;
      z-index: 1;
    }

    .relative { position: relative; z-index: 10; }

    .contact-hero__header {
      text-align: center;
      margin-bottom: 50px;
    }

    .header-badge {
      display: inline-block;
      padding: 8px 24px;
      background: rgba(212, 175, 55, 0.15);
      color: #d4af37;
      font-size: 12px;
      font-weight: 700;
      border-radius: 100px;
      margin-bottom: 25px;
      letter-spacing: 2px;
      border: 1px solid rgba(212, 175, 55, 0.3);
      backdrop-filter: blur(10px);
      text-transform: uppercase;
    }

    .hero-title {
      font-size: clamp(2.5rem, 6vw, 3.8rem);
      font-weight: 900;
      color: #fff !important;
      margin-bottom: 20px;
      line-height: 1.05;
      letter-spacing: -0.03em;
      text-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }

    .hero-subtitle {
      font-size: 1.125rem;
      color: rgba(255, 255, 255, 0.8);
      max-width: 580px;
      line-height: 1.7;
      margin: 0 auto;
      text-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }

    .contact-hero__breadcrumbs {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin-bottom: 25px;
      font-size: 0.9rem;
      font-weight: 500;
      
      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        transition: color 0.3s ease;
        &:hover { color: #fff; }
      }

      .separator {
        color: rgba(255, 255, 255, 0.3);
        font-size: 0.7rem;
      }

      .current {
        color: var(--color-accent-emerald, #00d084);
        font-weight: 700;
      }
    }

    @keyframes float-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }

    /* Form Card stays theme-aware */
    :host-context(.theme-dark) .form-card {
      background: rgba(255, 255, 255, 0.03);
      border-color: rgba(255, 255, 255, 0.08);
    }
  `]
})
export class ContactHeroComponent { }
