import { MyweatherModule } from './myweather.module';

describe('MyweatherModule', () => {
  let myweatherModule: MyweatherModule;

  beforeEach(() => {
    myweatherModule = new MyweatherModule();
  });

  it('should create an instance', () => {
    expect(myweatherModule).toBeTruthy();
  });
});
