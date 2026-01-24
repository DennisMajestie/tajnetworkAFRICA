import { Component, OnInit, OnDestroy, Renderer2, HostListener, ElementRef, AfterViewInit } from '@angular/core';

/**
 * Premium Magnetic Cursor Component for Taj Network Africa
 * 
 * Features:
 * - Dual-element cursor system (instant dot + spring-physics ring)
 * - Magnetic pull effect on interactive elements
 * - Context-aware states (default, link, button)
 * - Canvas-based particle trail system
 * - 60fps performance target
 * 
 * Customization:
 * - Adjust springStiffness (0.15) for response speed
 * - Adjust springDamping (0.7) for bounce control
 * - Adjust magneticStrength (0.3) for pull force
 */

interface Particle {
  x: number;
  y: number;
  size: number;
  life: number;
  maxLife: number;
  vx: number;
  vy: number;
  color: string;
}

@Component({
  selector: 'taj-custom-cursor',
  standalone: true,
  template: `
    <div class="taj-cursor" #cursorContainer>
      <div class="taj-cursor__dot" #dot></div>
      <div class="taj-cursor__ring" #ring></div>
    </div>
    <canvas class="taj-cursor__trail" #trailCanvas></canvas>
  `,
  styles: [`
    /* Hide default cursor globally */
    :host ::ng-deep body,
    :host ::ng-deep a,
    :host ::ng-deep button,
    :host ::ng-deep [role="button"],
    :host ::ng-deep input,
    :host ::ng-deep textarea {
      cursor: none !important;
    }

    /* Cursor Container */
    .taj-cursor {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
    }

    /* Cursor Dot (Inner Element) */
    .taj-cursor__dot {
      position: fixed;
      width: 8px;
      height: 8px;
      background: #00d084; /* Taj Emerald */
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                  height 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                  background 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 0 15px rgba(0, 208, 132, 0.6);
      z-index: 10001;
    }

    /* Cursor Ring (Outer Element) */
    .taj-cursor__ring {
      position: fixed;
      width: 40px;
      height: 40px;
      border: 2px solid rgba(0, 208, 132, 0.5);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                  height 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                  border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                  background 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 10000;
    }

    /* Link Hover State */
    .taj-cursor--link .taj-cursor__dot {
      width: 16px;
      height: 16px;
      background: #d4a574; /* Taj Gold */
      box-shadow: 0 0 20px rgba(212, 165, 116, 0.8);
    }

    .taj-cursor--link .taj-cursor__ring {
      width: 60px;
      height: 60px;
      background: rgba(212, 165, 116, 0.1);
      border-color: rgba(212, 165, 116, 0.6);
    }

    /* Button Hover State */
    .taj-cursor--button .taj-cursor__dot {
      width: 20px;
      height: 20px;
      background: #0066ff; /* Taj Blue */
      box-shadow: 0 0 25px rgba(0, 102, 255, 0.9);
    }

    .taj-cursor--button .taj-cursor__ring {
      width: 70px;
      height: 70px;
      background: rgba(0, 102, 255, 0.15);
      border-color: rgba(0, 102, 255, 0.7);
      box-shadow: 0 0 30px rgba(0, 102, 255, 0.4);
    }

    /* Particle Trail Canvas */
    .taj-cursor__trail {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9998;
    }

    /* Mobile: Hide cursor and restore default */
    @media (max-width: 1024px) {
      .taj-cursor,
      .taj-cursor__trail {
        display: none !important;
      }

      :host ::ng-deep body,
      :host ::ng-deep a,
      :host ::ng-deep button,
      :host ::ng-deep [role="button"],
      :host ::ng-deep input,
      :host ::ng-deep textarea {
        cursor: auto !important;
      }
    }

    /* Reduced Motion: Hide cursor */
    @media (prefers-reduced-motion: reduce) {
      .taj-cursor,
      .taj-cursor__trail {
        display: none !important;
      }

      :host ::ng-deep body,
      :host ::ng-deep a,
      :host ::ng-deep button {
        cursor: auto !important;
      }
    }
  `]
})
export class CustomCursorComponent implements OnInit, AfterViewInit, OnDestroy {
  // DOM References
  private dot!: HTMLElement;
  private ring!: HTMLElement;
  private cursorContainer!: HTMLElement;
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;

