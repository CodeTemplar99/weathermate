import { Component, OnInit } from '@angular/core';
import { CordsWeatherComponent } from '../cords-weather/cords-weather.component';

@Component({
  selector: 'app-future-weather',
  templateUrl: './future-weather.component.html',
  styleUrls: ['./future-weather.component.css']
})
export class FutureWeatherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    CordsWeatherComponent
  }

}


