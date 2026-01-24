import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-network-status',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <main class="network-page">
      <div class="network-bg">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
      </div>

      <div class="container--narrow">
        <div class="network-content">
          <div class="pulse-icon">
            <i class="fas fa-wifi"></i>
            <div class="pulse-ring"></div>
          </div>

          <h1 class="network-title">Latency <span class="highlight">Detected</span></h1>
          <p class="network-desc">
            We're experiencing a slight delay in the network uplink. This usually happens during high-frequency data synchronizations. Please verify your connection or refresh the system.
          </p>

          <div class="network-status-box">
             <div class="status-item">
                <span class="label">Uplink:</span>
                <span class="value value--error">Interrupted</span>
             </div>
             <div class="status-item">
                <span class="label">Architecture:</span>
                <span class="value value--success">Stable</span>
             </div>
          </div>

          <div class="network-actions">
            <button class="btn-primary" (click)="refreshPage()">Reconnect Uplink</button>
            <a routerLink="/" class="btn-simple">Cancel Connection</a>
          </div>
        </div>
      </div>
    </main>
  `,
  styles: [`
    .network-page {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #010811;
      position: relative;
      overflow: hidden;
      color: #fff;
    }

    .network-bg {
      position: absolute;
      inset: 0;
      opacity: 0.1;
      
      .line {
        position: absolute;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--color-accent-blue), transparent);
        width: 100%;
        animation: scan 4s linear infinite;
      }
      .line-1 { top: 20%; animation-delay: 0s; }
      .line-2 { top: 50%; animation-delay: 1.5s; }
      .line-3 { top: 80%; animation-delay: 3s; }
    }

    @keyframes scan {
      0% { transform: translateY(-100px); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateY(100px); opacity: 0; }
    }

    .container--narrow {
      max-width: 700px;
      position: relative;
      z-index: 10;
      padding: 0 24px;
    }

    .network-content {
      text-align: center;
    }

    .pulse-icon {
      width: 120px;
      height: 120px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      margin: 0 auto 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      color: var(--color-accent-blue);
      position: relative;

      .pulse-ring {
        position: absolute;
        inset: -10px;
        border: 2px solid var(--color-accent-blue);
        border-radius: 50%;
        opacity: 0;
        animation: pulse 2s infinite;
      }
    }

    @keyframes pulse {
      0% { transform: scale(0.8); opacity: 0; }
      50% { opacity: 0.3; }
      100% { transform: scale(1.3); opacity: 0; }
    }

    .network-title {
      font-size: clamp(2.5rem, 8vw, 4.5rem);
      font-weight: 900;
      margin-bottom: 25px;
      letter-spacing: -0.03em;

      .highlight {
         color: #ef4444; /* Alert Red */
         text-shadow: 0 0 20px rgba(239, 68, 68, 0.4);
      }
    }

    .network-desc {
      font-size: 1.15rem;
      color: rgba(255, 255, 255, 0.5);
      line-height: 1.8;
      margin-bottom: 50px;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }

    .network-status-box {
       background: rgba(255, 255, 255, 0.03);
       border: 1px solid rgba(255, 255, 255, 0.08);
       border-radius: 20px;
       padding: 25px;
       display: flex;
       justify-content: center;
       gap: 40px;
       margin-bottom: 60px;
       max-width: 400px;
       margin-left: auto;
       margin-right: auto;

       .status-item {
          display: flex;
          flex-direction: column;
          gap: 5px;
          
          .label { 
             font-size: 0.7rem; 
             text-transform: uppercase; 
             letter-spacing: 2px; 
             color: rgba(255, 255, 255, 0.3);
             font-weight: 800;
          }
          .value { 
             font-weight: 700; 
             font-size: 1rem;
             &--error { color: #ef4444; }
             &--success { color: #00d084; }
          }
       }
    }

    .network-actions {
       display: flex;
       flex-direction: column;
       align-items: center;
       gap: 20px;
    }

    .btn-primary {
      padding: 22px 55px;
      background: var(--color-accent-blue);
      color: #ffffff;
      border: none;
      border-radius: 100px;
      font-weight: 900;
      font-size: 1.1rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      cursor: pointer;
      box-shadow: 0 20px 40px rgba(0, 74, 120, 0.3);
      transition: all 0.4s ease;

      &:hover {
         transform: translateY(-5px);
         box-shadow: 0 30px 60px rgba(0, 74, 120, 0.5);
      }
    }

    .btn-simple {
       color: rgba(255, 255, 255, 0.5);
       text-decoration: none;
       font-weight: 700;
       font-size: 0.9rem;
       transition: color 0.3s ease;
       &:hover { color: #fff; }
    }

    /* Light Mode Overrides */
    :host-context(.theme-light) .network-page { background: #f8faff; color: #0c152a; }
    :host-context(.theme-light) .pulse-icon { background: #fff; border-color: rgba(0, 74, 120, 0.1); box-shadow: 0 10px 30px rgba(0, 74, 120, 0.05); }
    :host-context(.theme-light) .network-title { color: #0c152a; }
    :host-context(.theme-light) .network-desc { color: #475569; }
    :host-context(.theme-light) .network-status-box { background: #fff; border-color: rgba(0, 0, 0, 0.05); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03); }
    :host-context(.theme-light) .network-status-box .status-item .label { color: #94a3b8; }
    :host-context(.theme-light) .btn-primary { background: #004a78; color: #fff; box-shadow: 0 10px 30px rgba(0, 74, 120, 0.15); }
    :host-context(.theme-light) .btn-simple { color: #94a3b8; }
    :host-context(.theme-light) .btn-simple:hover { color: #004a78; }
  `]
})
export class NetworkStatusComponent {
  refreshPage() {
    window.location.reload();
  }
}