  // Position Tracking
  private mouseX = 0;
  private mouseY = 0;
  private dotX = 0;
  private dotY = 0;
  private ringX = 0;
  private ringY = 0;

  // Spring Physics Parameters
  private ringVelocityX = 0;
  private ringVelocityY = 0;
  private readonly springStiffness = 0.15;
  private readonly springDamping = 0.7;

  // Magnetic Effect
  private readonly magneticStrength = 0.3;
  private readonly magneticRadius = 100;

  // Particle System
  private particles: Particle[] = [];
  private readonly maxParticles = 15;
  private readonly particleColors = ['#00d084', '#d4a574', '#0066ff'];
  private lastParticleTime = 0;
  private readonly particleSpawnDelay = 30; // ms between particles

  // Animation
  private animationFrameId!: number;
  private isInitialized = false;

  // Device Detection
  private isMobile = false;
  private isTouchDevice = false;
  private prefersReducedMotion = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    // Device and accessibility checks
    this.isMobile = window.innerWidth <= 1024;
    this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Don't initialize on mobile, touch devices, or if user prefers reduced motion
    if (this.isMobile || this.isTouchDevice || this.prefersReducedMotion) {
      this.restoreDefaultCursor();
      return;
    }
  }

  ngAfterViewInit(): void {
    if (this.isMobile || this.isTouchDevice || this.prefersReducedMotion) {
      return;
    }

    this.initializeCursor();
    this.initializeCanvas();
    this.startAnimation();
    this.isInitialized = true;
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.restoreDefaultCursor();
  }

  /**
   * Initialize cursor DOM elements
   */
  private initializeCursor(): void {
    const container = this.el.nativeElement;
    this.dot = container.querySelector('.taj-cursor__dot') as HTMLElement;
    this.ring = container.querySelector('.taj-cursor__ring') as HTMLElement;
    this.cursorContainer = container.querySelector('.taj-cursor') as HTMLElement;

    if (!this.dot || !this.ring || !this.cursorContainer) {
      console.error('Taj Cursor: Failed to initialize cursor elements');
      return;
    }

    // Set initial positions
    this.mouseX = this.dotX = this.ringX = window.innerWidth / 2;
    this.mouseY = this.dotY = this.ringY = window.innerHeight / 2;
  }

  /**
   * Initialize canvas for particle trail
   */
  private initializeCanvas(): void {
    const container = this.el.nativeElement;
    this.canvas = container.querySelector('.taj-cursor__trail') as HTMLCanvasElement;

    if (!this.canvas) {
      console.error('Taj Cursor: Failed to initialize canvas');
      return;
    }

    this.ctx = this.canvas.getContext('2d')!;
    this.resizeCanvas();
  }

  /**
   * Resize canvas to match window size
   */
  private resizeCanvas(): void {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  /**
   * Start animation loop
   */
  private startAnimation(): void {
    const animate = () => {
      this.updateCursorPosition();
      this.updateParticles();
      this.renderTrail();
      this.animationFrameId = requestAnimationFrame(animate);
    };
    animate();
  }

  /**
   * Update cursor position with spring physics
   */
  private updateCursorPosition(): void {
    if (!this.dot || !this.ring) return;

    // Dot follows instantly
    this.dotX = this.mouseX;
    this.dotY = this.mouseY;

    // Ring follows with spring physics
    const dx = this.mouseX - this.ringX;
    const dy = this.mouseY - this.ringY;

    // Apply spring force
    const forceX = dx * this.springStiffness;
    const forceY = dy * this.springStiffness;

    // Update velocity with damping
    this.ringVelocityX += forceX;
    this.ringVelocityY += forceY;
    this.ringVelocityX *= this.springDamping;
    this.ringVelocityY *= this.springDamping;

    // Update position
    this.ringX += this.ringVelocityX;
    this.ringY += this.ringVelocityY;

    // Apply to DOM
    this.renderer.setStyle(this.dot, 'left', `${this.dotX}px`);
    this.renderer.setStyle(this.dot, 'top', `${this.dotY}px`);
    this.renderer.setStyle(this.ring, 'left', `${this.ringX}px`);
    this.renderer.setStyle(this.ring, 'top', `${this.ringY}px`);
  }

  /**
   * Update particle positions and lifetimes
   */
  private updateParticles(): void {
    this.particles = this.particles.filter(p => {
      p.life -= 0.016; // Approximately 1 frame at 60fps
      p.x += p.vx;
      p.y += p.vy;
      p.vy -= 0.1; // Upward float
      return p.life > 0;
    });
  }

  /**
   * Render particle trail on canvas
   */
  private renderTrail(): void {
    if (!this.ctx || !this.canvas) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach(p => {
      this.ctx.save();
      this.ctx.globalAlpha = p.life / p.maxLife;
      this.ctx.fillStyle = p.color;
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = p.color;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    });
  }

  /**
   * Add a new particle to the trail
   */
  private addParticle(x: number, y: number): void {
    // Limit particle count
    const maxCount = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4 ? 8 : this.maxParticles;

    if (this.particles.length >= maxCount) {
      return;
    }

    // Throttle particle spawning
    const now = Date.now();
    if (now - this.lastParticleTime < this.particleSpawnDelay) {
      return;
    }
    this.lastParticleTime = now;

    const particle: Particle = {
      x,
      y,
      size: 2 + Math.random(),
      life: 0.8,
      maxLife: 0.8,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      color: this.particleColors[Math.floor(Math.random() * this.particleColors.length)]
    };

    this.particles.push(particle);
  }

  /**
   * Check for magnetic pull and update cursor state
   */
  private checkMagneticPull(event: MouseEvent): void {
    if (!this.cursorContainer) return;

    const target = event.target as HTMLElement;
    const isInteractive = target.closest('a, button, [role="button"], .service-card, .portfolio-card, .team-card, .blog-card');

    if (isInteractive) {
      const element = isInteractive as HTMLElement;
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = centerX - event.clientX;
      const dy = centerY - event.clientY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Apply magnetic pull if within radius
      if (distance < this.magneticRadius) {
        this.mouseX += dx * this.magneticStrength;
        this.mouseY += dy * this.magneticStrength;
      }

      // Update cursor state based on element type
      if (element.matches('button, [role="button"], .btn-primary, .btn-secondary')) {
        this.cursorContainer.classList.add('taj-cursor--button');
        this.cursorContainer.classList.remove('taj-cursor--link');
      } else {
        this.cursorContainer.classList.add('taj-cursor--link');
        this.cursorContainer.classList.remove('taj-cursor--button');
      }
    } else {
      // Reset to default state
      this.cursorContainer.classList.remove('taj-cursor--link', 'taj-cursor--button');
    }
  }

  /**
   * Restore default cursor (for mobile/accessibility)
   */
  private restoreDefaultCursor(): void {
    document.body.style.cursor = 'auto';
    const elements = document.querySelectorAll('a, button, [role="button"], input, textarea');
    elements.forEach(el => {
      (el as HTMLElement).style.cursor = 'auto';
    });
  }

  /**
   * Mouse move event handler
   */
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isInitialized) return;

    this.mouseX = event.clientX;
    this.mouseY = event.clientY;

    // Check for magnetic pull and state changes
    this.checkMagneticPull(event);

    // Add particle trail
    this.addParticle(event.clientX, event.clientY);
  }

  /**
   * Window resize event handler
   */
  @HostListener('window:resize')
  onResize(): void {
    if (!this.isInitialized) return;
    this.resizeCanvas();

    // Check if resized to mobile
    if (window.innerWidth <= 1024) {
      this.isMobile = true;
      this.ngOnDestroy();
      this.restoreDefaultCursor();
    }
  }
}
