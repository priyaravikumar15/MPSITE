import { ShopcatgoryModule } from './shopcatgory.module';

describe('ShopcatgoryModule', () => {
  let shopcatgoryModule: ShopcatgoryModule;

  beforeEach(() => {
    shopcatgoryModule = new ShopcatgoryModule();
  });

  it('should create an instance', () => {
    expect(shopcatgoryModule).toBeTruthy();
  });
});
