import {
    trigger,
    transition,
    style,
    query,
    animate,
    group
} from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
    transition('* <=> *', [
        // Make the page jumpy-proof
        style({ position: 'relative' }),

        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                opacity: 0.9 // Start mostly opaque to cover background
            })
        ], { optional: true }),

        // Initial state for entering element
        query(':enter', [
            style({
                opacity: 0.9,
                transform: 'translateY(10px)'
            })
        ], { optional: true }),

        // Animate out current page first
        query(':leave', [
            animate('200ms ease-in', style({
                opacity: 0,
                transform: 'translateY(-10px)'
            }))
        ], { optional: true }),

        // Animate in entering page quickly
        query(':enter', [
            animate('300ms 100ms ease-out', style({
                opacity: 1,
                transform: 'translateY(0)'
            }))
        ], { optional: true })
    ])
]);
