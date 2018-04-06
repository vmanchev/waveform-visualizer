import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CallsService } from './services/calls-service.service';
import { VisualizerComponent } from './components/visualizer/visualizer.component';


@NgModule({
  declarations: [
    AppComponent,
    VisualizerComponent
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
