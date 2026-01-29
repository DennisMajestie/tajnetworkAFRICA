import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
    providedIn: 'root'
})
export class ScrollAnimationService {
    private isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);

        if (this.isBrowser) {
            gsap.registerPlugin(ScrollTrigger);
        }
    }

    /**
     * Initialize dramatic scroll animations for the entire page
     */
    initDramaticScrollEffects(): void {
        if (!this.isBrowser) return;

        // Refresh ScrollTrigger to recalculate positions
        ScrollTrigger.refresh();

        // Section reveal animations - dramatic fade and slide
        this.initSectionReveals();

        // Parallax background effects
        this.initParallaxEffects();

        // Text reveal animations
        this.initTextAnimations();

        // Card stagger animations
        this.initCardAnimations();

        // Scale and rotate effects
        this.initScaleEffects();
    }

    private initSectionReveals(): void {
        // Dramatic section reveals with rotation and scale
        gsap.utils.toArray('.section').forEach((section: any, i) => {
            gsap.fromTo(section,
                {
                    opacity: 0,
                    y: 100,
                    scale: 0.95,
                    rotateX: 5
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                        end: 'top 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    }

    private initParallaxEffects(): void {
        // Parallax background elements
        gsap.utils.toArray('.parallax-bg').forEach((element: any) => {
            gsap.to(element, {
                y: -150,
                ease: 'none',
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                }
            });
        });

        // Background orbs parallax
        const orb1 = document.querySelector('.orb-1');
        if (orb1) {
            gsap.to(orb1, {
                y: -200,
                x: 50,
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 2
                }
            });
        }

        const orb2 = document.querySelector('.orb-2');
        if (orb2) {
            gsap.to(orb2, {
                y: 150,
                x: -30,
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 3
                }
            });
        }
    }

    private initTextAnimations(): void {
        // Dramatic title reveals
        gsap.utils.toArray('.services-title, .portfolio-title, .cta-banner__title').forEach((title: any) => {
            gsap.fromTo(title,
                {
                    opacity: 0,
                    y: 80,
                    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
                },
                {
                    opacity: 1,
                    y: 0,
                    clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
                    duration: 1,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: title,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Subtitle fade ins
        gsap.utils.toArray('.services-subtitle, .portfolio-subtitle, .cta-banner__subtitle').forEach((subtitle: any) => {
            gsap.fromTo(subtitle,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.3,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: subtitle,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    }

    private initCardAnimations(): void {
        // Service cards stagger animation
        gsap.utils.toArray('.services-grid').forEach((grid: any) => {
            const cards = grid.querySelectorAll('.service-card');

            gsap.fromTo(cards,
                {
                    opacity: 0,
                    y: 60,
                    scale: 0.9,
                    rotateY: -10
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateY: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'back.out(1.2)',
                    scrollTrigger: {
                        trigger: grid,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Portfolio cards dramatic entrance
        gsap.utils.toArray('.portfolio-grid').forEach((grid: any) => {
            const cards = grid.querySelectorAll('.portfolio-card');

            gsap.fromTo(cards,
                {
                    opacity: 0,
                    x: (i: number) => i % 2 === 0 ? -100 : 100,
                    rotateZ: (i: number) => i % 2 === 0 ? -5 : 5
                },
                {
                    opacity: 1,
                    x: 0,
                    rotateZ: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: grid,
                        start: 'top 70%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    }

    private initScaleEffects(): void {
        // Hero content scale effect on scroll
        const heroContent = document.querySelector('.hero__content');
        if (heroContent) {
            gsap.to(heroContent, {
                scale: 0.9,
                opacity: 0.5,
                y: -50,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                }
            });
        }

        // CTA banner dramatic entrance
        const ctaBanner = document.querySelector('.cta-banner');
        if (ctaBanner) {
            gsap.fromTo(ctaBanner.querySelector('.cta-banner__content'),
                {
                    opacity: 0,
                    scale: 0.8,
                    y: 80
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'elastic.out(1, 0.5)',
                    scrollTrigger: {
                        trigger: ctaBanner,
                        start: 'top 70%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }
    }

    /**
     * Destroy all scroll triggers (cleanup)
     */
    destroy(): void {
        if (this.isBrowser) {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
    }
}
