import { style, state, animate, transition, trigger } from "@angular/animations";

export const NEW_BID_TRANSITION = trigger('newBid',
    [transition(':enter',
        [
            animate('2s ease-in', style({
                'background-color': 'green'
            }))
        ])
    ])