import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CallsService } from './calls-service.service';
import { environment } from '../../environments/environment';
import { Wavedata } from '../models/wavedata.model';

const wavedataResponseMock = {
  talkTimes: {
    customer: [[0, 1.84], [4.48, 26.928]],
    user: [[0, 3.504], [6.656, 14]]
  }
};

describe('CallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CallsService]
    });
  });

  it('should be created', inject([CallsService], (service: CallsService) => {
    expect(service).toBeTruthy();
  }));

  describe('getWavedata', () => {

    it('should be created', inject([HttpTestingController, CallsService], (httpMock: HttpTestingController, service: CallsService) => {

      service.getWavedata().subscribe(wavedata => {
        expect(wavedata).toBeDefined();
      });

      const rq = httpMock.expectOne(environment.apiUrl);
      rq.flush(wavedataResponseMock);

      expect(rq.request.method).toEqual('GET');

      httpMock.verify();

    }));

  });
});
