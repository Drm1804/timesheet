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

     constructor(private parser: ParserService) {}

    parseData(event:String) {
         console.log('968687');
        this.timeEntities =  this.parser.prepareInputTimesheet(event);
    }
}
