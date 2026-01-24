import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Directive({
    selector: '[appParallax]',
    standalone: true
})
export class ParallaxDirective implements OnInit, OnDestroy {
    @Input() parallaxSpeed: number = 0.5;
    @Input() parallaxDirection: 'y' | 'x' = 'y';

    constructor(private el: ElementRef) {
        gsap.registerPlugin(ScrollTrigger);
    }

    ngOnInit(): void {
        const movement = this.parallaxSpeed * 100;

        gsap.to(this.el.nativeElement, {
            [this.parallaxDirection]: movement,
            ease: 'none',
            scrollTrigger: {
                trigger: this.el.nativeElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    }

    ngOnDestroy(): void {
        ScrollTrigger.getAll().forEach(st => {
            if (st.vars.trigger === this.el.nativeElement) {
                st.kill();
            }
        });
    }
}
