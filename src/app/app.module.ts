import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CallsService } from './services/calls-service.service';
import { VisualizerComponent } from './components/visualizer/visualizer.component';
import { TimeIndicatorComponent } from './components/time-indicator/time-indicator.component';


@NgModule({
  declarations: [
    AppComponent,
    VisualizerComponent,
    TimeIndicatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CallsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
