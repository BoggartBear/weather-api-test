import { WeatherApiTestPage } from './app.po';

describe('weather-api-test App', () => {
  let page: WeatherApiTestPage;

  beforeEach(() => {
    page = new WeatherApiTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
