import {Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';

@Component({
    selector: 'time-line',
    templateUrl: './time-line.component.html',
    styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {
    @ViewChild('time') time: ElementRef;

    @Input() timeEntities: any;

    stripts: any[] = [];
    striptVoid: number;
    timeFrame: any = {
        start: 0,
        finish: 24
    };

    constructor() {
    }

    onResizeTimeline() {
        this.calculateTimeLine()
    }

    calculateTimeLine(): void {
        const tlWidth = this.time.nativeElement.offsetWidth;
        const countStrips = this.stripts.length;
        this.striptVoid = (tlWidth - countStrips * 2) / (countStrips - 1);
    }

    calcTime(i): string {
        let returned = this.timeFrame.start + i/2;
        if (i % 2 == 0) {
            if(i/2 < 10){ 
                return `0${returned}:00`
            } else {
                return `${returned}:00`
            }
        }
        return '';

    }

    ngOnInit() {
        for (var i = 0; i < 49; i++) {
            this.stripts.push('');
        }
        this.calculateTimeLine();
    }

}