import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../src/js/components/Layout';

describe('Layout', () => {
  it('simple test', () => {
    expect(0).toBe(0);
  });

  it('simple shallow rendering', () => {
    expect(shallow(<Layout />).find('').length).toBe(2);
  });
});
