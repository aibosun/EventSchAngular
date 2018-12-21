import { trigger, transition, state, style, animate } from '@angular/animations';


export let slidelr = trigger('slidelr',[
    transition(':enter',[
      style({transform:'translateX(-175px)'}),
      animate(700)
    ])
]);
export let sliderl = trigger('sliderl',[
  transition(':enter',[
    style({
      opacity: 0,
      transform:'translateX(150px)'}),
    animate(400)
  ])
]);
export let hiddenShow = trigger('hiddenShow',[
    transition('hidden=>show',[
      style({
        opacity: 1,
        transform:'translateX(0px)'}),
      animate(400)
    ])
    // transition(':enter',[
    //   style({
    //     opacity: 0,
    //     transform:'translateX(150px)'}),
    //   animate(400)
    // ])
]);

export const ecAni = trigger('ecAni', [
    state('collapsed', style({
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0,
      display:'none'
    })),
    state('expanded', style({
        height: '*',
        paddingTop: '*',
        paddingBottom: '*',
        opacity: 1,
        display:'block'
      })),
    transition('collapsed => expanded', [
      animate('0.5s ease-out')
    ]),
  
    transition('expanded => collapsed', [
      animate('0.5s ease-in')
    ])
  ]);
  