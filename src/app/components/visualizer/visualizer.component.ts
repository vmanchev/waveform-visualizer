import { Component, OnInit, ViewChild } from '@angular/core';
import { CallsService } from '../../services/calls-service.service';
import { Wavedata } from '../../models/wavedata.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})
export class VisualizerComponent implements OnInit {

  public wavedata: Wavedata;
  public totalTime: number;
  public timeLabel: string;

  @ViewChild('titleText') titleTextElement;

  constructor(
    public callsService: CallsService
  ) { }

  ngOnInit() {
    this.callsService.getWavedata().subscribe(
      (result: Wavedata) => {
        this.wavedata = result;
        this.totalTime = this.wavedata.talkTimes.customer.pop()[1];

        this.wavedata.talkTimes.customer = _.map(this.wavedata.talkTimes.customer, this.collectionCals.bind(this));
        this.wavedata.talkTimes.user = _.map(this.wavedata.talkTimes.user, this.collectionCals.bind(this));

      }
    );
  }

  /**
   * Talk collection item calculations
   *
   * Calculates:
   * a) talk length as relation to the total call time
   * b) silence as relation to the total call time
   *
   * It also fixes a bug with some data sets - when talk
   * end time is earlier than the talk start time
   *
   * @param item {array} Array of two elements - start time and end time
   * @param idx {number} Item index in the channel collection
   * @param collection Channel collection to which the item belongs to
   * @return {array} Array of 4 elements - start time, end time, length as %, silence as %
   */
  collectionCals(item, idx, collection) {

    // fix for wrong data sets bug - end time is earlier then start time
    item.sort((a, b) => a - b);

    // talk length in % from total time, 3rd element
    item.push((item[1] - item[0]) / this.totalTime * 100);

    // distance from previous talk in % from total time, 4th element
    if (item[0] === 0) {
      item.push(0);
    } else {
      item.push((item[0] - collection[idx - 1][1]) / this.totalTime * 100);
    }
    return item;
  }

  /**
   * Track mouse move over a channel (user or customer)
   * @param e {$event}
   */
  trackMove(e) {

    // get the container width
    const containerWidth = this.titleTextElement.nativeElement.offsetWidth;
    const currentPosition = e.layerX;

    const currentMoment = (currentPosition / containerWidth) * this.totalTime;

    const d = new Date();
    d.setMinutes(0);
    d.setSeconds(currentMoment);

    const seconds = d.getSeconds();
    const secondsLabel = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();

    this.timeLabel = d.getMinutes() + ':' + secondsLabel;
  }


  /**
   * Track click event on a channel
   * @param e {$event}
   * @param customerTime
   */
  tranckClick(e, customerTime) {
    console.log(this.timeLabel);
  }

}
