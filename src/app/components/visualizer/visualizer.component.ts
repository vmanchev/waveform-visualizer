import { Component, OnInit } from '@angular/core';
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

  collectionCals(item, idx, collection) {

    item.sort((a, b) => a - b);

    // talk length
    item.push((item[1] - item[0]) / this.totalTime * 100);

    // distance from prev, %
    if (item[0] === 0) {
      item.push(0);
    } else {
      item.push((item[0] - collection[idx - 1][1]) / this.totalTime * 100);
    }
    return item;
  }

  trackMove(e) {
    console.log('move', e, e.clientX);
  }

  tranckClick(e, customerTime) {
    console.log('click', e, customerTime);
  }

}
