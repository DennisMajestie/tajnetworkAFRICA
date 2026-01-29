import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonials-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Client Stories</span>
          <h2 class="section-title">What Our Clients Say</h2>
          <p class="section-subtitle">Trusted by businesses across Africa to deliver exceptional digital solutions.</p>
        </div>

        <div class="testimonials-grid">
          <div class="testimonial-card" *ngFor="let testimonial of testimonials; let i = index"
               [class.testimonial-card--featured]="i === 0">
            <!-- Quote Icon -->
            <div class="testimonial-quote-icon">
              <i class="fas fa-quote-left"></i>
            </div>

            <!-- Content -->
            <p class="testimonial-text">{{ testimonial.text }}</p>

            <!-- Author -->
            <div class="testimonial-author">
              <div class="author-avatar" [style.background-color]="testimonial.color">
                {{ testimonial.initials }}
              </div>
              <div class="author-info">
                <h4 class="author-name">{{ testimonial.name }}</h4>
                <p class="author-role">{{ testimonial.role }}</p>
                <p class="author-company">{{ testimonial.company }}</p>
              </div>
            </div>

            <!-- Rating -->
            <div class="testimonial-rating">
              <i class="fas fa-star" *ngFor="let star of [1,2,3,4,5]"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials-section {
      padding: 120px 0;
      background: transparent;
      position: relative;
    }

    .section-header {
      text-align: center;
      max-width: 700px;
      margin: 0 auto 80px;
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
      font-size: clamp(2.25rem, 5vw, 3.8rem);
      font-weight: 800;
      color: #fff;
      margin-bottom: 20px;
    }

    .section-subtitle {
      color: rgba(255, 255, 255, 0.6);
      font-size: 1.1rem;
      line-height: 1.6;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;

      @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }

    .testimonial-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 32px;
      padding: 40px;
      position: relative;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &:hover {
        background: rgba(255, 255, 255, 0.06);
        border-color: var(--color-accent-blue, #0066ff);
        transform: translateY(-10px);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
      }

      &--featured {
        background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 208, 132, 0.05));
        border-color: rgba(0, 102, 255, 0.2);
      }
    }

    .testimonial-quote-icon {
      position: absolute;
      top: 30px;
      right: 30px;
      color: rgba(0, 102, 255, 0.2);
      font-size: 2.5rem;
    }

    .testimonial-text {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 30px;
      font-style: italic;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;
    }

    .author-avatar {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1.25rem;
      color: #fff;
      flex-shrink: 0;
    }

    .author-info {
      flex: 1;
    }

    .author-name {
      font-size: 1.1rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 4px;
    }

    .author-role {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.5);
      margin: 0;
    }

    .author-company {
      font-size: 0.85rem;
      color: var(--color-accent-blue, #0066ff);
      margin: 0;
      font-weight: 600;
    }

    .testimonial-rating {
      display: flex;
      gap: 4px;
      color: #ffc107;
      font-size: 0.9rem;
    }

    /* ================================
       LIGHT MODE OVERRIDES
       ================================ */
    :host-context(.theme-light) .section-title {
      color: #0c152a;
    }

    :host-context(.theme-light) .section-subtitle {
      color: #3f5175;
    }

    :host-context(.theme-light) .testimonial-card {
      background: #fff;
      border-color: rgba(0, 102, 255, 0.1);
      box-shadow: 0 10px 40px rgba(0, 74, 120, 0.06);

      &:hover {
        box-shadow: 0 25px 60px rgba(0, 74, 120, 0.12);
      }
    }

    :host-context(.theme-light) .testimonial-text {
      color: #3f5175;
    }

    :host-context(.theme-light) .author-name {
      color: #0c152a;
    }

    :host-context(.theme-light) .author-role {
      color: #6b7280;
    }
  `]
})
export class TestimonialsComponent {
  testimonials = [
    {
      text: "TAJ Network Africa transformed our entire digital infrastructure. Their team's expertise and dedication exceeded our expectations. The CRM system they built has revolutionized how we manage client relationships.",
      name: "Adaeze Nwosu",
      initials: "AN",
      role: "Chief Technology Officer",
      company: "Zenith FinTech Ltd",
      color: "#0066ff"
    },
    {
      text: "Working with TAJ was seamless from start to finish. They understood our vision and delivered a mobile app that our users genuinely love. The attention to UI/UX detail is unmatched.",
      name: "Olumide Adeyemi",
      initials: "OA",
      role: "Founder & CEO",
      company: "LogiTrack Africa",
      color: "#00d084"
    },
    {
      text: "The training programs provided by TAJ have upskilled our entire development team. Our productivity has increased by 40% and we're now handling projects we never thought possible.",
      name: "Fatima Mohammed",
      initials: "FM",
      role: "HR Director",
      company: "Savannah Digital",
      color: "#d4a574"
    }
  ];
}
