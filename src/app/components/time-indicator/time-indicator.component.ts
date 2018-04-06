import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { TalkMoment } from '../../models/talk-moment.model';

@Component({
  selector: 'app-time-indicator',
  templateUrl: './time-indicator.component.html',
  styleUrls: ['./time-indicator.component.scss']
})
export class TimeIndicatorComponent implements OnChanges {

  @Input() talkMoment: TalkMoment;

  constructor() { }

  ngOnChanges() {
    console.log(this.talkMoment);
  }

}
