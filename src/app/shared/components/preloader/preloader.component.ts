import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="preloader" [class.fade-out]="fadeOut">
      <!-- Organic Blobs Background -->
      <div class="blobs-container">
        <div class="blob blue"></div>
      </div>

      <div class="preloader-content">
        <!-- Radial Data Ring -->
        <div class="radial-ring">
          <svg viewBox="0 0 100 100" class="dots-svg">
            <circle *ngFor="let dot of dots; let i = index"
              class="dot"
              [class.active]="i < activeDotsCount"
              cx="50" cy="5" r="1.5"
              fill="rgba(255, 255, 255, 0.03)"
              [style.transform]="'rotate(' + (i * (360 / dotsCount)) + 'deg)'"
              style="transform-origin: 50% 50%;" />
          </svg>
          
          <!-- Central Pulse Area -->
          <div class="central-area">
             <img src="assets/images/taj/tajlogo.png" alt="TAJ Logo" class="pulse-logo" width="80" height="80">
          </div>
        </div>
        
        <div class="loading-label">INITIALIZING NETWORK...</div>
      </div>
    </div>
  `,
  styles: [`
    .preloader {
      position: fixed;
      inset: 0;
      z-index: 99999;
      background-color: var(--bg-preloader, #0a0f14);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      transition: opacity 0.8s ease-out, visibility 0.8s;
    }

    .preloader.fade-out {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    /* Background Blobs */
    .blobs-container {
      position: absolute;
      inset: 0;
      filter: blur(80px);
      opacity: var(--blob-opacity, 0.4);
    }

    .blob {
      position: absolute;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      animation: float 20s infinite alternate;
    }



    .blob.blue {
      background: #004a78;
      bottom: -100px;
      right: -100px;
    }

    @keyframes float {
      0% { transform: translate(0, 0) scale(1); }
      100% { transform: translate(100px, 100px) scale(1.2); }
    }

    .preloader-content {
      position: relative;
      z-index: 10;
      text-align: center;
    }

    .radial-ring {
      position: relative;
      width: 250px;
      height: 250px;
      margin: 0 auto 30px;
    }

    .dots-svg {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
    }

    .dot {
      fill: rgba(255, 255, 255, 0.1);
      transition: fill 0.3s, filter 0.3s;
    }

    .dot.active {
      fill: #004a78;
      filter: drop-shadow(0 0 5px #004a78);
    }

    .central-area {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .pulse-logo {
      width: 80px;
      height: auto;
      margin-bottom: 15px;
      animation: logoPulse 3s infinite ease-in-out;
    }

    @keyframes logoPulse {
      0%, 100% { transform: scale(1); opacity: 0.8; }
      50% { transform: scale(1.1); opacity: 1; filter: drop-shadow(0 0 15px rgba(0, 74, 120, 0.5)); }
    }


    .loading-label {
      font-family: 'Outfit', sans-serif;
      font-size: 1.1rem;
      letter-spacing: 0.4em;
      color: #004a78;
      text-transform: lowercase;
      font-weight: 700;
    }

    @media (max-width: 768px) {
      .radial-ring {
        width: clamp(160px, 45vw, 200px);
        height: clamp(160px, 45vw, 200px);
      }
      .pulse-logo { width: clamp(45px, 12vw, 60px); }
    }
  `]
})
export class PreloaderComponent implements OnInit {
  @Output() loadingComplete = new EventEmitter<void>();
  progress = 0;
  fadeOut = false;
  dotsCount = 40;
  dots = Array(this.dotsCount);

  get activeDotsCount() {
    return Math.floor((this.progress / 100) * this.dotsCount);
  }

  ngOnInit() {
    this.simulateLoading();
  }

  private simulateLoading() {
    const start = Date.now();
    const duration = 2500; // Consistent loading time for smooth animation

    const update = () => {
      const elapsed = Date.now() - start;
      // Exponentially slow down near the end
      const rawProgress = (elapsed / duration) * 100;
      const progress = Math.min(Math.floor(rawProgress), 100);

      this.progress = progress;

      if (progress < 100) {
        requestAnimationFrame(update);
      } else {
        setTimeout(() => {
          this.fadeOut = true;
          setTimeout(() => this.loadingComplete.emit(), 850);
        }, 700);
      }
    };

    update();
  }
}
