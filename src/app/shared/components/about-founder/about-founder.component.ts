import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-founder',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="founder-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Leadership</span>
          <h2 class="section-title">Meet Our Founder</h2>
        </div>

        <div class="founder-content">
          <div class="founder-image-wrapper">
            <div class="image-container">
              <div class="image-badge">
                <i class="fas fa-award"></i>
                <span>Visionary</span>
              </div>
              <img [src]="founder.image" [alt]="founder.name" class="founder-img">
              <div class="image-overlay"></div>
            </div>
            <div class="founder-stats">
              <div class="stat-item">
                <div class="stat-number">16+</div>
                <div class="stat-label">Years Experience</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">100+</div>
                <div class="stat-label">Projects Delivered</div>
              </div>
            </div>
          </div>

          <div class="founder-info">
            <div class="founder-header">
              <h3 class="founder-name">{{ founder.name }}</h3>
              <p class="founder-role">{{ founder.role }}</p>
            </div>

            <div class="founder-bio">
              <p class="bio-text">{{ founder.bio }}</p>
            </div>

            <div class="founder-tagline">
              <i class="fas fa-quote-left quote-icon"></i>
              <p class="tagline-text">{{ founder.tagline }}</p>
            </div>

            <div class="founder-socials">
              <a *ngFor="let social of founder.socials" 
                 [href]="social.url" 
                 target="_blank" 
                 class="social-link">
                <i [class]="social.icon"></i>
              </a>
            </div>

            <div class="founder-achievements">
              <h4 class="achievements-title">Key Achievements</h4>
              <ul class="achievements-list">
                <li *ngFor="let achievement of achievements">
                  <i class="fas fa-check-circle"></i>
                  <span>{{ achievement }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .founder-section {
      padding: 120px 0;
      background: linear-gradient(rgb(248, 250, 255) 0%, rgb(238, 242, 255) 100%);
      position: relative;
      overflow: hidden;

      @media (max-width: 768px) {
        padding: 60px 0;
      }
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .section-header {
      text-align: center;
      margin-bottom: 80px;

      @media (max-width: 768px) {
        margin-bottom: 40px;
      }
    }

    .section-tag {
      display: inline-block;
      color: var(--color-accent-blue, #0066ff);
      font-size: 0.9rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      margin-bottom: 20px;
      background: rgba(0, 102, 255, 0.1);
      padding: 8px 20px;
      border-radius: 50px;
      border: 1px solid rgba(0, 102, 255, 0.15);
    }

    .section-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 900;
      color: var(--text-primary, #1a1a2e);
      margin: 0;
      letter-spacing: -0.02em;
    }

    .founder-content {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 60px;
      align-items: start;

      @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 40px;
      }
    }

    .founder-image-wrapper {
      position: relative;
    }

    .image-container {
      position: relative;
      border-radius: 30px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);

      &:hover {
        transform: translateY(-10px) scale(1.03);
        .founder-img {
          transform: scale(1.1);
        }
        .image-overlay {
          opacity: 0.8;
          height: 100%; /* Total zoom feel */
        }
      }
    }

    .image-badge {
      position: absolute;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #0066ff, #00d4ff);
      color: white;
      padding: 12px 24px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 700;
      font-size: 0.9rem;
      z-index: 2;
      box-shadow: 0 8px 24px rgba(0, 102, 255, 0.3);

      i {
        font-size: 1rem;
      }
    }

    .founder-img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
      aspect-ratio: 3/4;
      transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .image-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 40%;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
      pointer-events: none;
      transition: all 0.5s ease;
      opacity: 1;
    }

    .founder-stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-top: 30px;
    }

    .stat-item {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(0, 102, 255, 0.1);
      border-radius: 20px;
      padding: 24px;
      text-align: center;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 900;
      color: var(--color-accent-blue, #0066ff);
      line-height: 1;
      margin-bottom: 8px;
    }

    .stat-label {
      font-size: 0.9rem;
      color: var(--text-secondary, #666);
      font-weight: 600;
    }

    .founder-info {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .founder-header {
      padding-bottom: 20px;
      border-bottom: 2px solid rgba(0, 102, 255, 0.1);
    }

    .founder-name {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 900;
      color: var(--text-primary, #1a1a2e);
      margin: 0 0 10px 0;
      letter-spacing: -0.02em;
    }

    .founder-role {
      font-size: 1.25rem;
      color: var(--color-accent-blue, #0066ff);
      font-weight: 700;
      margin: 0;
    }

    .founder-bio {
      .bio-text {
        font-size: 1.125rem;
        line-height: 1.8;
        color: var(--text-secondary, #4a5568);
        margin: 0;
      }
    }

    .founder-tagline {
      background: linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(0, 212, 255, 0.05));
      border-left: 4px solid var(--color-accent-blue, #0066ff);
      padding: 24px 30px;
      border-radius: 0 20px 20px 0;
      position: relative;
    }

    .quote-icon {
      color: var(--color-accent-blue, #0066ff);
      opacity: 0.3;
      font-size: 2rem;
      margin-bottom: 10px;
    }

    .tagline-text {
      font-size: 1.125rem;
      font-style: italic;
      color: var(--text-primary, #1a1a2e);
      margin: 0;
      font-weight: 600;
      line-height: 1.6;
    }

    .founder-socials {
      display: flex;
      gap: 15px;
      padding-top: 10px;
    }

    .social-link {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(0, 102, 255, 0.1);
      border: 2px solid rgba(0, 102, 255, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-accent-blue, #0066ff);
      font-size: 1.25rem;
      transition: all 0.3s ease;
      text-decoration: none;

      &:hover {
        background: var(--color-accent-blue, #0066ff);
        color: white;
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 102, 255, 0.3);
      }
    }

    .founder-achievements {
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(0, 102, 255, 0.1);
      border-radius: 20px;
      padding: 30px;
    }

    .achievements-title {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--text-primary, #1a1a2e);
      margin: 0 0 20px 0;
    }

    .achievements-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 15px;

      li {
        display: flex;
        align-items: start;
        gap: 12px;
        font-size: 1rem;
        color: var(--text-secondary, #4a5568);
        line-height: 1.6;

        i {
          color: var(--color-accent-blue, #0066ff);
          font-size: 1.25rem;
          margin-top: 2px;
          flex-shrink: 0;
        }

        span {
          flex: 1;
        }
      }
    }

    /* Dark mode support */
    :host-context(.theme-dark) {
      .founder-section {
        background: linear-gradient(#0a0e1a 0%, #020408 100%);
      }

      .section-title,
      .founder-name,
      .achievements-title,
      .tagline-text {
        color: #ffffff;
      }

      .stat-item {
        background: rgba(255, 255, 255, 0.03);
        border-color: rgba(255, 255, 255, 0.1);

        &:hover {
          background: rgba(255, 255, 255, 0.05);
        }
      }

      .founder-achievements {
        background: rgba(255, 255, 255, 0.03);
        border-color: rgba(255, 255, 255, 0.1);
      }

      .founder-header {
        border-bottom-color: rgba(255, 255, 255, 0.1);
      }
    }
  `]
})
export class AboutFounderComponent {
  founder = {
    name: "Akibul Ismail",
    role: "CEO & Founder",
    bio: "Founding TAJ Network Africa, Ismail provides strategic leadership and oversight for the company's technological vision and long-term growth. With over 16 years of extensive experience in software architecture and emerging technologies, he brings a strong blend of innovation, governance, and execution.",
    tagline: "Award-Winning Excellence, Setting benchmarks with unconventional and exceptional results.",
    image: "assets/images/taj/Taj Team/Akibul Ismail.JPG",
    socials: [
      { icon: "fab fa-linkedin", url: "#" },
      { icon: "fab fa-twitter", url: "#" }
    ]
  };

  achievements = [
    "16+ years of expertise in software architecture and emerging technologies",
    "Led the digital transformation of 100+ businesses across Africa",
    "Pioneer in implementing cutting-edge solutions for enterprise clients",
    "Recognized for award-winning excellence and unconventional results",
    "Strategic visionary driving TAJ Network Africa's technological innovation"
  ];
}
