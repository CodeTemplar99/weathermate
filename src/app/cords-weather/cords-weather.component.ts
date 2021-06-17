import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CordService } from '../services/cordweather.service';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';

interface Cord {
  lat: number;
  lon: number;
}

@Component({
  selector: 'app-cords-weather',
  templateUrl: './cords-weather.component.html',
  styleUrls: ['./cords-weather.component.css']
})

export class CordsWeatherComponent implements OnInit {
  cord$: Observable<Cord>;
  cord!: Cord;
  cordWeather: any = <any>{};
  msg!: string;
  constructor(
    private store: Store<any>,
    private cordService: CordService
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
    this.cordWeather = {};
    this.cordService.getCordWeather(lat, lon)
      .subscribe(res => {
        // console.log(res);
        this.cordWeather = res;
        if (res) {
          // @ViewChild('layered') layered: ElementRef;

          // console.log(this.layered.nativeElement.innerHTML);
          
          // document.getElementById('').style.display = 'none !important'
        }
      }, err => {
          // console.log(this.cordWeather)
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
