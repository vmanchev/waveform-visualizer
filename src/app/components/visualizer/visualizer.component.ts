import { Component, OnInit } from '@angular/core';
import { CallsService } from '../../services/calls-service.service';
import { Wavedata } from '../../models/wavedata.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
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
let ct = 0;
        this.wavedata.talkTimes.customer = _.map(this.wavedata.talkTimes.customer, (item) => {

          item.sort((a, b) => a - b);

          // item width, %
          item.push((item[1] - item[0]) / this.totalTime * 100 / 2);

          // distance from beginning, %
          if (item[0] === 0) {
            item.push(0);
          } else {
            item.push(item[0] / this.totalTime * 100 / 2);
          }

          ct += item[2];

          return item;
        });
console.log('ct', ct);
console.log(this.wavedata.talkTimes.customer);
let ut = 0;
        this.wavedata.talkTimes.user = _.map(this.wavedata.talkTimes.user, (item) => {

          item.sort((a, b) => a - b);

          // item width, %
          item.push((item[1] - item[0]) / this.totalTime * 100 / 2);

          // distance from beginning, %
          if (item[0] === 0) {
            item.push(0);
          } else {
            item.push(item[0] / this.totalTime * 100 / 2);
          }
          ut += item[2];
          return item;
        });
console.log('ut', ut)        ;

        // this.wavedata.talkTimes.user = _.map(this.wavedata.talkTimes.user, this.collectionCals);

        //        console.log(this.wavedata.talkTimes.customer);
      }
    );
  }

  collectionCals(v, i, c) {

    v.push((v[1] * 1000 - v[0] * 1000) / this.totalTime * 100000);

    // if (i === 0) {
    //   v.push(0);
    // } else {
    //   v.push(v[0] - c[i - 1][1]);
    // }

    return v;
  }

  trackHover(e) {
console.log(e.clientX);
  }

  tranckClick(e, customerTime) {
console.log('click', e, customerTime);
  }

}
