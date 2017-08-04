import * as React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../src/js/components/Layout';

describe('Layout', () => {
  it('simple test', () => {
    expect(0).toBe(0);
  });

  it('simple shallow rendering', () => {
    expect(shallow(<Layout />).find('.layout').length).toBe(1);
  });
/*
  it('contains # items initally', () => {
    expect(mount(<Layout />).find('.layout').length).toBe(2);
  });//*/
});
