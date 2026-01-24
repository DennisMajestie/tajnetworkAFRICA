import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
    selector: 'img[appLazyLoad]',
    standalone: true
})
export class LazyLoadImageDirective implements OnInit, OnDestroy {
    @Input('appLazyLoad') src!: string;
    private observer?: IntersectionObserver;

    constructor(private el: ElementRef<HTMLImageElement>) { }

    ngOnInit(): void {
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.loadImage();
                        this.observer?.disconnect();
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });

            this.observer.observe(this.el.nativeElement);
        } else {
            // Fallback for older browsers
            this.loadImage();
        }
    }

    private loadImage(): void {
        this.el.nativeElement.src = this.src;
        this.el.nativeElement.classList.add('fade-in-ready');

        this.el.nativeElement.onload = () => {
            this.el.nativeElement.classList.add('fade-in-complete');
        };
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }
}
