import {Component, Input, NgModule} from '@angular/core';
import {ParserService} from './parser/parser.service';




@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [ParserService],
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    times:String = '';
    timeEntities:Object[] = [];

    tiles = [
        {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];

    constructor(private parser: ParserService) {}

    parseData(event:String) {
        this.timeEntities =  this.parser.prepareInputTimesheet(event);
        console.log(this.timeEntities);
    }
}
