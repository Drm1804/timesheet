import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MdButtonModule, MdCheckboxModule, MdGridListModule, MdSidenavModule, MdInputModule, MdIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {TimeLineComponent} from './time-line/time-line.component';
import {LineFillComponent} from './time-line/line-fill/line-fill.component';
import {TimerComponent} from './timer/timer.component';
import { TimeAgoPipe } from './timer/time-ago.pipe';
import { CheckTimesheetComponent } from './check-timesheet/check-timesheet.component';

const appRoutes: Routes = [
  {path: 'timeline', component: TimeLineComponent},
  {path: 'check', component: CheckTimesheetComponent},
  {
    path: '',
    redirectTo: 'check',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TimeLineComponent,
    LineFillComponent,
    TimerComponent,
    TimeAgoPipe,
    CheckTimesheetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdSidenavModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdGridListModule,
    MdIconModule,
    MdCheckboxModule,
    MdInputModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
