import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import * as moment from 'moment';
const apiKey: string = environment.apiKey;
@Injectable({
  providedIn: 'root'
})

export class FutureService {
  constructor(private http: HttpClient) { }
  getFutureWeather(lat: number,lon:number) {
    return this.http.get(`${environment.apiUrl}/onecall?lat=${lat}&lon=${lon}&exclude=hourly,alert,minutely&appid=${apiKey}`)
  }
}
