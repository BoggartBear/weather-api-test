import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherDataService } from './weather-data.service';
import { WeatherResultsListComponent } from './weather-results-list/weather-results-list.component';
import { WeatherResultsListItemComponent } from './weather-results-list-item/weather-results-list-item.component';
import { WeatherInputFormComponent } from './weather-input-form/weather-input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherResultsListComponent,
    WeatherResultsListItemComponent,
    WeatherInputFormComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
