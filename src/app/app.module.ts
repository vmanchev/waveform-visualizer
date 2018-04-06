import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CallsService } from './services/calls-service.service';
import { CommentsService } from './services/comments.service';
import { CommentsProxyService } from './services/comments-proxy.service';
import { VisualizerComponent } from './components/visualizer/visualizer.component';
import { TimeIndicatorComponent } from './components/time-indicator/time-indicator.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';


@NgModule({
  declarations: [
    AppComponent,
    VisualizerComponent,
    TimeIndicatorComponent,
    CreateCommentComponent,
    ListCommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CallsService,
    CommentsService,
    CommentsProxyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
