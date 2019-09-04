import { MycitiesModule } from './mycities.module';

describe('MycitiesModule', () => {
  let mycitiesModule: MycitiesModule;

  beforeEach(() => {
    mycitiesModule = new MycitiesModule();
  });

  it('should create an instance', () => {
    expect(mycitiesModule).toBeTruthy();
  });
});
