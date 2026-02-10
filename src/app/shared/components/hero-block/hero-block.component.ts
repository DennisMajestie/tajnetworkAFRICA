import { Component, Input, AfterViewInit, ElementRef, OnInit, ViewChild, OnDestroy, CUSTOM_ELEMENTS_SCHEMA, afterNextRender } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { gsap } from 'gsap';
import { TypewriterDirective } from '../../directives/typewriter.directive';
import { ParallaxDirective } from '../../directives/parallax.directive';
import { HeroData } from '../../../core/models/types';
// Swiper register is now handled globally in main.ts

@Component({
  selector: 'app-hero-block',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TypewriterDirective, ParallaxDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="hero" [class]="'hero--' + (data.layout || 'centered')" #container>
      <!-- 3D Background Canvas Disabled to remove tint -->
      <!-- <canvas #canvas class="three-canvas"></canvas> -->

      <!-- TAJ Grid Overlay -->
      <div class="taj-grid-overlay"></div>

      <!-- Decorative Shapes Background Layer -->
      <div class="hero-shapes">
        <img ngSrc="assets/images/shapes/main-slider-shape-2.png" 
             alt="" class="shape shape-1" appParallax [parallaxSpeed]="0.12" width="600" height="600">
        <img ngSrc="assets/images/shapes/main-slider-shape-4.png" 
             alt="" class="shape shape-2" appParallax [parallaxSpeed]="-0.08" width="500" height="500">
        <img ngSrc="assets/images/shapes/main-slider-three-shape-5.png" 
             alt="" class="shape shape-3" appParallax [parallaxSpeed]="0.15" width="300" height="300">
        <img ngSrc="assets/images/shapes/about-five-shape-1.png" 
             alt="" class="shape shape-4" appParallax [parallaxSpeed]="-0.1" width="250" height="250">
      </div>

      <!-- Orbs and Circles Disabled to remove tint -->
      <!-- <div class="bg-orbs">...</div> -->
      <!-- <div class="accent-circles">...</div> -->
      <!-- Video/Image Background / Slider -->
      <div class="hero__bg">
        <video *ngIf="data.backgroundVideo" 
               [src]="data.backgroundVideo" 
               autoplay muted loop playsinline 
               class="hero__video"></video>
        
        <!-- Swiper Slider -->
        <swiper-container *ngIf="!data.backgroundVideo && data.sliderImages && data.sliderImages.length > 0"
                         init="false"
                         class="hero__slider"
                         navigation="true"
                         pagination="true"
                         #swiperRef>
          <swiper-slide *ngFor="let img of data.sliderImages; let first = first">
            <img [ngSrc]="img" alt="" class="hero__img" fill [priority]="first">
          </swiper-slide>
        </swiper-container>

        <!-- Static Background Image (Fallback) -->
        <img *ngIf="!data.backgroundVideo && (!data.sliderImages || data.sliderImages.length === 0) && data.backgroundImage" 
             [ngSrc]="data.backgroundImage" 
             alt="" class="hero__img" fill priority>
      </div>

      <!-- Grid Pattern -->
      <div class="bg-grid-overlay"></div>

      <!-- Africa Map Background -->
      <div class="africa-map-bg" *ngIf="!data.sliderImages || data.sliderImages.length === 0">
        <img ngSrc="assets/images/taj/map-bg2.jpg" alt="" class="africa-map-img" fill>
      </div>

      <!-- Main Dark Overlay for Text Visibility -->
      <div class="hero__overlay--v2"></div>



      <!-- No Overlay -->

      <!-- Floating Code Cards (Terminal Style) -->
      <div class="floating-code">
        <div class="code-card code-card-1">
          <div class="code-card__header">
            <span class="code-card__dot code-card__dot--red"></span>
            <span class="code-card__dot code-card__dot--yellow"></span>
            <span class="code-card__dot code-card__dot--purple"></span>
            <span class="code-card__title">terminal</span>
          </div>
          <code class="code-card__content">const <span class="code-highlight">innovation</span> = (idea) => reality;</code>
        </div>
        <div class="code-card code-card-2">
          <div class="code-card__header">
            <span class="code-card__dot code-card__dot--red"></span>
            <span class="code-card__dot code-card__dot--yellow"></span>
            <span class="code-card__dot code-card__dot--purple"></span>
            <span class="code-card__title">app.ts</span>
          </div>
          <code class="code-card__content">await <span class="code-highlight">deploy</span>(client.vision);</code>
        </div>
        <div class="code-card code-card-3">
          <div class="code-card__header">
            <span class="code-card__dot code-card__dot--red"></span>
            <span class="code-card__dot code-card__dot--yellow"></span>
            <span class="code-card__dot code-card__dot--purple"></span>
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
              <img *ngFor="let partner of data.trustedBy" [ngSrc]="partner.logo" [alt]="partner.name" class="trusted-logo" width="120" height="40">
            </div>
          </div>

          <!-- Tech Badges -->
          <div class="tech-badges" *ngIf="data.layout === 'centered'">
             <div class="tech-badges__list">
                <div class="tech-badge taj-floating">
                   <img ngSrc="assets/images/brand/angular.png" alt="Angular" width="30" height="30">
                </div>
                <div class="tech-badge taj-floating" style="animation-delay: -1s">
                   <img ngSrc="assets/images/brand/typescript.png" alt="TypeScript" width="30" height="30">
                </div>
                <div class="tech-badge taj-floating" style="animation-delay: -2s">
                   <img ngSrc="assets/images/brand/node.png" alt="Node.js" width="30" height="30">
                </div>
                <div class="tech-badge taj-floating" style="animation-delay: -3s">
                   <img ngSrc="assets/images/brand/python.png" alt="Python" width="30" height="30">
                </div>
                <div class="tech-badge taj-floating" style="animation-delay: -4s">
                   <img ngSrc="assets/images/brand/php.png" alt="PHP" width="30" height="30">
                </div>
                <div class="tech-badge taj-badge taj-floating" style="animation-delay: -5s">
                   <img ngSrc="assets/images/brand/firebase.png" alt="Firebase" width="30" height="30">
                </div>
             </div>
          </div>
        </div>
      </div>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 90vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 450px 20px 350px;
      overflow: hidden;
      /* Reverted background logic */
      :host-context(.theme-light) & {
        background: transparent;
      }

      .three-canvas {
        position: absolute;
        inset: 0;
        z-index: 1;
        pointer-events: none;
      }

      :host-context(.theme-light) .hero__overlay--v2 {
        background: linear-gradient(to bottom, rgb(0 0 0 / 38%) 0%, rgb(2 12 24 / 77%) 100%);
        // background: linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, rgba(2, 12, 24, 0.9) 100%);
      }
      :host-context(.theme-light) .africa-map-img { opacity: 0.7; }
      :host-context(.theme-light) .btn-secondary { background: #ffffff; color: var(--color-accent-blue); border-color: #e2e8f0; &:hover { background: #f8faff; } }

      /* Mobile Responsiveness for Padding */
      @media (max-width: 768px) {
        padding: clamp(120px, 15vh, 140px) 0 clamp(60px, 10vh, 80px);
      }

      &--left {
        justify-content: flex-start;
        text-align: left;
        .hero-content { margin: 0; text-align: left; }
        .hero-actions { justify-content: flex-start; }
        .hero-stats { justify-content: flex-start; }
      }
    }    /* Decorative Shapes */
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

    .orb-1 { width: 400px; height: 400px; background: rgba(0, 102, 255, 0.2); top: 10%; left: 15%; }
    .orb-2 { width: 350px; height: 350px; background: rgba(0, 74, 120, 0.15); bottom: 20%; right: 10%; }
    .orb-3 { width: 250px; height: 250px; background: rgba(0, 102, 255, 0.15); top: 50%; right: 30%; }

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
      background: radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%);
      top: -20%;
      right: -10%;
      animation-delay: 0s;
    }

    .accent-circle-2 {
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(0, 74, 120, 0.1) 0%, transparent 70%);
      bottom: -15%;
      left: -5%;
      animation-delay: -3s;
    }

    .accent-circle-3 {
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(0, 102, 255, 0.1) 0%, transparent 70%);
      top: 40%;
      left: 50%;
      transform: translateX(-50%);
      animation-delay: -6s;
    }

    @keyframes pulse-glow {
      0% { opacity: 0.4; transform: scale(1); }
      100% { opacity: 0.7; transform: scale(1.1); }
    }
    .hero__bg {
      position: absolute;
      inset: 0;
      z-index: 1; /* Moved up to be above orbs but below overlay */
    }

    .hero__video, .hero__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero__overlay--v2 {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, 
        rgba(2, 12, 24, 0.85) 0%, 
        rgba(2, 12, 24, 0.95) 50%, 
        rgba(2, 12, 24, 0.99) 100%
      );
      z-index: 5; /* Above map and background, below content */
      pointer-events: none;
    }
    .bg-grid-overlay {
      display: block;
      position: absolute;
      inset: 0;
      background-image: linear-gradient(rgba(0, 102, 255, 0.05) 1px, transparent 1px);
      background-size: 100% 3px;
      z-index: 2;
      pointer-events: none;
      opacity: 0.3;
      animation: scanline 10s linear infinite;
    }

    @keyframes scanline {
      0% { transform: translateY(0); }
      100% { transform: translateY(100%); }
    }

    /* Africa Map & Sketches */
    .africa-map-bg {
      position: absolute;
      inset: 0;
      z-index: 1;
      pointer-events: none;
      overflow: hidden;
    }

    .africa-map-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 1; /* Show true colors */
      mix-blend-mode: normal;
      filter: none;
      animation: africa-pulse 12s ease-in-out infinite alternate;
      
      :host-context(.theme-light) & { 
        opacity: 1;
      }
    }

    .africa-web-sketch {
      display: none;
      opacity: 0.8;
      :host-context(.theme-light) & { display: flex; }
    }

    .africa-web-sketch-img { width: 70%; filter: brightness(1.2); }

    @keyframes africa-pulse {
      0% { opacity: 0.9; transform: scale(1); }
      100% { opacity: 1; transform: scale(1.08); }
    }

    /* Floating Code Cards */
    .floating-code {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 15; /* Increased to stay above all overlays */
      overflow: hidden;
      @media (max-width: 768px) { display: none; } /* Relaxed from 992px */
    }

    .code-card {
      position: absolute;
      background: var(--taj-glass-bg);
      border: 1px solid var(--taj-glass-border);
      border-radius: 12px;
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 102, 255, 0.2); /* Enhanced glow */
      backdrop-filter: blur(12px);
      animation: float-card 12s ease-in-out infinite;
      overflow: hidden;
      background: rgba(15, 23, 42, 0.8) !important; /* Force visibility with slightly lighter dark background */
      border: 1px solid rgba(255, 255, 255, 0.2) !important;
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
      &--purple { background: #6f42c1; }
    }

    .code-card__title { margin-left: auto; font-size: 0.7rem; color: rgba(255, 255, 255, 0.6); text-transform: uppercase; font-weight: 700; }
    .code-card__content { 
      display: block; 
      padding: 16px 20px; 
      font-family: 'JetBrains Mono', monospace; 
      font-size: 1.05rem;
      color: #ffffff; 
      font-weight: 600;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
      letter-spacing: 0.02em;
    }
    .code-highlight { color: #00d4ff; font-weight: 800; text-shadow: 0 0 10px rgba(0, 212, 255, 0.3); }
    .code-comment { color: #64748b; font-style: italic; opacity: 0.8; }

    .code-card-1 { top: 20%; left: 3%; animation-delay: 0s; }
    .code-card-2 { top: 25%; right: 3%; animation-delay: -4s; }
    .code-card-3 { bottom: 15%; left: 4%; animation-delay: -8s; }

    @keyframes float-card {
      0%, 100% { opacity: 0; transform: translateY(30px) scale(0.95); }
      10%, 90% { opacity: 1; transform: translateY(0) scale(1); } /* Longer visible phase */
      50% { opacity: 1; transform: translateY(-15px) scale(1.05); }
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
      background: rgba(255, 255, 255, 0.15); /* Lightened for contrast */
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 100px;
      color: #fff; /* Switched to white for best visibility */
      font-size: 0.875rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 2rem;
      backdrop-filter: blur(10px);
    }

    .tag-dot { width: 8px; height: 8px; background: #38bdf8; border-radius: 50%; box-shadow: 0 0 10px #38bdf8; }

    .hero-headline {
      font-size: clamp(2.5rem, 8vw, 6rem);
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 2rem;
      letter-spacing: -0.02em;
      color: #fff;
      font-family: var(--font-heading);
      text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }

    .headline-wrapper { position: relative; display: inline-block; }
    .placeholder-text { opacity: 0; visibility: hidden; white-space: pre-wrap; font-family: 'JetBrains Mono', 'Fira Code', monospace !important; font-weight: 900 !important; }
    .typewriter-container { position: absolute; inset: 0; display: flex; justify-content: center; align-items: center; }

    .gradient-text {
      font-family: var(--font-heading) !important;
      font-weight: 800 !important;
      background: linear-gradient(to bottom, #fff 50%, #e2e8f0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 0 30px rgba(0, 74, 120, 0.5));
      
      /* Overriding light mode text to keep it white/readable on the map */
      :host-context(.theme-light) & { 
        background: linear-gradient(to bottom, #fff 50%, #e2e8f0 100%); 
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        filter: drop-shadow(0 0 30px rgba(0, 0, 0, 0.3));
      }
    }

    .headline-cursor { width: 3px; height: 1.1em; background: #38bdf8; display: inline-block; margin-left: 4px; animation: blink 1s step-end infinite; vertical-align: middle; }
    @keyframes blink { from, to { opacity: 1; } 50% { opacity: 0; } }

    .hero-subheadline { 
      font-size: 1.25rem;
      color: rgba(255, 255, 255, 0.9); /* Increased contrast */
      margin-bottom: 3rem; 
      line-height: 1.8;
      text-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
      
      :host-context(.theme-light) & {
        color: rgba(255, 255, 255, 0.9);
      }
    }
    .hero-actions { 
      display: flex; 
      gap: 1.5rem; 
      justify-content: center; 
      margin-bottom: 4rem;

      @media (max-width: 640px) {
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;
        padding: 0 20px;
      }
    }

    .btn-primary, .btn-secondary {
      padding: 16px 32px; border-radius: 12px; font-weight: 700; transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 10px;
      
      @media (max-width: 640px) {
        width: 100%;
      }
    }

    .btn-primary { 
      background: #004a78 !important; 
      color: #ffffff !important; 
      border: 1px solid #004a78 !important;
      &:hover { 
        background: #003a5e !important; 
        transform: translateY(-2px); 
        box-shadow: 0 10px 30px rgba(0, 74, 120, 0.3); 
      } 
    }

    .btn-secondary { 
      background: #ffffff !important; 
      color: #004a78 !important; 
      border: 1px solid #ffffff !important;
      &:hover { 
        background: #f8faff !important; 
        transform: translateY(-2px); 
        box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3); 
      } 
    }

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
    .particle { position: absolute; width: 4px; height: 4px; background: #004a78; border-radius: 50%; opacity: 0; animation: particle-float 10s infinite; }
    @keyframes particle-float { 
      0% { transform: translate(0, 0); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translate(100px, -100px); opacity: 0; }
    }

    .w-full { width: 100%; }
    .mt-3 { margin-top: 0.75rem; }

    /* Swiper Slider Styling */
    .hero__slider {
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
      z-index: 1;
    }

    .hero__slider swiper-slide {
      width: 100%;
      height: 100%;
    }

    .hero__slider .hero__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      animation: ken-burns 20s infinite alternate;
    }

    @keyframes ken-burns {
      0% { transform: scale(1); }
      100% { transform: scale(1.1); }
    }
  `]
})
export class HeroBlockComponent implements AfterViewInit, OnInit, OnDestroy {
  @Input() data!: HeroData;
  @Input() animation: boolean = true;

  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('container') containerRef!: ElementRef<HTMLElement>;
  @ViewChild('swiperRef') swiperRef!: ElementRef<any>;

  private renderer?: any;
  private scene?: any;
  private camera?: any;
  private animationFrameId?: number;
  private mouseMoveListener?: (e: MouseEvent) => void;

  // Mouse parallax tracking
  private mouseX = 0;
  private mouseY = 0;
  private isMouseParallaxEnabled = true;

  constructor(private el: ElementRef) {
    afterNextRender(() => {
      console.log('HeroBlockComponent: afterNextRender (Swiper Init)');
      if (this.data && this.data.sliderImages && this.data.sliderImages.length > 0) {
        this.initSwiper();
      }
    });
  }

  ngOnInit(): void {
    console.log('HeroBlockComponent: ngOnInit');
    // Swiper register is now handled globally in main.ts
    // Disable mouse parallax on mobile
    this.isMouseParallaxEnabled = window.innerWidth > 768;

    if (this.data) {
      console.log('HeroData sliderImages:', this.data.sliderImages);
    }
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
    console.log('HeroBlockComponent: ngAfterViewInit');
    // Swiper initialization is now handled by afterNextRender for better hydration stability

    if (!this.animation) return;

    const root = this.el.nativeElement;

    // Initialize all animations
    this.initializeEntryAnimations(root);
    this.initializeFloatingCodeCards(root);
    this.initializeGradientOrbAnimations(root);
    this.initializeMagneticButtons(root);
    this.initializeMouseParallax(root);

    // Futuristic 3D Background - Removed for performance optimization
    // this.initThreeJs();

  }

  /**
   * Initialize Swiper with custom parameters
   */
  private initSwiper(): void {
    if (!this.swiperRef) {
      console.error('Swiper ref not found!');
      return;
    }

    console.log('Initializing Swiper container:', this.swiperRef.nativeElement);
    const swiperEl = this.swiperRef.nativeElement;

    const swiperParams = {
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,
      speed: 1500,
      pagination: true,
      navigation: true, // Ensure navigation is in params
      injectStyles: [
        `
        :host {
          --swiper-theme-color: #004a78;
        }
        .swiper-pagination-bullet {
          background: #fff;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #004a78;
          opacity: 1;
        }
        .swiper-button-next, .swiper-button-prev {
          color: #fff;
        }
        `
      ],
    };

    // Assign parameters to swiper element
    Object.assign(swiperEl, swiperParams);

    // Initialize swiper
    if (typeof swiperEl.initialize === 'function') {
      swiperEl.initialize();
      console.log('Swiper initialized successfully');
    } else {
      console.error('swiperEl.initialize is not a function. Swiper might not be registered correctly.');
    }
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

    this.mouseMoveListener = (e: MouseEvent) => {
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
    };

    document.addEventListener('mousemove', this.mouseMoveListener, { passive: true });
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

  /**
   * Futuristic 3D Wireframe Background (Three.js) - DISABLED FOR PERFORMANCE
   */
  private initThreeJs() {
    // Logic removed to prevent main-thread lag and unnecessary CDN script loading
  }

  private setupScene() {
    // Scene setup removed for performance
  }

  private onResize() {
    // Resize handling logic simplified or removed as 3D canvas is disabled
  }


  ngOnDestroy() {
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    if (this.mouseMoveListener) {
      document.removeEventListener('mousemove', this.mouseMoveListener);
    }
    // Correctly remove the arrow function listener if it was added this way
    // or just ensure we don't leak anything.
  }
}
