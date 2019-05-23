import { AnimationEvent } from '@angular/animations';

export class Bubble {
  move = true;

  maxWidth: number;
  maxHeight: number;

  startTop: string;
  startLeft: string;
  newTop: string;
  newLeft: string;
  timeStart: string;
  timeBack: string;

  color: string;
  logo: string;
  speed: number;

  constructor(useRandomColor: boolean, speed: number, logo: string) {
    // 75px is the width of one bubble, we want all to stay fully inside
    this.maxWidth = window.innerWidth - 75;
    this.maxHeight = window.innerHeight - 75;

    this.speed = speed;
    this.logo = logo;

    if (useRandomColor) {
      this.color =
        '#' +
        Math.random()
          .toString(16)
          .substr(-6);
    }
  }

  private toggle() {
    // tslint:disable:no-bitwise
    this.startTop = ((Math.random() * this.maxHeight) | 0) + 'px';
    this.startLeft = ((Math.random() * this.maxWidth) | 0) + 'px';
    this.newTop = ((Math.random() * this.maxHeight) | 0) + 'px';
    this.newLeft = ((Math.random() * this.maxWidth) | 0) + 'px';
    this.timeStart =
      ((Math.random() * (this.speed - this.speed / 2) + this.speed / 4) | 0) +
      'ms';
    this.timeBack =
      ((Math.random() * (this.speed - this.speed / 2) + this.speed / 4) | 0) +
      'ms';
    this.move = !this.move;
  }

  onAnimationEvent(event: AnimationEvent) {
    if (event.fromState === 'void' || event.totalTime > 0) {
      this.toggle();
    }
  }
}

export class Bubbles {
  value: Bubble[] = [];

  constructor(
    count: number = 20,
    useRandomColor: boolean = true,
    speed: number = 1600,
    logo: string
  ) {
    for (let i = 0; i < count; i++) {
      this.value.push(new Bubble(useRandomColor, speed, logo));
    }
  }
}
