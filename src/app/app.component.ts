import { Component } from '@angular/core';
import { WeatherDataService } from './weather-data.service';
import { Forcast } from './forcast';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  newForcast = new Forcast;

  constructor(private weatherDataService: WeatherDataService) { }

  addForcast(forcast: Forcast) {
    this.weatherDataService.addForcast(this.newForcast);
    this.newForcast = new Forcast();
  }

}
