import {Component, Input, NgModule} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  times: String = '';
  timeEntities: any = [];
  sideMenu: any[] = [];

  constructor() {
  }


}
