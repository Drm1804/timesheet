import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'line-fill',
  templateUrl: './line-fill.component.html',
  styleUrls: ['./line-fill.component.css']
})
export class LineFillComponent implements OnInit {

  @Input() entity :any;
  @Input() timeIntervalWidth :number;
  @Input() timeFrame :any;

  relativeSize: any = {};

  constructor() { }

  calculateRelativeSize(){
    const minutesStartEntity = this.entity.timeFrom.getHours() * 60 + this.entity.timeFrom.getMinutes();
    const minutesFinishEntity = this.entity.timeTo.getHours() * 60 + this.entity.timeTo.getMinutes();
    this.relativeSize.before = minutesStartEntity / 60;
    this.relativeSize.after = (this.timeFrame.finish * 60 - minutesFinishEntity) / 60;
    this.relativeSize.fill = (minutesFinishEntity - minutesStartEntity) / 60;
  }

  ngOnInit() {
    this.calculateRelativeSize()
  }

}
