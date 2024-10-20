import {formartCurrency} from '../../scripts/utils/money.js';

describe('test suite: formartCurrency', () => {
  it('converts cents into dollars', () => {
    expect(formartCurrency(2095)).toEqual('20.95');
  });

  it('works with 0', () => {
    expect(formartCurrency(0)).toEqual('0.00');
  });

  it('rounds up to the nearest cent', () => {
    expect(formartCurrency(2000.5)).toEqual('20.01');
  });
});