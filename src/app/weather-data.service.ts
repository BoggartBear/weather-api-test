import { Injectable } from '@angular/core';
import { Forcast } from './forcast';

@Injectable()
export class WeatherDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for forcasts
  forcasts: Forcast[] = [];

  constructor() { }

  // Simulate POST /forcasts
  addForcast(forcast: Forcast): WeatherDataService {
    if (!forcast.id) {
      forcast.id = ++this.lastId;
    }
    this.forcasts.push(forcast);
    debugger;
    return this;
  }

  // Simulate DELETE /forcasts/:id
  deleteForcastById(id: number): WeatherDataService {
    this.forcasts = this.forcasts.filter(forcast => forcast.id !== id);
    return this;
  }

  // Simulate PUT /forcasts/:id
  updateForcastById(id: number, values: Object = {}): Forcast {
    const forcast = this.getForcastById(id);
    if (!forcast) {
      return null;
    }
    Object.assign(forcast, values);
    return forcast;
  }

  // Simulate GET /forcasts
  getAllForcasts(): Forcast[] {
    return this.forcasts;
  }

  // Simulate GET /forcasts/:id
  getForcastById(id: number): Forcast {
    return this.forcasts
      .filter(forcast => forcast.id === id)
      .pop();
  }
}
