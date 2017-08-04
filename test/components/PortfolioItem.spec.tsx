import * as React from 'react';
import { shallow } from 'enzyme';
import PortfolioItem from '../../src/js/components/PortfolioItem';

const createShallowPortfolioItem = () => {
  const props = {
    item: {
      ID: 1234567,
      abbreviation: 'rit',
      active: true,
      managementCompany: false,
      name: 'Jorge Joestar',
      targetOperatingReserve: 0.0
    }
  };
  return shallow(<PortfolioItem {...props} />);
};

describe('PortfolioItem', () => {
  it('it contains the class name item', () => {
    const portItem = createShallowPortfolioItem();
    expect(portItem.is('.item')).toBeTruthy();
  });
});
