import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="team-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Our Team</span>
          <h2 class="section-title">Meet the Innovators</h2>
          <p class="section-subtitle">A passionate team of experts dedicated to transforming Africa's digital landscape.</p>
        </div>

        <div class="team-rows-container">
          <!-- Row 1: 4 members -->
          <div class="team-row row-4-cols">
            <div class="team-card animate-on-scroll" 
                 *ngFor="let member of row1" 
                 [class.is-ceo]="member.type === 'ceo'"
                 [class.is-manager]="member.type === 'manager' || member.badge === 'Lead' || member.badge === 'Admin'">
              <div class="team-card__badge" *ngIf="member.badge">{{ member.badge }}</div>
              <div class="team-card__image-wrapper">
                <div class="image-inner">
                  <img [src]="member.image" [alt]="member.name" class="team-card__img">
                </div>
                <div class="team-card__social">
                  <a *ngFor="let social of member.socials" [href]="social.url" target="_blank" class="social-link">
                    <i [class]="social.icon"></i>
                  </a>
                </div>
              </div>
              <div class="team-card__content">
                <h3 class="team-card__name">{{ member.name }}</h3>
                <p class="team-card__role">{{ member.role }}</p>
                <p class="team-card__bio">{{ member.bio }}</p>
                <p class="team-card__tagline" *ngIf="member.tagline"><em>{{ member.tagline }}</em></p>
              </div>
            </div>
          </div>

          <!-- Row 2: 4 members -->
          <div class="team-row row-4-cols">
            <div class="team-card animate-on-scroll" 
                 *ngFor="let member of row2" 
                 [class.is-ceo]="member.type === 'ceo'"
                 [class.is-manager]="member.type === 'manager' || member.badge === 'Lead' || member.badge === 'Admin'">
              <div class="team-card__badge" *ngIf="member.badge">{{ member.badge }}</div>
              <div class="team-card__image-wrapper">
                <div class="image-inner">
                  <img [src]="member.image" [alt]="member.name" class="team-card__img">
                </div>
                <div class="team-card__social">
                  <a *ngFor="let social of member.socials" [href]="social.url" target="_blank" class="social-link">
                    <i [class]="social.icon"></i>
                  </a>
                </div>
              </div>
              <div class="team-card__content">
                <h3 class="team-card__name">{{ member.name }}</h3>
                <p class="team-card__role">{{ member.role }}</p>
                <p class="team-card__bio">{{ member.bio }}</p>
              </div>
            </div>
          </div>

          <!-- Row 3: 4 members (Optional Spare) -->
          <div class="team-row row-4-cols" *ngIf="row3 && row3.length > 0">
            <div class="team-card animate-on-scroll" 
                 *ngFor="let member of row3"
                 [class.is-ceo]="member.type === 'ceo'"
                 [class.is-manager]="member.type === 'manager' || member.badge === 'Lead' || member.badge === 'Admin'">
              <div class="team-card__badge" *ngIf="member.badge">{{ member.badge }}</div>
              <div class="team-card__image-wrapper">
                <div class="image-inner">
                  <img [src]="member.image" [alt]="member.name" class="team-card__img">
                </div>
                <div class="team-card__social">
                  <a *ngFor="let social of member.socials" [href]="social.url" target="_blank" class="social-link">
                    <i [class]="social.icon"></i>
                  </a>
                </div>
              </div>
              <div class="team-card__content">
                <h3 class="team-card__name">{{ member.name }}</h3>
                <p class="team-card__role">{{ member.role }}</p>
                <p class="team-card__bio">{{ member.bio }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .team-section {
      padding: 120px 0;
      background: #020c18;
      
      :host-context(.theme-light) & { 
        background: linear-gradient(#f8faff 0%, #eef2ff 100%); 
      }

      @media (max-width: 768px) {
        padding: 60px 0;
      }
    }

    .container {
      max-width: 1350px;
      margin: 0 auto;
      padding: 0 40px;
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
      letter-spacing: -0.02em;
    }

    .section-subtitle {
      color: rgba(255, 255, 255, 0.6);
      font-size: 1.25rem;
      line-height: 1.6;
    }

    /* Team Rows Layout */
    .team-rows-container {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    .team-row {
      display: grid;
      gap: 30px;
      width: 100%;
      justify-content: center;
    }

    .row-2-cols {
      grid-template-columns: repeat(2, minmax(280px, 400px));
      
      @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @media (max-width: 650px) {
        grid-template-columns: 1fr;
      }
    }

    .row-3-cols {
      grid-template-columns: repeat(3, minmax(280px, 400px));
      
      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @media (max-width: 650px) {
        grid-template-columns: 1fr;
      }
    }

    .row-4-cols {
      grid-template-columns: repeat(4, minmax(280px, 400px));
      
      @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @media (max-width: 650px) {
        grid-template-columns: 1fr;
      }
    }

    .is-centered {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      
      .team-card {
        flex: 0 1 450px;
        
        @media (max-width: 650px) {
          flex: 1 1 100%;
        }
      }
    }

    .team-card {
      position: relative;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 40px;
      padding: 40px 30px;
      text-align: center;
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      overflow: hidden;
      width: 100%;

      &:hover {
        background: rgba(255, 255, 255, 0.04);
        border-color: rgba(255, 255, 255, 0.15);
        transform: translateY(-15px);
        box-shadow: 0 40px 80px rgba(0, 0, 0, 0.4);

        .team-card__social {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        .team-card__img {
          transform: scale(1.1);
        }
      }
    }

    /* Distinctive Designs for CEO & Manager - Badge Colors Only */
    .team-card.is-ceo {
      border: 1px solid rgba(212, 165, 116, 0.3);
      
      &:hover {
        border-color: #d4a574;
        box-shadow: 0 40px 80px rgba(212, 165, 116, 0.15);
      }

      .team-card__badge {
        background: #d4a574;
      }

      .image-inner {
        border-color: rgba(212, 165, 116, 0.4);
      }
    }

    .team-card.is-manager {
      border: 1px solid rgba(0, 102, 255, 0.2);
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(0, 102, 255, 0.05) 100%);
      
      &:hover {
        border-color: var(--color-accent-blue, #0066ff);
        box-shadow: 0 40px 80px rgba(0, 102, 255, 0.15);
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(0, 102, 255, 0.1) 100%);
      }

      .team-card__badge {
        background: var(--color-accent-blue, #0066ff);
      }

      .image-inner {
        border-color: rgba(0, 102, 255, 0.3);
      }
    }

    .team-card__badge {
      position: absolute;
      top: 22px;
      right: -35px;
      width: 140px;
      text-align: center;
      padding: 5px 0;
      font-size: 0.75rem;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #fff;
      transform: rotate(45deg);
      z-index: 2;
      box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    }

    .team-card__image-wrapper {
      position: relative;
      margin-bottom: 30px;
    }

    .image-inner {
      width: 180px;
      height: 180px;
      border-radius: 50%;
      margin: 0 auto;
      overflow: hidden;
      border: 6px solid rgba(255, 255, 255, 0.05);
      transition: all 0.5s ease;
      background: #1a1a1a;
    }

    .team-card__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top; /* Focus on the head/face */
      transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .team-card__social {
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      display: flex;
      gap: 12px;
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .social-link {
      width: 40px;
      height: 40px;
      background: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #004a78;
      font-size: 1rem;
      transition: all 0.3s ease;
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);

      &:hover {
        background: var(--color-accent-blue, #0066ff);
        color: #fff;
        transform: scale(1.1) translateY(-3px);
      }
    }

    .team-card__name {
      font-size: 1.5rem;
      font-weight: 800;
      color: #fff;
      margin-bottom: 10px;
      letter-spacing: -0.01em;
    }

    .team-card__role {
      font-size: 0.85rem;
      color: var(--color-accent-blue, #0066ff);
      font-weight: 700;
      margin-bottom: 20px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
    }

    .team-card__bio {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.5);
      line-height: 1.7;
      margin: 0 0 15px;
    }

    .team-card__tagline {
      font-size: 0.85rem;
      color: var(--color-accent-blue, #0066ff);
      font-weight: 500;
      opacity: 0.8;
    }

    /* ================================
       LIGHT MODE OVERRIDES
       ================================ */
    :host-context(.theme-light) {
      .section-title { color: #004a78; }
      .section-subtitle { color: #3f5175; }
      
      .team-card {
        background: #fff;
        border-color: rgba(0, 102, 255, 0.08);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.04);

        &:hover {
          box-shadow: 0 40px 80px rgba(0, 74, 120, 0.08);
          background: #fff;
        }

        &.is-ceo {
          background: linear-gradient(135deg, rgba(212, 165, 116, 0.05) 0%, #fff 100%);
        }

        &.is-manager {
          background: linear-gradient(135deg, rgba(0, 102, 255, 0.03) 0%, #fff 100%);
        }
      }

      .team-card__name { color: #1a2332; }
      .team-card__bio { color: #3f5175; }
      
      .image-inner {
        background: #f8f9fa;
        border-color: #fff;
        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      }

      .social-link {
        color: #004a78;
        background: #f0f9ff;
        
        &:hover {
          background: #004a78;
          color: #fff;
        }
      }
    }
  `]
})
export class TeamSectionComponent implements OnInit {
  team = [
    {
      name: "Leo Chukwu",
      role: "Software Engineer (Manager)",
      type: "manager",
      badge: "Lead",
      bio: "Leo is a Software Engineer focused on solving real-world problems in travel tech and e-learning through impactful, user-centered solutions.",
      image: "assets/images/taj/Taj Team/dp2.jpg",
      socials: [
        { icon: "fab fa-linkedin", url: "#" },
        { icon: "fab fa-github", url: "#" }
      ]
    },
    {
      name: "Nasira",
      role: "Product Designer",
      type: "manager",
      bio: "Creative thinker focused on building user-centric digital experiences through meticulous research and collaborative design.",
      image: "assets/images/taj/Taj Team/Nasira.jpeg", // Updated photo
      socials: [
        { icon: "fab fa-linkedin", url: "#" },
        { icon: "fab fa-dribbble", url: "#" }
      ]
    },
    {
      name: "Isaac Ayodejiariyo",
      role: "Mobile App Developer",
      type: "manager",
      bio: "Crafting high-performance mobile experiences with a focus on fluid UX and innovative cross-platform solutions.",
      image: "assets/images/taj/Taj Team/Isaac Ayodejiariyo.JPG",
      socials: [
        { icon: "fab fa-linkedin", url: "#" },
        { icon: "fab fa-github", url: "#" }
      ]
    },
    {
      name: "Praise Daniel",
      role: "Creative Director & Social Media",
      type: "manager",
      bio: "Storyteller and strategist bridging the gap between brand identity and audience connection through creative digital narratives.",
      image: "assets/images/taj/Taj Team/Praise Daniel.JPG",
      socials: [
        { icon: "fab fa-instagram", url: "#" },
        { icon: "fab fa-behance", url: "#" }
      ]
    },
    {
      name: "Judith Yakubu",
      role: "Product Designer",
      type: "manager",
      bio: "Human-centric designer dedicated to creating beautiful, intuitive interfaces that tell a story and drive user engagement.",
      image: "assets/images/taj/Taj Team/Judith Yakubu.JPG",
      socials: [
        { icon: "fab fa-linkedin", url: "#" },
        { icon: "fab fa-dribbble", url: "#" }
      ]
    },
    {
      name: "Hemdinachi Emem",
      role: "Software Engineer",
      type: "manager",
      bio: "With a background in mechanical engineering, Hemdinachi builds methodical, reliable, and efficient systems with a focus on maintainability.",
      image: "assets/images/taj/Taj Team/Hemdinachi Emem.JPG",
      socials: [
        { icon: "fab fa-linkedin", url: "#" },
        { icon: "fab fa-github", url: "#" }
      ]
    },
    {
      name: "Charity",
      role: "Administrative Lead",
      type: "manager",
      badge: "Admin",
      bio: "Ensuring operational excellence and seamless coordination across the network with a focus on administrative leadership.",
      image: "assets/images/taj/Taj Team/charity.jpeg",
      socials: [
        { icon: "fab fa-linkedin", url: "#" },
        { icon: "far fa-envelope", url: "mailto:admin@tajnetworkafrica.com" }
      ]
    },
    {
      name: "Dennis Majesty",
      role: "Software Engineer",
      type: "manager",
      bio: "A Creative Software Engineer dedicated to building cutting-edge digital products and meaningful experiences that improve everyday life.",
      image: "assets/images/taj/Taj Team/Dennis Majesty.JPG",
      socials: [
        { icon: "fab fa-linkedin", url: "#" },
        { icon: "fab fa-github", url: "#" }
      ]
    }
  ];

  row1: any[] = [];
  row2: any[] = [];
  row3: any[] = [];

  ngOnInit() {
    // 4-4 Formation for 8 members (uniform grid)
    this.row1 = this.team.slice(0, 4); // Top 4
    this.row2 = this.team.slice(4, 8); // Bottom 4
    this.row3 = []; // Empty row
  }
}
