import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store, select } from '@ngrx/store';
import { FutureService } from '../services/futureweather.service';

interface Cord {
  lat: number;
  lon: number;
}

@Component({
  selector: 'app-future-weather',
  templateUrl: './future-weather.component.html',
  styleUrls: ['./future-weather.component.css']
})
export class FutureWeatherComponent implements OnInit {

 cord$: Observable<Cord>;
  cord!: Cord;
  futureWeather: any = <any>{};
  msg!: string;
  constructor(
    private store: Store<any>,
    private futureService: FutureService
  ) {
    this.cord$ = store.pipe(select('cord'));
    this.cord$.subscribe((cord: Cord) => {
      this.cord = cord;
    })
  }
  ngOnInit() {
    navigator.geolocation.getCurrentPosition((p) => { 
      const lon = p.coords.longitude;
      const lat = p.coords.latitude;
      this.searchWeather(lat, lon);
    });
  }
  searchWeather(lat: number, lon: number) {
    this.msg = '';
    this.futureWeather = {};
    this.futureService.getFutureWeather(lat, lon)
      .subscribe(res => {
        console.log(res);
        this.futureWeather = res;
      }, err => {
          console.log(this.futureWeather)
        if (err.error && err.error.message) {
          alert(err.error.message);
          this.msg = err.error.message;
          return;
        }
        alert('Failed to get weather info.');
      }, () => { })
    return
  }
}


