import RootIndex, { noop } from '../index';

describe('root index.tsx', () => {
  it('compiles and exports a default component', () => {
    expect(RootIndex).toBeDefined();
  });

  it('exports a noop function', () => {
    expect(typeof noop).toBe('function');
  });
});
