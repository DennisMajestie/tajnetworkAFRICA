import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appTypewriter]',
    standalone: true
})
export class TypewriterDirective implements OnInit {
    @Input('appTypewriter') text: string | string[] = '';
    @Input() speed: number = 50;
    @Input() deleteSpeed: number = 30;
    @Input() delay: number = 0;
    @Input() pause: number = 2000;
    @Input() loop: boolean = true;

    private phrases: string[] = [];
    private currentPhraseIndex = 0;

    constructor(private el: ElementRef) { }

    ngOnInit(): void {
        if (Array.isArray(this.text)) {
            this.phrases = this.text;
        } else if (this.text) {
            this.phrases = [this.text];
        } else {
            this.phrases = [this.el.nativeElement.innerText];
        }

        this.el.nativeElement.innerText = '';

        setTimeout(() => {
            this.startTypewriter();
        }, this.delay);
    }

    private async startTypewriter(): Promise<void> {
        while (true) {
            const phrase = this.phrases[this.currentPhraseIndex];

            // Type
            await this.typeEffect(phrase);

            if (this.phrases.length === 1 && !this.loop) break;

            // Pause
            await new Promise(resolve => setTimeout(resolve, this.pause));

            // Delete
            if (this.loop || this.currentPhraseIndex < this.phrases.length - 1) {
                await this.deleteEffect();
            } else {
                break;
            }

            this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;

            if (!this.loop && this.currentPhraseIndex === 0) break;
        }
    }

    private typeEffect(phrase: string): Promise<void> {
        return new Promise(resolve => {
            let i = 0;
            const interval = setInterval(() => {
                if (i < phrase.length) {
                    this.el.nativeElement.textContent += phrase.charAt(i);
                    i++;
                } else {
                    clearInterval(interval);
                    resolve();
                }
            }, this.speed);
        });
    }

    private deleteEffect(): Promise<void> {
        return new Promise(resolve => {
            const interval = setInterval(() => {
                const currentText = this.el.nativeElement.textContent || '';
                if (currentText.length > 0) {
                    this.el.nativeElement.textContent = currentText.substring(0, currentText.length - 1);
                } else {
                    clearInterval(interval);
                    resolve();
                }
            }, this.deleteSpeed);
        });
    }
}
