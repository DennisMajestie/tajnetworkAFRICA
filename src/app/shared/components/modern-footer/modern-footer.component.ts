import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../../core/services/config.service';
import { NavigationConfig } from '../../../core/models/types';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  template: `
    <footer class="footer">
      <!-- Decorative background orbs -->
      <div class="footer__glow footer__glow--1"></div>
      <div class="footer__glow footer__glow--2"></div>

      <div class="container footer__container">
        <!-- Top Section: Newsletter -->
        <div class="newsletter-section">
          <div class="newsletter-content">
            <h3 class="newsletter-title">Stay in the Loop</h3>
            <p class="newsletter-text">Digital insights and tech perspectives, delivered to your inbox.</p>
          </div>
          <form [formGroup]="newsletterForm" (ngSubmit)="onSubscribe()" class="newsletter-form">
            <div class="newsletter-input-group">
              <input type="email" 
                     formControlName="email" 
                     placeholder="Enter your email" 
                     class="newsletter-input"
                     [class.newsletter-input--error]="isEmailInvalid()">
              <button type="submit" 
                      class="btn-primary newsletter-btn" 
                      [disabled]="newsletterForm.invalid || submitting">
                {{ submitting ? 'Joining...' : 'Subscribe' }}
              </button>
            </div>
            <p *ngIf="isEmailInvalid()" class="newsletter-error">Please enter a valid email address.</p>
            <p *ngIf="subscribeSuccess" class="newsletter-success">Welcome to the inner circle! ✨</p>
          </form>
        </div>

        <div class="footer__divider"></div>

        <!-- Main Footer Content -->
        <div class="footer__grid">
          <!-- Brand Info -->
          <div class="footer__col footer__col--brand">
            <a routerLink="/" class="footer__logo">
              <img src="assets/images/taj/tajlogo.png" alt="Taj Network Africa" class="footer__logo-img" width="150" height="40">
            </a>
            <p class="footer__description">
              Taj Network Africa is a premier software development firm dedicated to crafting innovative digital solutions that drive business growth and master market understanding across the continent.
            </p>
            <div class="footer__socials">
              <a *ngFor="let social of navConfig?.social" 
                 [href]="social.url" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="footer__social-link"
                 [title]="social.platform">
                <i [class]="social.icon"></i>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer__col">
            <h4 class="footer__title">Explore</h4>
            <ul class="footer__links">
              <li *ngFor="let item of navConfig?.main">
                <a [routerLink]="item.url" class="footer__link">{{ item.text }}</a>
              </li>
            </ul>
          </div>

          <!-- Services Column -->
          <div class="footer__col">
            <h4 class="footer__title">Specialties</h4>
            <ul class="footer__links">
              <li><a routerLink="/services" class="footer__link">IT Consultancy</a></li>
              <li><a routerLink="/services" class="footer__link">Custom Software</a></li>
              <li><a routerLink="/services" class="footer__link">UI/UX Design</a></li>
              <li><a routerLink="/training" class="footer__link">Tech Training</a></li>
              <li><a routerLink="/services" class="footer__link">AI Solutions</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="footer__col">
            <h4 class="footer__title">Get in Touch</h4>
            <ul class="footer__contact">
              <li class="footer__contact-item">
                <i class="fa-solid fa-location-dot"></i>
                <span>Block 1, PhilKruiz Estate, Lugbe FCT Abuja, Nigeria</span>
              </li>
              <li class="footer__contact-item">
                <i class="fa-solid fa-envelope"></i>
                <a href="mailto:info&#64;tajnetworkafrica.com">info&#64;tajnetworkafrica.com</a>
              </li>
              <li class="footer__contact-item">
                <i class="fa-solid fa-phone"></i>
                <a href="tel:+2348029824786">+234 (802) 982 4786</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer__divider mt-12"></div>

        <!-- Bottom Footer -->
        <div class="footer__bottom">
          <p class="footer__copyright">
            &copy; {{ currentYear }} Taj Network Africa. All rights reserved.
          </p>
          <div class="footer__legal">
            <a routerLink="#" class="footer__legal-link">Privacy Policy</a>
            <a routerLink="#" class="footer__legal-link">Terms of Service</a>
            <a routerLink="#" class="footer__legal-link">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      position: relative;
      background: var(--color-primary-dark);
      padding: 100px 0 40px;
      overflow: hidden;
      color: var(--color-neutral-white);

      @media (max-width: 768px) {
        padding: 60px 0 30px;
      }
    }

    .footer__glow {
      position: absolute;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      filter: blur(120px);
      opacity: 0.1;
      pointer-events: none;
      z-index: 0;

      &--1 {
        background: var(--color-accent-blue);
        top: -100px;
        left: -100px;
      }

      &--2 {
        background: var(--color-accent-purple);
        bottom: -100px;
        right: -100px;
      }
    }

    .footer__container {
      position: relative;
      z-index: 1;
    }

    .newsletter-section {
      display: grid;
      gap: 2rem;
      margin-bottom: 4rem;

      @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        align-items: center;
      }
    }

    .newsletter-title {
      font-family: var(--font-heading);
      font-size: clamp(1.75rem, 5vw, 2.25rem);
      font-weight: 700;
      margin-bottom: 0.5rem;
      background: linear-gradient(135deg, #fff, var(--color-neutral-mediumGray));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .newsletter-text {
      color: var(--color-neutral-darkGray);
      font-size: 1.125rem;
    }

    .newsletter-form {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .newsletter-input-group {
      display: flex;
      gap: 1rem;
      flex-direction: column;

      @media (min-width: 640px) {
        flex-direction: row;
      }
    }

    .newsletter-input {
      flex: 1;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 14px 20px;
      color: var(--color-neutral-white);
      font-family: inherit;
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-color: var(--color-accent-blue);
        background: rgba(255, 255, 255, 0.08);
        box-shadow: 0 0 0 4px rgba(0, 102, 255, 0.1);
      }

      &--error {
        border-color: #ef4444;
      }
    }

    .newsletter-error {
      color: #f87171;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    .newsletter-success {
      color: var(--color-accent-emerald);
      font-weight: 600;
      margin-top: 0.5rem;
    }

    .footer__divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    }

    .footer__grid {
      display: grid;
      gap: clamp(2rem, 5vw, 3rem);
      padding: clamp(3rem, 8vw, 4rem) 0;

      @media (min-width: 640px) { grid-template-columns: repeat(2, 1fr); }
      @media (min-width: 1024px) { grid-template-columns: 2fr 1fr 1fr 1.5fr; }
    }

    .footer__col--brand {
      @media (min-width: 1024px) {
        padding-right: 3rem;
      }
    }

    .footer__logo {
      display: inline-block;
      margin-bottom: 2rem;
    }

    .footer__logo-img {
      height: 80px;
      width: auto;
    }

    .footer__description {
      color: var(--color-neutral-darkGray);
      margin-bottom: 2rem;
      line-height: 1.8;
      max-width: 400px;
    }

    .footer__socials {
      display: flex;
      gap: 1rem;
    }

    .footer__social-link {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      color: var(--color-neutral-white);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        background: var(--color-accent-blue);
        border-color: var(--color-accent-blue);
        transform: translateY(-4px);
        box-shadow: 0 8px 16px rgba(0, 102, 255, 0.3);
      }
    }

    .footer__title {
      font-size: 1.125rem;
      font-weight: 700;
      margin-bottom: 2rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .footer__links {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .footer__link {
      color: var(--color-neutral-darkGray);
      text-decoration: none;
      transition: all 0.3s ease;

      &:hover {
        color: var(--color-accent-blue);
        padding-left: 5px;
      }
    }

    .footer__contact {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .footer__contact-item {
      display: flex;
      gap: 1rem;
      color: var(--color-neutral-darkGray);

      i {
        color: var(--color-accent-blue);
        margin-top: 4px;
      }

      a {
        color: inherit;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover { color: var(--color-accent-blue); }
      }
    }

    .footer__bottom {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      align-items: center;
      text-align: center;

      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
      }
    }

    .footer__copyright {
      color: var(--color-neutral-darkGray);
      font-size: 0.875rem;
    }

    .footer__legal {
      display: flex;
      gap: 1.5rem;
    }

    .footer__legal-link {
      color: var(--color-neutral-darkGray);
      text-decoration: none;
      font-size: 0.875rem;
      transition: color 0.3s ease;

      &:hover { color: var(--color-neutral-white); }
    }

    /* Light Mode Overrides - Consistent with other sections */
    :host-context(.theme-light) .footer {
      background: #dbd9fd !important; /* Solid lavender to match all sections */
      color: #1e1b4b;
    }

    :host-context(.theme-light) .newsletter-title {
      background: linear-gradient(135deg, #004a78, #0066a5);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    :host-context(.theme-light) .newsletter-text,
    :host-context(.theme-light) .footer__description,
    :host-context(.theme-light) .footer__link,
    :host-context(.theme-light) .footer__contact-item,
    :host-context(.theme-light) .footer__copyright,
    :host-context(.theme-light) .footer__legal-link {
      color: #312e81;
    }

    :host-context(.theme-light) .footer__title {
      color: #004a78;
    }

    :host-context(.theme-light) .newsletter-input {
      background: rgba(255, 255, 255, 0.6);
      border: 1.5px solid rgba(0, 74, 120, 0.2);
      color: #1e1b4b;

      &::placeholder { color: rgba(30, 27, 75, 0.5); }

      &:focus {
        border-color: #004a78;
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0 0 0 4px rgba(0, 74, 120, 0.1);
      }
    }

    :host-context(.theme-light) .newsletter-btn {
      background: #004a78 !important;
      color: #ffffff !important;
      border: none !important;
      box-shadow: 0 4px 15px rgba(0, 74, 120, 0.3) !important;

      &:hover {
        background: #0066a5 !important;
        box-shadow: 0 8px 25px rgba(0, 74, 120, 0.4) !important;
      }
    }

    :host-context(.theme-light) .footer__social-link {
      background: rgba(255, 255, 255, 0.5);
      border: 1px solid rgba(0, 74, 120, 0.15);
      color: #004a78;

      &:hover {
        background: #004a78;
        border-color: #004a78;
        color: #ffffff;
      }
    }

    :host-context(.theme-light) .footer__glow--1,
    :host-context(.theme-light) .footer__glow--2 {
      display: none; /* Remove glow orbs in light mode for cleaner look */
    }

    :host-context(.theme-light) .footer__divider {
      background: linear-gradient(90deg, transparent, rgba(0, 74, 120, 0.25), transparent);
    }

    :host-context(.theme-light) .footer__contact-item i {
      color: #004a78;
    }

    :host-context(.theme-light) .footer__link:hover,
    :host-context(.theme-light) .footer__legal-link:hover {
      color: #004a78;
    }
  `]
})
export class ModernFooterComponent implements OnInit {
  navConfig: NavigationConfig | null = null;
  currentYear = new Date().getFullYear();
  newsletterForm: FormGroup;
  submitting = false;
  subscribeSuccess = false;

  constructor(
    private configService: ConfigService,
    private fb: FormBuilder
  ) {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.configService.getNavigation().subscribe(config => {
      if (config && config.main) {
        // Filter out Training from the Explore section as requested
        this.navConfig = {
          ...config,
          main: config.main.filter(item => item.text !== 'Training')
        };
      } else {
        this.navConfig = config;
      }
    });
  }

  isEmailInvalid(): boolean {
    const control = this.newsletterForm.get('email');
    return !!(control && control.invalid && control.touched);
  }

  onSubscribe(): void {
    if (this.newsletterForm.valid) {
      this.submitting = true;
      // Simulate API call
      setTimeout(() => {
        this.submitting = false;
        this.subscribeSuccess = true;
        this.newsletterForm.reset();
        setTimeout(() => this.subscribeSuccess = false, 5000);
      }, 1500);
    } else {
      this.newsletterForm.markAllAsTouched();
    }
  }
}
