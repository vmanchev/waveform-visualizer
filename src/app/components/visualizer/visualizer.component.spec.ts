import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, fakeAsync, flush, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VisualizerComponent } from './visualizer.component';
import { CallsService } from '../../services/calls-service.service';
import { Wavedata } from '../../models/wavedata.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const wavedataResponseMock = {
  talkTimes: {
    customer: [[0, 1.84], [4.48, 26.928]],
    user: [[0, 3.504], [6.656, 14]]
  }
};

class CallServiceMock {
  getWavedata() {
    return Observable.of(wavedataResponseMock);
  }
}

describe('VisualizerComponent', () => {
  let component: VisualizerComponent;
  let fixture: ComponentFixture<VisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizerComponent],
      providers: [
        { provide: CallsService, useClass: CallServiceMock }
      ],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('$ngOnInit', () => {

    beforeEach(() => {
      spyOn(component.callsService, 'getWavedata').and.callThrough();
    });

    it('should use callsService to get the wavedata', fakeAsync(() => {
      component.ngOnInit();

      expect(component.callsService.getWavedata).toHaveBeenCalled();

      flush();
      fixture.detectChanges();

      expect(component.wavedata).toEqual(wavedataResponseMock);

    }));

  });
});
