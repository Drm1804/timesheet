import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MdButtonModule, MdCheckboxModule, MdGridListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {TimeLineComponent} from './time-line/time-line.component';
import {LineFillComponent} from './time-line/line-fill/line-fill.component';

const appRoutes: Routes = [
    {path: 'timeline', component: TimeLineComponent},
    {
        path: '',
        redirectTo: '/timeline',
        pathMatch: 'full'
    },
];

@NgModule({
    declarations: [
        AppComponent,
        TimeLineComponent,
        LineFillComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdGridListModule,
        MdCheckboxModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
