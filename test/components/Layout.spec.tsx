import * as React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../src/js/components/Layout';

describe('Layout', () => {
  it('renders the header', () => {
    expect(shallow(<Layout />).find('h1').exists()).toBe(true);
  });
});
