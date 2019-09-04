import { WeatherRouterModule } from './weather-router.module';

describe('WeatherRouterModule', () => {
  let weatherRouterModule: WeatherRouterModule;

  beforeEach(() => {
    weatherRouterModule = new WeatherRouterModule();
  });

  it('should create an instance', () => {
    expect(weatherRouterModule).toBeTruthy();
  });
});
