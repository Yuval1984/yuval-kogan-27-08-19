import { error } from './error.module';

describe('ErrorModule', () => {
  let errorModule: error;

  beforeEach(() => {
    errorModule = new error();
  });

  it('should create an instance', () => {
    expect(errorModule).toBeTruthy();
  });
});
