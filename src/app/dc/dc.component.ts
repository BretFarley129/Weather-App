import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DcComponent implements OnInit {

  weather="test";
  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {
    this._weatherService.getWeather('washingtondc').subscribe(
      (response) => {
        this.weather = response.json();
      },
      (err) => {console.log(err);}
    );
  }

}
