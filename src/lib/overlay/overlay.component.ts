import { Component, OnInit, HostListener, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { Bubbles } from './bubbles.model';

@Component({
  selector: 'ss-ani-lib-overlay',
  animations: [
    trigger('trigger', [
      state(
        'left',
        style({
          top: '{{ startTop }}',
          left: '{{ startLeft }}'
        }),
        {
          params: {
            startTop: '0px',
            startLeft: '0px'
          }
        }
      ),
      state(
        'right',
        style({
          top: '{{ newTop }}',
          left: '{{ newLeft }}'
        }),
        {
          params: {
            newTop: '0px',
            newLeft: '320px'
          }
        }
      ),
      transition('left => right', [animate('{{ timeStart }}')], {
        params: { timeStart: '.5s' }
      }),
      transition('right => left', [animate('{{ timeBack }}')], {
        params: { timeBack: '.5s' }
      })
    ])
  ],
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  @Input() count: number;
  @Input() useRandomColor: boolean;
  @Input() speed: number;
  @Input() logo: string;

  bubbles: Bubbles;

  constructor() {}

  ngOnInit() {
    this.initOverlay();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.initOverlay();
  }

  private initOverlay() {
    this.bubbles = new Bubbles(
      this.count,
      this.useRandomColor,
      this.speed,
      this.logo
    );
  }
}
