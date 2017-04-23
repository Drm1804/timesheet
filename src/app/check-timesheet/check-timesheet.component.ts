import {Component, OnInit} from '@angular/core';
import {ParserService} from '../parser/parser.service';

@Component({
  selector: 'app-check-timesheet',
  templateUrl: './check-timesheet.component.html',
  providers: [ParserService],
  styleUrls: ['./check-timesheet.component.css']
})
export class CheckTimesheetComponent implements OnInit {

  timeEntities: any = [];
  timeInfo: any = {};

  constructor(private parser: ParserService) {
  }

  ngOnInit() {

  }
  parseData(event: String) {
    const parse = this.parser.prepareInputTimesheet(event);
    this.timeEntities = parse[0];
    this.timeInfo = parse[1];
    console.log(this.timeInfo);
  }

}
