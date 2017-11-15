import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-seatlle',
  templateUrl: './seatlle.component.html',
  styleUrls: ['./seatlle.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SeatlleComponent implements OnInit {

  weather="test";
  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {
    this._weatherService.getWeather('seattle').subscribe(
      (response) => {
        this.weather = response.json();
      },
      (err) => {console.log(err);}
    );
  }

}
