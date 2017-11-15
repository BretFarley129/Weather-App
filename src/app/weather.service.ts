import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {
  weather = {
    humidity:0,
    avg:0,
    high:0,
    low:0,
    status:''
  };
  constructor(private _http: Http) { }

  getWeather(city){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid=2163f3b53c6aa44d236c18da7a4262eb');
  }

}
