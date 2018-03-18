import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


export const photoState = [
  trigger('photoState', [
    state('move', style({transform: 'translateX(-100%)' })),
    state('enlarge', style({ transform: 'scale(1.5)' })),
    state('spin',   style({
      transform: 'rotateY(180deg) rotateZ(90deg)',
    })),
    state('inactive', style({
      transform: 'scale(1, 1) ', 
      //opacity: 1,
    })),
     state('active',   style({
       transform: 'scale(2, 2) translateY(25%)   translateX(25%) ', 
       zIndex: 5
    })),
    transition('* <=> *', [
      animate('500ms ease')
    ])
  ])
];

