import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-blank-card',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="blank-card" (mousemove)="onMouseMove($event)" (mouseleave)="onMouseLeave()">
      <div class="card-inner" [style.transform]="transformStyle">
        
        <!-- 1. Coded Stage (Background Pattern) -->
        <div class="card-stage">
          <div class="stage-gradient"></div>
          <div class="stage-pattern"></div>
          
          <!-- 2. THE VACANT SLOT (As requested) -->
          <div class="vacant-slot">
            <div class="slot-marker">
               <svg viewBox="0 0 24 24" fill="none" class="plus-icon">
                 <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
               </svg>
               <span>IMAGE SLOT</span>
            </div>
            <div class="slot-glow"></div>
          </div>
        </div>

        <!-- 3. Coded Info Skeleton -->
        <div class="skeleton-panel">
          <div class="skeleton-tag"></div>
          <div class="skeleton-title"></div>
          <div class="skeleton-text"></div>
          <div class="skeleton-text short"></div>

          <div class="skeleton-footer">
            <div class="skeleton-btn"></div>
          </div>
        </div>

        <!-- 4. Mouse Follower Glow -->
        <div class="mouse-glow" [style.left.px]="mouseX" [style.top.px]="mouseY"></div>
      </div>
    </div>
  `,
    styles: [`
    :host {
      display: block;
      perspective: 1500px;
    }

    .blank-card {
      position: relative;
      width: 100%;
      aspect-ratio: 4/5;
      padding-top: 20px;
    }

    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      background: #050810;
      border-radius: 32px;
      border: 1px dashed rgba(255, 255, 255, 0.1);
      overflow: hidden;
      transform-style: preserve-3d;
      transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    /* Stage */
    .card-stage {
      position: relative;
      height: 60%;
      width: 100%;
      background: #020612;
    }

    .stage-pattern {
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(0, 102, 255, 0.05) 1px, transparent 1px);
      background-size: 25px 25px;
    }

    /* The Vacant Slot - Focus Area */
    .vacant-slot {
      position: absolute;
      inset: 40px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.02);
      border: 2px dashed rgba(0, 102, 255, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translateZ(50px); /* Significant depth */
    }

    .slot-marker {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      color: rgba(0, 102, 255, 0.4);
      font-weight: 900;
      letter-spacing: 3px;
      font-size: 0.7rem;
    }

    .plus-icon {
      width: 32px;
      height: 32px;
      opacity: 0.5;
    }

    .slot-glow {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, rgba(0, 102, 255, 0.05) 0%, transparent 80%);
      animation: heartbeat 3s infinite ease-in-out;
    }

    /* Skeleton UI */
    .skeleton-panel {
      padding: 35px;
      height: 40%;
      background: rgba(5, 8, 16, 0.9);
      display: flex;
      flex-direction: column;
      gap: 15px;
      transform: translateZ(30px);
    }

    .skeleton-tag { width: 80px; height: 20px; background: rgba(0, 102, 255, 0.1); border-radius: 10px; }
    .skeleton-title { width: 60%; height: 32px; background: rgba(255, 255, 255, 0.05); border-radius: 6px; }
    .skeleton-text { width: 100%; height: 14px; background: rgba(255, 255, 255, 0.03); border-radius: 4px; }
    .skeleton-text.short { width: 70%; }
    .skeleton-btn { width: 140px; height: 44px; background: rgba(0, 102, 255, 0.1); border-radius: 100px; margin-top: auto;}

    /* Interactive Lighting */
    .mouse-glow {
      position: absolute;
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%);
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 10;
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .blank-card:hover .mouse-glow { opacity: 1; }

    @keyframes heartbeat {
      0%, 100% { transform: scale(1); opacity: 0.3; }
      50% { transform: scale(1.1); opacity: 0.6; }
    }
  `]
})
export class BlankCardComponent {
    mouseX = 0;
    mouseY = 0;
    transformStyle = '';

    onMouseMove(event: MouseEvent): void {
        const card = event.currentTarget as HTMLElement;
        const rect = card.getBoundingClientRect();
        this.mouseX = event.clientX - rect.left;
        this.mouseY = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (this.mouseY - centerY) / 20;
        const rotateY = (centerX - this.mouseX) / 20;

        this.transformStyle = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    onMouseLeave(): void {
        this.transformStyle = 'rotateX(0) rotateY(0)';
    }
}
