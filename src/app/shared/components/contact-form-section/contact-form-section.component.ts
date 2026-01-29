import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <section class="contact-form-section">
      <!-- TAJ Grid Overlay -->
      <div class="taj-grid-overlay"></div>
      
      <!-- High-Tech Atmosphere & Effects -->
      <div class="form-bg-effects">
        <div class="glow-orb orb-1"></div>
        <div class="glow-orb orb-2"></div>
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
        </div>

      </div>

      <div class="container--wide">
        <div class="contact-layout">
          <!-- Left: Strategic Insights Sidebar -->
          <aside class="benefits-sidebar">
            <div class="sidebar-sticky">
              <div class="sidebar-badge taj-floating">
                <i class="fas fa-shield-alt"></i>
                <span>Secure Transmission</span>
              </div>

              <h3 class="sidebar-title">Initiate Your <span class="highlight">Digital Legacy</span></h3>

              <ul class="benefit-list">
                <li>
                  <div class="benefit-icon"><i class="fas fa-bolt"></i></div>
                  <div class="benefit-content">
                    <h4>Rapid Response</h4>
                    <p>Strategic response in your inbox within 120 minutes</p>
                  </div>
                </li>
                <li>
                  <div class="benefit-icon"><i class="fas fa-globe-africa"></i></div>
                  <div class="benefit-content">
                    <h4>Global Reach</h4>
                    <p>Serving innovative businesses across the continent</p>
                  </div>
                </li>
                <li>
                  <div class="benefit-icon"><i class="fas fa-satellite-dish"></i></div>
                  <div class="benefit-content">
                    <h4>Secure Uplink</h4>
                    <p>End-to-end encrypted communication protocols</p>
                  </div>
                </li>
                <li>
                  <div class="benefit-icon"><i class="fas fa-microchip"></i></div>
                  <div class="benefit-content">
                    <h4>Expert Briefing</h4>
                    <p>Direct consultation with our senior engineering team</p>
                  </div>
                </li>
              </ul>

              <div class="trust-indicators">
                <div class="trust-item">
                  <span class="trust-number">400+</span>
                  <span class="trust-label">Projects</span>
                </div>
                <div class="trust-item">
                  <span class="trust-number">15+</span>
                  <span class="trust-label">Years Exp</span>
                </div>
              </div>
            </div>
          </aside>

          <!-- Right: Form Container -->
          <div class="form-container">
            <div class="crystalline-container">
              <div class="form-header">
                <div class="header-decoration">
                  <span class="deco-line"></span>
                  <span class="protocol-tag">Protocol: CONTACT-2026</span>
                  <span class="deco-line"></span>
                </div>
                <h2 class="form-title">Consultation <span class="highlight">Inquiry</span></h2>
                <p class="form-subtitle">Define your vision below to trigger a strategic alignment session.</p>
              </div>

              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="crystalline-form">
                <div class="form-grid">
                  <div class="input-group" [class.invalid]="f['name'].invalid && f['name'].touched">
                    <label>Full Identity</label>
                    <div class="input-wrapper">
                      <input type="text" formControlName="name" placeholder="John Doe">
                      <div class="input-glow"></div>
                    </div>
                    <span class="error-msg" *ngIf="f['name'].invalid && f['name'].touched">Name is required</span>
                  </div>

                  <div class="input-group" [class.invalid]="f['email'].invalid && f['email'].touched">
                    <label>Cyber Address</label>
                    <div class="input-wrapper">
                      <input type="email" formControlName="email" placeholder="john@example.com">
                      <div class="input-glow"></div>
                    </div>
                    <span class="error-msg" *ngIf="f['email'].errors?.['required'] && f['email'].touched">Email is required</span>
                    <span class="error-msg" *ngIf="f['email'].errors?.['email'] && f['email'].touched">Invalid email format</span>
                  </div>

                  <div class="input-group" [class.invalid]="f['phone'].invalid && f['phone'].touched">
                    <label>Contact Uplink</label>
                    <div class="input-wrapper">
                      <input type="tel" formControlName="phone" placeholder="+234 ...">
                      <div class="input-glow"></div>
                    </div>
                    <span class="error-msg" *ngIf="f['phone'].invalid && f['phone'].touched">Phone is required</span>
                  </div>

                  <div class="input-group" [class.invalid]="f['department'].invalid && f['department'].touched">
                    <label>Target Domain</label>
                    <div class="select-wrapper">
                      <select formControlName="department" class="taj-select">
                        <option value="" disabled>SELECT SECTOR</option>
                        <option value="software">Software Engineering</option>
                        <option value="cloud">Cloud & Infrastructure</option>
                        <option value="data">Data & AI</option>
                        <option value="design">Product Design (UI/UX)</option>
                        <option value="consultancy">Digital Strategy</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                      <i class="fas fa-chevron-down select-arrow"></i>
                      <div class="input-glow"></div>
                    </div>
                    <span class="error-msg" *ngIf="f['department'].invalid && f['department'].touched">Sector selection required</span>
                  </div>

                  <div class="input-group full-width" [class.invalid]="f['message'].invalid && f['message'].touched">
                    <label>Your Vision & Requirements</label>
                    <div class="input-wrapper">
                      <textarea formControlName="message" rows="5" placeholder="TIMELINE, GOALS, AND CHALLENGES..."></textarea>
                      <div class="input-glow"></div>
                    </div>
                    <span class="error-msg" *ngIf="f['message'].invalid && f['message'].touched">Vision details required</span>
                  </div>
                </div>
                
                <div class="form-footer">
                  <div class="terms-note">
                    <i class="fas fa-lock"></i>
                    <span>Secure end-to-end transmission protocol</span>
                  </div>

                  <button type="submit" class="btn-contact-submit" [disabled]="contactForm.invalid || isSubmitting">
                    <span class="btn-text" *ngIf="!isSubmitting">Submit</span>
                    <span class="btn-text" *ngIf="isSubmitting">Submitting...</span>
                    <span class="btn-shine"></span>
                  </button>
                </div>
              </form>

              <!-- Success Message removed per request -->
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-form-section {
      position: relative;
      padding: 120px 0 180px;
      background: linear-gradient(135deg, #010811 0%, #020c18 50%, #071428 100%);
      overflow: hidden;
      min-height: 100vh;
    }

    .form-bg-effects { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
    .glow-orb { position: absolute; border-radius: 50%; filter: blur(100px); animation: floatOrb 20s ease-in-out infinite; }
    .orb-1 { width: 600px; height: 600px; background: radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%); top: -200px; right: -100px; }
    .orb-2 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(0, 102, 255, 0.08) 0%, transparent 70%); bottom: -150px; left: -100px; animation-delay: -10s; }

    .floating-shapes { position: absolute; inset: 0; }
    .shape { position: absolute; border: 1px solid rgba(0, 102, 255, 0.1); border-radius: 20px; animation: floatShape 25s ease-in-out infinite; }
    .shape-1 { width: 80px; height: 80px; top: 20%; left: 10%; transform: rotate(45deg); }
    .shape-2 { width: 120px; height: 120px; top: 60%; right: 5%; animation-delay: -8s; border-radius: 50%; }
    .shape-3 { width: 60px; height: 60px; bottom: 30%; left: 5%; animation-delay: -15s; }



    @keyframes floatOrb {
      0%, 100% { transform: translate(0, 0) scale(1); }
      25% { transform: translate(30px, -30px) scale(1.05); }
      50% { transform: translate(-20px, 20px) scale(0.95); }
      75% { transform: translate(20px, 30px) scale(1.02); }
    }

    @keyframes floatShape {
      0%, 100% { transform: rotate(0deg) translateY(0); opacity: 0.3; }
      50% { transform: rotate(180deg) translateY(-30px); opacity: 0.6; }
    }

    .container--wide { max-width: 1400px; margin: 0 auto; padding: 0 clamp(20px, 5vw, 40px); position: relative; z-index: 10; }

    .contact-layout {
      display: grid; grid-template-columns: 380px 1fr; gap: 80px; align-items: start;
      @media (max-width: 1100px) { grid-template-columns: 1fr; gap: 60px; }
    }

    .benefits-sidebar { position: relative; @media (max-width: 1100px) { order: 2; } }
    .sidebar-sticky { position: sticky; top: 120px; }
    .sidebar-badge {
      display: inline-flex; align-items: center; gap: 10px; padding: 10px 20px; background: rgba(0, 74, 120, 0.1); border: 1px solid rgba(0, 74, 120, 0.2); border-radius: 100px; margin-bottom: 30px;
      i { color: #004a78; font-size: 0.9rem; }
      span { color: #004a78; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; }
    }

    .sidebar-title { font-size: 2.2rem; font-weight: 800; color: #fff; line-height: 1.1; margin-bottom: 40px; .highlight { display: block; color: var(--color-accent-blue); } }

    .benefit-list {
      list-style: none; padding: 0; margin: 0 0 50px;
      li {
        display: flex; gap: 20px; padding: 25px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); transition: all 0.3s ease; cursor: pointer;
        &:hover { transform: translateX(10px); }
        &:hover .benefit-icon { background: var(--color-accent-blue); border-color: var(--color-accent-blue); }
        &:hover .benefit-icon i { color: #ffffff !important; }
        &:last-child { border-bottom: none; }
      }
    }

    .benefit-icon { width: 50px; height: 50px; border-radius: 16px; background: rgba(0, 102, 255, 0.1); border: 1px solid rgba(0, 102, 255, 0.2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; i { color: var(--color-accent-blue); font-size: 1.1rem; } }
    .benefit-content { h4 { font-size: 1.1rem; font-weight: 700; color: #fff; margin: 0 0 5px; } p { font-size: 0.9rem; color: rgba(255, 255, 255, 0.5); margin: 0; line-height: 1.4; } }

    .trust-indicators { display: flex; gap: 40px; padding: 30px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 24px; }
    .trust-item { text-align: center; }
    .trust-number { display: block; font-size: 2.2rem; font-weight: 900; color: var(--color-accent-blue); line-height: 1; margin-bottom: 5px; }
    .trust-label { display: block; font-size: 0.8rem; font-weight: 800; color: rgba(255, 255, 255, 0.7); text-transform: uppercase; letter-spacing: 1.5px; }

    .crystalline-container {
      background: rgba(2, 12, 24, 0.7); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 40px; padding: clamp(24px, 8vw, 60px); box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5); position: relative; overflow: hidden;
      @media (max-width: 768px) { border-radius: 30px; }
    }

    .header-decoration { display: flex; align-items: center; justify-content: center; gap: 20px; margin-bottom: 25px; }
    .deco-line { width: 60px; height: 1px; background: linear-gradient(90deg, transparent, rgba(0, 102, 255, 0.5)); &:last-child { background: linear-gradient(90deg, rgba(0, 102, 255, 0.5), transparent); } }
    .protocol-tag { font-size: 0.7rem; font-weight: 800; color: var(--color-accent-blue); text-transform: uppercase; letter-spacing: 3px; background: rgba(0, 102, 255, 0.1); padding: 8px 18px; border-radius: 100px; border: 1px solid rgba(0, 102, 255, 0.15); }

    .form-header { text-align: center; margin-bottom: 50px; }
    .form-title { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; color: #fff; line-height: 1.1; margin-bottom: 12px; .highlight { background: linear-gradient(135deg, var(--color-accent-blue), #004a78); -webkit-background-clip: text; -webkit-text-fill-color: transparent; } }
    .form-subtitle { font-size: 1rem; color: rgba(255, 255, 255, 0.4); }

    .crystalline-form { .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; @media (max-width: 650px) { grid-template-columns: 1fr; } } .full-width { grid-column: 1 / -1; } }

    .input-group {
      display: flex; flex-direction: column; margin-bottom: 5px;
      label { font-size: 0.75rem; font-weight: 700; color: rgba(255, 255, 255, 0.5); text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px; }
      .input-wrapper { position: relative; }
      .input-glow { position: absolute; inset: 0; border-radius: 16px; transition: all 0.4s ease; pointer-events: none; }
      input, textarea, .taj-select {
        width: 100%; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 18px 20px; color: #fff; font-size: 0.95rem; transition: all 0.3s ease;
        &:focus { outline: none; border-color: var(--color-accent-blue); & ~ .input-glow { box-shadow: 0 0 30px rgba(0, 102, 255, 0.12); } }
      }
      textarea { height: 120px; resize: none; }
      
      &.invalid {
        label { color: #ff5f56; }
        input, textarea, .taj-select { border-color: rgba(255, 95, 86, 0.5); background: rgba(255, 95, 86, 0.05); }
        .input-glow { box-shadow: 0 0 20px rgba(255, 95, 86, 0.1); }
      }
    }

    .error-msg {
      font-size: 0.7rem;
      color: #ff5f56;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 8px;
      animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: translateY(0); } }

    .select-wrapper { position: relative; }
    .taj-select { appearance: none; cursor: pointer; }
    .select-arrow { position: absolute; right: 20px; top: 50%; transform: translateY(-50%); color: var(--color-accent-blue); pointer-events: none; }

    .form-footer { margin-top: 40px; display: flex; flex-direction: column; align-items: center; gap: 20px; }
    .terms-note { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: rgba(255, 255, 255, 0.7); i { color: #004a78; font-size: 1rem; } }

    .btn-contact-submit {
      position: relative; width: 100%; height: 75px; background: linear-gradient(135deg, var(--color-accent-blue) 0%, #0055dd 100%); color: #fff; border: none; border-radius: 100px; font-weight: 800; font-size: 1rem; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; overflow: hidden; transition: all 0.4s ease;
      .btn-shine { position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); transition: left 0.6s ease; }
      &:hover:not(:disabled) { transform: translateY(-3px); box-shadow: 0 15px 40px rgba(0, 102, 255, 0.3); .btn-shine { left: 100%; } }
      &:disabled { opacity: 0.5; cursor: not-allowed; }
    }

    .form-feedback { position: absolute; inset: 0; background: #020c18; display: flex; align-items: center; justify-content: center; z-index: 30; border-radius: 40px; padding: 40px; }
    .success-icon { width: 80px; height: 80px; background: rgba(0, 74, 120, 0.1); border: 1px solid #004a78; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; color: #004a78; margin-bottom: 30px; }
    .success-title { font-size: 2.5rem; font-weight: 900; color: #fff; margin-bottom: 15px; }
    .success-desc { color: rgba(255, 255, 255, 0.6); line-height: 1.6; margin-bottom: 30px; }
    .btn-success-return { padding: 18px 35px; background: #004a78; color: #fff; border: none; border-radius: 100px; font-weight: 800; cursor: pointer; transition: all 0.3s ease; &:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(0, 74, 120, 0.3); } }

    :host-context(.theme-light) {
      .contact-form-section { background: linear-gradient(135deg, #f8faff 0%, #eef2ff 50%, #e8ecf8 100%); }
      .sidebar-title, .form-title, .success-title, .benefit-content h4 { color: #0c152a; }
      .sidebar-title .highlight { color: var(--color-accent-blue); }
      .form-subtitle, .success-desc, .benefit-content p, .input-group label, .terms-note span { color: #64748b; }
      .crystalline-container { background: #ffffff; border-color: rgba(0, 74, 120, 0.1); box-shadow: 0 30px 80px rgba(0, 74, 120, 0.1); }
      .input-group input, .input-group textarea, .taj-select { background: #f8faff; border-color: #e2e8f0; color: #0c152a; &:focus { background: #fff; } }
      .form-feedback { background: #ffffff; }
      .trust-indicators { background: #f8faff; border-color: rgba(0, 74, 120, 0.05); }
      .trust-item .trust-label { color: #475569; }
    }
  `]
})
export class ContactFormSectionComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  showSuccess = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      department: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get f() { return this.contactForm.controls; }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      console.log('Contact Form Payload:', this.contactForm.value);
      // Simulate submission effect
      setTimeout(() => {
        this.isSubmitting = false;

        Swal.fire({
          title: 'Transmission Successful!',
          text: 'Your strategic brief has been received. Redirecting to home...',
          icon: 'success',
          background: '#ffffff',
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
          customClass: {
            popup: 'swal-taj-popup',
            title: 'swal-taj-title'
          },
          willClose: () => {
            this.router.navigate(['/']);
          }
        });

        this.contactForm.reset();
      }, 1500);
    }
  }
}
