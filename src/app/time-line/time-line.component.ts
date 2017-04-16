import {Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'time-line',
    templateUrl: './time-line.component.html',
    styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {
    @ViewChild('time') time:ElementRef;
    stripts: any[] = [];
    striptVoid: number;


    constructor() {
    }

    onResizeTimeline() {
        this.calculateTimeLine()
    }

    calculateTimeLine():void {
        const tlWidth = this.time.nativeElement.offsetWidth;
        console.log('tlWidth', tlWidth);
        const countStrips = this.stripts.length;
        console.log('countStrips', countStrips);
        this.striptVoid = (tlWidth - countStrips * 2) / (countStrips - 1);
        console.log(this.striptVoid);

    }

    ngOnInit() {
        for (var i = 0; i < 49; i++) {
            this.stripts.push('');
        }
        this.calculateTimeLine();
    }

}