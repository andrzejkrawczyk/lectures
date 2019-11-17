import { EvenPipe } from './even.pipe';

describe('EvenPipe', () => {
  it('create an instance', () => {
    const pipe = new EvenPipe();
    expect(pipe).toBeTruthy();
  });
});
