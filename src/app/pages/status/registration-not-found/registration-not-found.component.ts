import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-registration-not-found',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <main class="status-page">
      <div class="status-bg">
        <div class="glow-orb"></div>
        <div class="grid-overlay"></div>
      </div>

      <div class="container--narrow">
        <div class="status-content">
          <div class="status-badge">Identity Error</div>
          <h1 class="status-title">Member <span class="highlight">Unverified</span></h1>
          <p class="status-desc">
            The registration link or member profile you are attempting to access is no longer active or was never initialized in our secure repository.
          </p>

          <div class="info-grid">
             <div class="info-card">
                <i class="fas fa-fingerprint"></i>
                <span>Invalid Hash</span>
             </div>
             <div class="info-card">
                <i class="fas fa-database"></i>
                <span>Zero Records</span>
             </div>
          </div>

          <div class="status-actions">
            <a routerLink="/" class="btn-primary">Return to Base</a>
            <a routerLink="/contact" class="btn-outline">Verify Account</a>
          </div>
          
          <p class="status-footer">Reference Code: SEC-REG-00X</p>
        </div>
      </div>
    </main>
  `,
    styles: [`
    .status-page {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #010811;
      position: relative;
      overflow: hidden;
      color: #fff;
    }

    .status-bg {
      position: absolute;
      inset: 0;
      .glow-orb {
        position: absolute;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 70%);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        filter: blur(80px);
      }
      .grid-overlay {
        position: absolute;
        inset: 0;
        background-image: 
          linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px);
        background-size: 50px 50px;
        mask-image: radial-gradient(circle at center, black, transparent 80%);
      }
    }

    .status-content {
      text-align: center;
      position: relative;
      z-index: 10;
    }

    .status-badge {
      display: inline-block;
      padding: 8px 18px;
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.2);
      border-radius: 100px;
      color: #ef4444;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.7rem;
      margin-bottom: 35px;
    }

    .status-title {
      font-size: clamp(2.5rem, 8vw, 4.5rem);
      font-weight: 900;
      letter-spacing: -0.04em;
      line-height: 1.1;
      margin-bottom: 25px;
      
      .highlight {
         color: #ef4444;
         text-shadow: 0 0 30px rgba(239, 68, 68, 0.3);
      }
    }

    .status-desc {
      font-size: 1.15rem;
      color: rgba(255, 255, 255, 0.5);
      line-height: 1.6;
      margin-bottom: 50px;
      max-width: 550px;
      margin-left: auto;
      margin-right: auto;
    }

    .info-grid {
       display: flex;
       justify-content: center;
       gap: 20px;
       margin-bottom: 60px;

       .info-card {
          padding: 20px 30px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          
          i { color: #ef4444; font-size: 1.2rem; }
          span { font-weight: 700; font-size: 0.9rem; color: rgba(255, 255, 255, 0.8); }
       }
    }

    .status-actions {
      display: flex;
      justify-content: center;
      gap: 20px;
    }

    .btn-primary {
       padding: 20px 45px;
       background: #fff;
       color: #010811;
       border-radius: 100px;
       font-weight: 900;
       text-decoration: none;
       text-transform: uppercase;
       font-size: 0.95rem;
       transition: all 0.4s ease;
       &:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(255, 255, 255, 0.1);
       }
    }

    .btn-outline {
       padding: 20px 45px;
       border: 1.5px solid rgba(255, 255, 255, 0.2);
       color: #fff;
       border-radius: 100px;
       font-weight: 900;
       text-decoration: none;
       text-transform: uppercase;
       font-size: 0.95rem;
       transition: all 0.4s ease;
       &:hover {
          border-color: #ef4444;
          color: #ef4444;
          background: rgba(239, 68, 68, 0.05);
       }
    }

    .status-footer {
       margin-top: 80px;
       font-size: 0.75rem;
       font-weight: 700;
       color: rgba(255, 255, 255, 0.2);
       letter-spacing: 1px;
    }

    /* Light Mode Overrides */
    :host-context(.theme-light) .status-page { background: #f8faff; color: #0c152a; }
    :host-context(.theme-light) .status-bg .glow-orb { background: radial-gradient(circle, rgba(239, 68, 68, 0.05) 0%, transparent 70%); }
    :host-context(.theme-light) .status-bg .grid-overlay { background-image: linear-gradient(rgba(0, 74, 120, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 74, 120, 0.03) 1px, transparent 1px); }
    :host-context(.theme-light) .status-title { color: #0c152a; }
    :host-context(.theme-light) .status-desc { color: #475569; }
    :host-context(.theme-light) .info-card { background: #fff; border-color: rgba(0, 0, 0, 0.05); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03); span { color: #0c152a; } }
    :host-context(.theme-light) .btn-primary { background: #0c152a; color: #fff; }
    :host-context(.theme-light) .btn-outline { border-color: #cbd5e1; color: #475569; }
    :host-context(.theme-light) .btn-outline:hover { border-color: #ef4444; color: #ef4444; }
  `]
})
export class RegistrationNotFoundComponent { }
