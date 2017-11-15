import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChicagoComponent implements OnInit {

  weather="test";
  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {
    this._weatherService.getWeather('chicago').subscribe(
      (response) => {
        this.weather = response.json();
      },
      (err) => {console.log(err);}
    );
  }
}
