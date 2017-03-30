export class Forcast {
  id: number;
  countryName: string = '';
  cityName: string = '';
  temperature: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
