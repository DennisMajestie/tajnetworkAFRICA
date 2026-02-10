import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elite-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="elite-card" (mousemove)="onMouseMove($event)" (mouseleave)="onMouseLeave()">
      <div class="card-inner" [style.transform]="transformStyle">
        
        <!-- 1. The Stage (Coded Background) -->
        <div class="card-stage">
          <div class="corner-glow" [style.background]="'radial-gradient(circle at 85% 15%, ' + (accentColor || 'rgba(0, 102, 255, 0.25)') + ' 0%, transparent 60%)'"></div>
          <div class="stage-pattern"></div>
          
          <!-- 2. The Media Slot (Image injection) -->
          <div class="media-slot">
            <img *ngIf="image" [src]="image" [alt]="title" class="project-img">
            <div *ngIf="!image" class="media-placeholder">
               <span>IMAGE SLOT</span>
            </div>
          </div>
        </div>

        <!-- 3. The Info Panel (Coded Typography & Layout) -->
        <div class="info-panel">
          
          <h3 class="project-title">{{ title }}</h3>
          <p class="project-desc">{{ description }}</p>

          <div class="info-footer">
            <div class="footer-pills" *ngIf="tags && tags.length > 0">
              <span class="mini-pill" *ngFor="let tag of tags">{{ tag }}</span>
            </div>
            <div class="footer-pills" *ngIf="!tags || tags.length === 0">
              <span class="mini-pill">Innovation</span>
              <span class="mini-pill">Strategy</span>
              <span class="mini-pill">Design</span>
              <span class="mini-pill">Growth</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      perspective: 1200px;
    }

    .elite-card {
      position: relative;
      width: 100%;
      aspect-ratio: 3/3;
      padding-top: 20px;
    }

    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      background: transparent;
      border-radius: 28px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      overflow: hidden;
      transform-style: preserve-3d;
      transition: transform 0.15s ease-out;
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
    }

    /* 1. Stage Styling */
    .card-stage {
      position: relative;
      height: 60%;
      width: 100%;
      background: transparent;
      overflow: hidden;
    }

    .corner-glow {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .stage-pattern {
      position: absolute;
      inset: 0;
      background-image: 
        radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
      background-size: 20px 20px;
      opacity: 0.8;
    }

    /* 2. Media Slot Styling */
    .media-slot {
      position: absolute;
      inset: 10px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px dashed rgba(255, 255, 255, 0.2);
      display: flex;
      padding-top: 6px;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      transform: translateZ(30px);
    }

    .media-placeholder {
      color: rgba(255, 255, 255, 0.3);
      font-weight: 800;
      letter-spacing: 2px;
      font-size: 0.8rem;
    }

    .project-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      padding: 0;
      filter: brightness(1.2) contrast(1.1);
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }


    .info-panel {
      padding: 30px 18px 21px;
      height: 50%;
      display: flex;
      flex-direction: column;
      background: linear-gradient(to bottom, 
        transparent 0%, 
        rgba(15, 23, 42, 0.7) 15%, 
        rgba(15, 23, 42, 0.95) 40%,
        #020617 70%
      );
      transform: translateZ(40px);
      margin-top: -94px; /* Deep overlap to erase divider look */
      position: relative;
      z-index: 3;
    }

    .project-title {
      color: #fff;
       font-size: 1.5rem;
       font-weight: 800;
       margin-bottom: 18px;
       line-height: 1.1;
    }

    .project-desc {
      color: rgba(255, 255, 255, 0.5);
    font-size: 1.05em;
    line-height: 1.5;
    margin-bottom: 25px;
    }

    .info-footer {
      margin-top: auto;
    }

    .footer-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      transform: translateZ(20px);
    }

    .mini-pill {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.7);
      padding: 6px 16px;
      border-radius: 100px;
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.3);
        color: #fff;
        transform: translateY(-2px);
      }
    }



    /* Light Mode Adaptation */
    :host-context(.theme-light) .card-inner {
      background: #fff;
      border-color: rgba(0, 0, 0, 0.05);
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
    }
    :host-context(.theme-light) .project-title { color: #020b16ff; }
    :host-context(.theme-light) .project-desc { color: #475569; }
    :host-context(.theme-light) .info-panel {
      background: linear-gradient(to bottom, 
        transparent 0%, 
        rgba(255, 255, 255, 0.9) 15%, 
        #ffffff 40%
      );
    }

    :host-context(.theme-light) .mini-pill {
      background: rgba(0, 102, 255, 0.05);
      border-color: rgba(0, 102, 255, 0.1);
      color: #0c152a; /* Solid Dark */
    }

    :host-context(.theme-light) .mini-pill:hover {
      background: #0e5d9eff;
      color: #fff;
    }
  `]
})
export class EliteCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() accentColor: string = '';
  @Input() tags: string[] = [];

  mouseX = 0;
  mouseY = 0;
  transformStyle = '';
  imageTransform = 'scale(1)';

  onMouseMove(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    this.mouseX = event.clientX - rect.left;
    this.mouseY = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (this.mouseY - centerY) / 15;
    const rotateY = (centerX - this.mouseX) / 15;

    this.transformStyle = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    this.imageTransform = 'scale(1.05)';
  }

  onMouseLeave(): void {
    this.transformStyle = 'rotateX(0) rotateY(0)';
    this.imageTransform = 'scale(1)';
  }
}
