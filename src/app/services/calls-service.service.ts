import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Wavedata } from '../models/wavedata.model';

@Injectable()
export class CallsService {

  private environment: any = environment;

  constructor(
    public http: HttpClient
  ) { }

  getWavedata(): Observable<Wavedata> {
    return this.http.get<Wavedata>(this.environment.apiUrl);
  }

}
