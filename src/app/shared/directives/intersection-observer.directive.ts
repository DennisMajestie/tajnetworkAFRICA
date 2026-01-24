import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Directive({
    selector: '[appIntersectionObserver]',
    standalone: true
})
export class IntersectionObserverDirective implements OnInit, OnDestroy {
    @Input() threshold: number = 0.1;
    @Input() rootMargin: string = '0px';
    @Input() triggerOnce: boolean = true;

    @Input() addAnimationClass: string = 'reveal--active';
    @Input() initialClass: string = 'reveal';

    @Output() visible = new EventEmitter<void>();

    private observer: IntersectionObserver | null = null;

    constructor(private el: ElementRef) { }

    ngOnInit(): void {
        if (this.initialClass) {
            this.el.nativeElement.classList.add(this.initialClass);
        }

        const options = {
            root: null,
            rootMargin: this.rootMargin,
            threshold: this.threshold
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.visible.emit();
                    if (this.addAnimationClass) {
                        this.el.nativeElement.classList.add(this.addAnimationClass);
                    }
                    if (this.triggerOnce) {
                        this.observer?.unobserve(this.el.nativeElement);
                    }
                }
            });
        }, options);

        this.observer.observe(this.el.nativeElement);
    }

    ngOnDestroy(): void {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
