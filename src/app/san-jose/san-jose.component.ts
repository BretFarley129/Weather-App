import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SanJoseComponent implements OnInit {

  weather="test";
  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {
    this._weatherService.getWeather('sanjose').subscribe(
      (response) => {
        this.weather = response.json();
      },
      (err) => {console.log(err);}
    );
  }

}
