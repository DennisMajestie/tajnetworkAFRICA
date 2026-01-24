import { Component, Input, AfterViewInit, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { TypewriterDirective } from '../../directives/typewriter.directive';
import { ParallaxDirective } from '../../directives/parallax.directive';
import { HeroData } from '../../../core/models/types';

@Component({
  selector: 'app-hero-block',
  standalone: true,
  imports: [CommonModule, TypewriterDirective, ParallaxDirective],
  template: `
    <div class="hero" [class]="'hero--' + (data.layout || 'centered')">
      <!-- Decorative Shapes Background Layer -->
      <div class="hero-shapes">
        <img src="assets/images/shapes/main-slider-shape-2.png" 
             alt="" class="shape shape-1" appParallax [parallaxSpeed]="0.12">
        <img src="assets/images/shapes/main-slider-shape-4.png" 
             alt="" class="shape shape-2" appParallax [parallaxSpeed]="-0.08">
        <img src="assets/images/shapes/main-slider-three-shape-5.png" 
             alt="" class="shape shape-3" appParallax [parallaxSpeed]="0.15">
        <img src="assets/images/shapes/about-five-shape-1.png" 
             alt="" class="shape shape-4" appParallax [parallaxSpeed]="-0.1">
      </div>

      <!-- Animated Background Orbs -->
      <div class="bg-orbs">
        <div class="orb orb-1" appParallax [parallaxSpeed]="0.2"></div>
        <div class="orb orb-2" appParallax [parallaxSpeed]="-0.3"></div>
        <div class="orb orb-3" appParallax [parallaxSpeed]="0.15"></div>
      </div>

      <!-- Accent Circles -->
      <div class="accent-circles">
        <div class="accent-circle accent-circle-1"></div>
        <div class="accent-circle accent-circle-2"></div>
        <div class="accent-circle accent-circle-3"></div>
      </div>
      
      <!-- Video/Image Background -->
      <div class="hero__bg">
        <video *ngIf="data.backgroundVideo" 
               [src]="data.backgroundVideo" 
               autoplay muted loop playsinline 
               class="hero__video"></video>
        <img *ngIf="!data.backgroundVideo" 
             [src]="data.backgroundImage || 'assets/images/backgrounds/slider-1-1.jpg'" 
             alt="" class="hero__img">
        <div class="hero__overlay"></div>
      </div>

      <!-- Grid Pattern -->
      <div class="bg-grid-overlay"></div>

      <!-- Africa Map Background -->
      <div class="africa-map-bg">
        <img src="assets/images/backgrounds/africa-map.png" alt="" class="africa-map-img">
      </div>

      <!-- Africa Web Sketch Background (Light Mode) -->
      <div class="africa-web-sketch">
        <img src="assets/images/backgrounds/africa-web-sketch.png" alt="" class="africa-web-sketch-img">
      </div>

      <!-- Gradient Mesh Overlay -->
      <div class="gradient-mesh"></div>

      <!-- Floating Code Cards (Terminal Style) -->
      <div class="floating-code">
        <div class="code-card code-card-1">
          <div class="code-card__header">
            <span class="code-card__dot code-card__dot--red"></span>
            <span class="code-card__dot code-card__dot--yellow"></span>
            <span class="code-card__dot code-card__dot--green"></span>
            <span class="code-card__title">terminal</span>
          </div>
          <code class="code-card__content">const <span class="code-highlight">innovation</span> = (idea) => reality;</code>
        </div>
        <div class="code-card code-card-2">
          <div class="code-card__header">
            <span class="code-card__dot code-card__dot--red"></span>
            <span class="code-card__dot code-card__dot--yellow"></span>
            <span class="code-card__dot code-card__dot--green"></span>
            <span class="code-card__title">app.ts</span>
          </div>
          <code class="code-card__content">await <span class="code-highlight">deploy</span>(client.vision);</code>
        </div>
        <div class="code-card code-card-3">
          <div class="code-card__header">
            <span class="code-card__dot code-card__dot--red"></span>
            <span class="code-card__dot code-card__dot--yellow"></span>
            <span class="code-card__dot code-card__dot--green"></span>
            <span class="code-card__title">success.js</span>
          </div>
          <code class="code-card__content"><span class="code-comment">// Building Africa's Digital Future</span></code>
        </div>
      </div>

      <!-- Particle/Network Dots -->
      <div class="particle-field">
        <div class="particle" *ngFor="let i of [1,2,3,4,5,6,7,8]" [class]="'particle-' + i"></div>
      </div>

      <div class="container hero__container">
        <div class="hero-content">
          <!-- Tag -->
          <div class="hero-tag" *ngIf="data.tag">
            <span class="tag-dot"></span>
            {{ data.tag }}
          </div>

          <!-- Headline -->
          <h1 class="hero-headline" *ngIf="data.headline">
            <div class="headline-wrapper">
              <!-- Invisible placeholder to reserve space for the longest phrase -->
              <span class="placeholder-text">We Build Digital Experiences</span>
              <!-- Actual Typewriter -->
              <div class="typewriter-container">
                <span class="gradient-text" [appTypewriter]="typewriterPhrases" [speed]="50" [pause]="2500"></span><span class="headline-cursor"></span>
              </div>
            </div>
          </h1>
          
          <!-- Subheadline -->
          <p class="hero-subheadline" *ngIf="data.subheadline">{{ data.subheadline }}</p>
          
          <!-- CTA Buttons -->
          <div class="hero-actions" *ngIf="data.ctaButtons">
            <a *ngFor="let btn of data.ctaButtons"
               [href]="btn.url"
               [class]="'btn-' + (btn.style || 'primary')">
              {{ btn.text }}
              <svg *ngIf="btn.style === 'primary'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          
          <!-- Stats Section (Restored) -->
          <div class="hero-stats" *ngIf="data.stats && data.stats.length > 0">
            <div class="stat-item" *ngFor="let stat of data.stats">
              <div class="stat-value">
                <span class="count">{{ stat.value }}</span>
              </div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
          
          <!-- Trusted By -->
          <div class="trusted-by" *ngIf="data.trustedBy">
            <span class="trusted-label">Trusted by innovative teams</span>
            <div class="trusted-logos">
              <img *ngFor="let partner of data.trustedBy" [src]="partner.logo" [alt]="partner.name" class="trusted-logo">
            </div>
          </div>

          <!-- Tech Badges -->
          <div class="tech-badges" *ngIf="data.layout === 'centered'">
             <div class="tech-badges__list">
                <div class="tech-badge">
                   <img src="assets/images/brand/angular.png" alt="Angular">
                </div>
                <div class="tech-badge">
                   <img src="assets/images/brand/typescript.png" alt="TypeScript">
                </div>
                <div class="tech-badge">
                   <img src="assets/images/brand/node.png" alt="Node.js">
                </div>
                <div class="tech-badge">
                   <img src="assets/images/brand/python.png" alt="Python">
                </div>
                <div class="tech-badge">
                   <img src="assets/images/brand/php.png" alt="PHP">
                </div>
                <div class="tech-badge">
                   <img src="assets/images/brand/firebase.png" alt="Firebase">
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 450px 0 100px; /* Restored original asymmetrical padding */
      overflow: hidden;
      
      /* Reverted background logic */
      :host-context(.theme-light) & {
        background: #f8faff;
      }

      :host-context(.theme-light) .hero__overlay {
        background: radial-gradient(circle at 50% 50%, rgba(248, 250, 255, 0.1) 0%, rgba(248, 250, 255, 0.95) 100%);
      }

      :host-context(.theme-light) .hero-subheadline { color: #475569; }
      :host-context(.theme-light) .stat-value { color: var(--color-accent-blue); }
      :host-context(.theme-light) .stat-label { color: #64748b; }
      :host-context(.theme-light) .hero-stats { background: rgba(0, 102, 255, 0.03); border-color: rgba(0, 102, 255, 0.1); }
      :host-context(.theme-light) .trusted-label { color: #64748b; }
      :host-context(.theme-light) .trusted-logos { filter: grayscale(1) opacity(0.6); }
      :host-context(.theme-light) .hero-tag { background: rgba(0, 102, 255, 0.08); color: var(--color-accent-blue); border-color: rgba(0, 102, 255, 0.2); }
      :host-context(.theme-light) .tag-dot { background: var(--color-accent-blue); box-shadow: 0 0 10px rgba(0, 102, 255, 0.4); }
      :host-context(.theme-light) .shape { opacity: 0.05; }
      :host-context(.theme-light) .africa-web-sketch { opacity: 0.3; }
      :host-context(.theme-light) .btn-secondary { background: #ffffff; color: var(--color-accent-blue); border-color: #e2e8f0; &:hover { background: #f8faff; } }

      /* Mobile Responsiveness for Padding */
      @media (max-width: 768px) {
        padding: 140px 0 80px;
      }

      &--left {
        justify-content: flex-start;
        text-align: left;
        .hero-content { margin: 0; text-align: left; }
        .hero-actions { justify-content: flex-start; }
        .hero-stats { justify-content: flex-start; }
      }
    }

    /* Decorative Shapes */
    .hero-shapes {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 1;
      overflow: hidden;
    }

    .shape {
      position: absolute;
      opacity: 0.12;
      filter: blur(1px);
      animation: float 20s ease-in-out infinite;
    }

    .shape-1 {
      top: -10%;
      right: -5%;
      width: 50%;
      max-width: 600px;
      animation-delay: 0s;
    }

    .shape-2 {
      bottom: 10%;
      left: -10%;
      width: 45%;
      max-width: 500px;
      animation-delay: -5s;
      transform: rotate(180deg);
    }

    .shape-3 {
      top: 30%;
      right: 5%;
      width: 25%;
      max-width: 300px;
      opacity: 0.08;
      animation-delay: -10s;
    }

    .shape-4 {
      bottom: -5%;
      right: 20%;
      width: 20%;
      max-width: 250px;
      opacity: 0.1;
      animation-delay: -15s;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-30px) rotate(5deg); }
    }

    /* Animated Orbs */
    .bg-orbs {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
    }

    .orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
    }

    .orb-1 { width: 400px; height: 400px; background: rgba(99, 102, 241, 0.3); top: 10%; left: 15%; }
    .orb-2 { width: 350px; height: 350px; background: rgba(0, 208, 132, 0.25); bottom: 20%; right: 10%; }
    .orb-3 { width: 250px; height: 250px; background: rgba(59, 130, 246, 0.25); top: 50%; right: 30%; }

    /* Accent Circles */
    .accent-circles {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
    }

    .accent-circle {
      position: absolute;
      border-radius: 50%;
      filter: blur(100px);
      animation: pulse-glow 8s ease-in-out infinite alternate;
    }

    .accent-circle-1 {
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%);
      top: -20%;
      right: -10%;
      animation-delay: 0s;
    }

    .accent-circle-2 {
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(0, 208, 132, 0.2) 0%, transparent 70%);
      bottom: -15%;
      left: -5%;
      animation-delay: -3s;
    }

    .accent-circle-3 {
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
      top: 40%;
      left: 50%;
      transform: translateX(-50%);
      animation-delay: -6s;
    }

    @keyframes pulse-glow {
      0% { opacity: 0.4; transform: scale(1); }
      100% { opacity: 0.7; transform: scale(1.1); }
    }

    /* Background Styles */
    .hero__bg {
      position: absolute;
      inset: 0;
      z-index: -1;
    }

    .hero__video, .hero__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero__overlay {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 50% 50%, rgba(2, 12, 24, 0.4) 0%, rgba(2, 12, 24, 0.85) 100%);
      z-index: 1;
    }

    /* Grid Overlay */
    .bg-grid-overlay {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
      background-size: 60px 60px;
      z-index: 2;
      mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 70%);
    }

    /* Africa Map & Sketches */
    .africa-map-bg, .africa-web-sketch {
      position: absolute;
      inset: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      pointer-events: none;
      z-index: 1;
      overflow: hidden;
    }

    .africa-map-img {
      width: 70%;
      opacity: 0.4;
      mix-blend-mode: lighten;
      filter: drop-shadow(0 0 80px rgba(99, 102, 241, 0.4));
      animation: africa-pulse 8s ease-in-out infinite alternate;
      :host-context(.theme-light) & { display: none; }
    }

    .africa-web-sketch {
      display: none;
      opacity: 0.6;
      :host-context(.theme-light) & { display: flex; }
    }

    .africa-web-sketch-img { width: 70%; filter: brightness(1.2); }

    @keyframes africa-pulse {
      0% { opacity: 0.2; transform: scale(1); }
      100% { opacity: 0.35; transform: scale(1.02); }
    }

    /* Floating Code Cards */
    .floating-code {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 3;
      overflow: hidden;
      @media (max-width: 992px) { display: none; }
    }

    .code-card {
      position: absolute;
      background: rgba(15, 20, 30, 0.95);
      border: 1px solid rgba(99, 102, 241, 0.3);
      border-radius: 12px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(20px);
      animation: float-card 12s ease-in-out infinite;
      overflow: hidden;
    }

    .code-card__header {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 10px 14px;
      background: rgba(0, 0, 0, 0.4);
    }

    .code-card__dot {
      width: 10px; height: 10px; border-radius: 50%;
      &--red { background: #ff5f56; }
      &--yellow { background: #ffbd2e; }
      &--green { background: #27ca40; }
    }

    .code-card__title { margin-left: auto; font-size: 0.65rem; color: rgba(255, 255, 255, 0.4); text-transform: uppercase; }
    .code-card__content { display: block; padding: 16px 20px; font-family: monospace; font-size: 1rem; color: #e2e8f0; }
    .code-highlight { color: #6366f1; font-weight: 700; }
    .code-comment { color: #22c55e; font-style: italic; }

    .code-card-1 { top: 12%; left: 3%; animation-delay: 0s; }
    .code-card-2 { top: 20%; right: 5%; animation-delay: -4s; }
    .code-card-3 { bottom: 25%; left: 8%; animation-delay: -8s; }

    @keyframes float-card {
      0%, 100% { opacity: 0; transform: translateY(30px) scale(0.95); }
      15%, 85% { opacity: 1; transform: translateY(0) scale(1); }
      50% { opacity: 0.9; transform: translateY(-15px) scale(1.02); }
    }

    /* Content Styles */
    .hero-content {
      position: relative;
      z-index: 10;
      max-width: 900px;
      text-align: center;
      margin: 0 auto;
    }

    .hero-tag {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 10px 24px;
      background: rgba(99, 102, 241, 0.1);
      border: 1px solid rgba(99, 102, 241, 0.3);
      border-radius: 100px;
      color: #818cf8;
      font-size: 0.875rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 2rem;
    }

    .tag-dot { width: 8px; height: 8px; background: #6366f1; border-radius: 50%; box-shadow: 0 0 10px #6366f1; }

    .hero-headline {
      font-size: clamp(2.5rem, 8vw, 6rem);
      font-weight: 900;
      line-height: 1.1;
      margin-bottom: 2rem;
      letter-spacing: -0.02em;
      color: #fff;
    }

    .headline-wrapper { position: relative; display: inline-block; }
    .placeholder-text { opacity: 0; visibility: hidden; white-space: pre-wrap; font-family: 'JetBrains Mono', 'Fira Code', monospace !important; font-weight: 800 !important; }
    .typewriter-container { position: absolute; inset: 0; display: flex; justify-content: center; align-items: center; }

    .gradient-text {
      font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', monospace !important;
      font-weight: 800 !important;
      background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 0 20px rgba(56, 189, 248, 0.3));
      :host-context(.theme-light) & { 
        background: linear-gradient(135deg, #004a77 0%, #0066a5 100%); 
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        filter: none; 
      }
    }

    .headline-cursor { width: 3px; height: 1.1em; background: #38bdf8; display: inline-block; margin-left: 4px; animation: blink 1s step-end infinite; vertical-align: middle; }
    @keyframes blink { from, to { opacity: 1; } 50% { opacity: 0; } }

    .hero-subheadline { font-size: 1.25rem; color: rgba(255, 255, 255, 0.6); margin-bottom: 3rem; line-height: 1.8; }
    .hero-actions { display: flex; gap: 1.5rem; justify-content: center; margin-bottom: 4rem; }

    .btn-primary, .btn-secondary {
      padding: 16px 32px; border-radius: 12px; font-weight: 700; transition: all 0.3s ease; display: flex; align-items: center; gap: 10px;
    }

    .btn-primary { background: #6366f1; color: #fff; &:hover { background: #4f46e5; transform: translateY(-2px); } }
    .btn-secondary { background: rgba(255, 255, 255, 0.05); color: #fff; border: 1px solid rgba(255, 255, 255, 0.1); &:hover { background: rgba(255, 255, 255, 0.1); } }

    .hero-stats {
      display: flex; justify-content: center; gap: 4rem; padding: 3rem; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 2rem; backdrop-filter: blur(20px);
      @media (max-width: 640px) { flex-direction: column; gap: 2rem; }
    }

    .stat-value { font-size: 3rem; font-weight: 800; color: #fff; }
    .stat-label { font-size: 0.875rem; color: rgba(255, 255, 255, 0.5); text-transform: uppercase; letter-spacing: 1px; }

    /* Tech Badges */
    .tech-badges { margin-top: 4rem; }
    .tech-badges__list { display: flex; justify-content: center; gap: 2rem; opacity: 0.5; filter: grayscale(1); }
    .tech-badge img { height: 30px; }

    .particle-field { position: absolute; inset: 0; pointer-events: none; z-index: 2; }
    .particle { position: absolute; width: 4px; height: 4px; background: #6366f1; border-radius: 50%; opacity: 0; animation: particle-float 10s infinite; }
    @keyframes particle-float { 
      0% { transform: translate(0, 0); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translate(100px, -100px); opacity: 0; }
    }
  `]
})
export class HeroBlockComponent implements AfterViewInit, OnInit {
  @Input() data!: HeroData;
  @Input() animation: boolean = true;

