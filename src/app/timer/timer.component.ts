import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  subscription: any;

  timerData: any = {
    isStart: false,
    start: null,
    delta: 0
  };

  constructor() {
  }

  toggleTimer() {
    this.timerData.isStart ? this.timerData.isStart = false : this.timerData.isStart = true;
    if (this.timerData.isStart) {
      this.timerData.start = new Date();
      this.timerLoop();
    } else {
      this.timerData.delta = 0;
      this.subscription.unsubscribe();
      // todo make new time entity
    }
  }

  timerLoop() {
    const timer = Observable.interval(1000);
    this.subscription = timer.subscribe(() => {
      const now: any = new Date();
      const start: any = new Date(this.timerData.start);
      this.timerData.delta = now - start;
    });
  }


  ngOnInit() {


  }

}
