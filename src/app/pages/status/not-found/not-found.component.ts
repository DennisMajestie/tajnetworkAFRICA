import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
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
          <div class="status-badge">Error 404</div>
          <h1 class="status-title">Lost in <span class="highlight">Cyberspace</span>?</h1>
          <p class="status-desc">
            The page you are looking for has been decommissioned or moved to a new sector of the network. Let's get you back on track.
          </p>

          <div class="status-visual">
             <div class="glitch-box">
                <span class="glitch-404">404</span>
             </div>
          </div>

          <div class="status-actions">
            <a routerLink="/" class="btn-primary">Return to Headquarters</a>
            <a routerLink="/contact" class="btn-outline">Report an Issue</a>
          </div>
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
      position: relative;
      background: #020c18;
      overflow: hidden;
      color: #fff;
    }

    .status-bg {
      position: absolute;
      inset: 0;
      z-index: 0;

      .glow-orb {
        position: absolute;
        width: 800px;
        height: 800px;
        background: radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        filter: blur(100px);
      }

      .grid-overlay {
        position: absolute;
        inset: 0;
        background-image: 
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
        background-size: 50px 50px;
      }
    }

    .container--narrow {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 24px;
      position: relative;
      z-index: 10;
    }

    .status-content {
      text-align: center;
    }

    .status-badge {
      display: inline-block;
      padding: 10px 24px;
      background: rgba(0, 102, 255, 0.1);
      border: 1px solid rgba(0, 102, 255, 0.3);
      border-radius: 100px;
      color: var(--color-accent-blue);
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-size: 0.8rem;
      margin-bottom: 40px;
    }

    .status-title {
      font-size: clamp(3rem, 10vw, 6rem);
      font-weight: 900;
      letter-spacing: -0.05em;
      line-height: 1;
      margin-bottom: 30px;

      .highlight {
        background: linear-gradient(135deg, #0066ff 0%, #00d084 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    .status-desc {
      font-size: 1.25rem;
      color: rgba(255, 255, 255, 0.6);
      max-width: 550px;
      margin: 0 auto 60px;
      line-height: 1.6;
    }

    .status-visual {
       margin-bottom: 80px;
       
       .glitch-box {
          position: relative;
          display: inline-block;
       }

       .glitch-404 {
          font-size: 15rem;
          font-weight: 900;
          opacity: 0.05;
          letter-spacing: 20px;
          user-select: none;
       }
    }

    .status-actions {
      display: flex;
      justify-content: center;
      gap: 20px;
      @media (max-width: 640px) { flex-direction: column; }
    }

    .btn-primary {
      padding: 22px 45px;
      background: #ffffff;
      color: #020c18;
      border-radius: 100px;
      font-weight: 900;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: all 0.4s ease;
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);

      &:hover {
        background: var(--color-accent-blue);
        color: #ffffff;
        transform: translateY(-5px);
        box-shadow: 0 30px 60px rgba(0, 102, 255, 0.4);
      }
    }

    .btn-outline {
      padding: 22px 45px;
      border: 1.5px solid rgba(255, 255, 255, 0.2);
      color: #ffffff;
      border-radius: 100px;
      font-weight: 900;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: all 0.4s ease;

      &:hover {
        border-color: #ffffff;
        background: rgba(255, 255, 255, 0.05);
      }
    }

    /* Light Mode Overrides */
    :host-context(.theme-light) .status-page { background: #f8faff !important; color: #0c152a !important; }
    :host-context(.theme-light) .status-bg {
      .glow-orb { background: radial-gradient(circle, rgba(0, 102, 255, 0.05) 0%, transparent 70%); }
      .grid-overlay { background-image: linear-gradient(rgba(0, 74, 120, 0.03) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(0, 74, 120, 0.03) 1px, transparent 1px); }
    }
    :host-context(.theme-light) .status-title { color: #0c152a !important; }
    :host-context(.theme-light) .status-desc { color: #475569 !important; }
    :host-context(.theme-light) .glitch-404 { opacity: 0.03; color: #004a78; }
    :host-context(.theme-light) .btn-primary { background: #004a78 !important; color: #ffffff !important; box-shadow: 0 10px 30px rgba(0, 74, 120, 0.15); }
    :host-context(.theme-light) .btn-outline { border-color: #cbd5e1 !important; color: #475569 !important; }
    :host-context(.theme-light) .btn-outline:hover { background: #f1f5f9; border-color: #004a78; color: #004a78; }
  `]
})
export class NotFoundComponent { }