  // Mouse parallax tracking
  private mouseX = 0;
  private mouseY = 0;
  private isMouseParallaxEnabled = true;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    // Disable mouse parallax on mobile
    this.isMouseParallaxEnabled = window.innerWidth > 768;
  }

  get typewriterPhrases(): string[] {
    const headline = this.data.headline?.trim() || '';
    if (headline.toLowerCase().includes('digital experiences')) {
      return [
        'We Build Digital Experiences',
        'We Design Your Future',
        'We Code Innovation',
        'We Scale Your Ambition'
      ];
    }
    return [headline];
  }

  ngAfterViewInit(): void {
    if (!this.animation) return;

    const root = this.el.nativeElement;

    // Initialize all animations
    this.initializeEntryAnimations(root);
    this.initializeFloatingCodeCards(root);
    this.initializeGradientOrbAnimations(root);
    this.initializeMagneticButtons(root);
    this.initializeMouseParallax(root);
  }

  /**
   * Entry animations timeline (existing)
   */
  private initializeEntryAnimations(root: HTMLElement): void {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    const tag = root.querySelector('.hero-tag');
    if (tag) tl.from(tag, { opacity: 0, y: -20, duration: 0.6 });

    const headline = root.querySelector('.hero-headline');
    if (headline) tl.from(headline, { opacity: 0, y: 30, duration: 0.8 }, '-=0.3');

    const subheadline = root.querySelector('.hero-subheadline');
    if (subheadline) tl.from(subheadline, { opacity: 0, y: 20, duration: 0.8 }, '-=0.4');

    const actions = root.querySelectorAll('.hero-actions a');
    if (actions.length > 0) {
      tl.fromTo(actions,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, stagger: 0.15 }, '-=0.4');
    }

    const statsSec = root.querySelector('.hero-stats');
    if (statsSec) {
      tl.from(statsSec, { opacity: 0, y: 30, duration: 0.8 }, '-=0.4')
        .add(() => this.animateStats(), '-=0.4');
    }

    const orbs = root.querySelectorAll('.orb');
    if (orbs.length > 0) {
      gsap.from(orbs, { opacity: 0, scale: 0.5, duration: 2, stagger: 0.2 });
    }
  }

  /**
   * Floating Code Cards with continuous animation
   */
  private initializeFloatingCodeCards(root: HTMLElement): void {
    const card1 = root.querySelector('.code-card-1');
    const card2 = root.querySelector('.code-card-2');
    const card3 = root.querySelector('.code-card-3');

    if (card1) {
      gsap.to(card1, {
        y: '-=20',
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      });
    }

    if (card2) {
      gsap.to(card2, {
        y: '+=15',
        rotation: '+=2',
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 1
      });
    }

    if (card3) {
      gsap.to(card3, {
        y: '-=25',
        duration: 3.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 2
      });
    }
  }

  /**
   * Enhanced gradient orb animations
   */
  private initializeGradientOrbAnimations(root: HTMLElement): void {
    const orbs = root.querySelectorAll('.bg-orbs .orb');

    orbs.forEach((orb, index) => {
      gsap.to(orb, {
        x: index % 2 === 0 ? '+=50' : '-=30',
        y: index % 2 === 0 ? '-=50' : '+=30',
        scale: index === 1 ? 1.1 : 0.9,
        duration: 20 + (index * 5),
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: index * -10
      });
    });
  }

  /**
   * Magnetic button hover effect
   */
  private initializeMagneticButtons(root: HTMLElement): void {
    const buttons = root.querySelectorAll('.btn-primary, .btn-secondary');

    buttons.forEach((button) => {
      const btn = button as HTMLElement;

      btn.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)'
        });
      });
    });
  }

  /**
   * Mouse parallax effect for code cards
   */
  private initializeMouseParallax(root: HTMLElement): void {
    if (!this.isMouseParallaxEnabled) return;

    const cards = root.querySelectorAll('.code-card');
    if (cards.length === 0) return;

    document.addEventListener('mousemove', (e: MouseEvent) => {
      this.mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
      this.mouseY = (e.clientY / window.innerHeight - 0.5) * 20;

      cards.forEach((card, index) => {
        const depth = (index + 1) * 0.5;
        gsap.to(card, {
          x: this.mouseX * depth,
          y: this.mouseY * depth,
          duration: 0.5,
          ease: 'power2.out'
        });
      });
    });
  }

  private animateStats(): void {
    const stats = this.el.nativeElement.querySelectorAll('.stat-item');
    stats.forEach((el: any) => {
      const countEl = el.querySelector('.count');
      if (!countEl) return;
      const originalText = countEl.textContent || '';
      const hasPlus = originalText.includes('+');
      const target = parseInt(originalText.replace(/\D/g, '')) || 0;
      const obj = { val: 0 };

      gsap.to(obj, {
        val: target,
        duration: 2.5,
        ease: 'power2.out',
        onUpdate: () => {
          countEl.textContent = Math.floor(obj.val).toString() + (hasPlus ? '+' : '');
        }
      });
    });
  }
}
