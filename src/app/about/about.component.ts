import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('aboutAnim', [
      state('h2', style({
        opacity: '1'
      })),
      state('h3', style({
        opacity: '1'
      })),
      state('h4', style({
        opacity: '1'
      })),
      state('h5', style({
        opacity: '1'
      })),
      transition('void => h2', [
        style({transform: 'translateX(-30px)', opacity: '0'}),
        animate('700ms 0.5s ease-in-out')
      ]),
      transition('void => h3', [
        style({transform: 'translateX(-30px)', opacity: '0'}),
        animate('700ms 1.5s ease-in-out')
      ]),
      transition('void => h4', [
        style({transform: 'translateX(-30px)', opacity: '0'}),
        animate('700ms 2.5s ease-in-out')
      ]),
      transition('void => h5', [
        style({transform: 'translateX(-30px)', opacity: '0'}),
        animate('700ms 3.5s ease-in-out')
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.h2State = 'h2';
    this.h3State = 'h3';
    this.h4State = 'h4';
    this.h5State = 'h5';
      
  }

  h2State: string ='';
  h3State: string ='';
  h4State: string ='';
  h5State: string ='';

  

}
