import * as React from 'react';
import { shallow } from 'enzyme';
import PortfolioItem from '../../src/js/components/PortfolioItem';

const createShallowPortfolioItem = () => {
  const props = {
    item: {
      ID: 1234567,
      abbreviation: 'rit',
      active: 'true',
      managementCompany: 'false',
      name: 'Jorge Joestar',
      targetOperatingReserve: 0.0
    }
  };
  return shallow(<PortfolioItem {...props} />);
};

describe('PortfolioItem', () => {
  it('renders the item ID', () => {
    const item = createShallowPortfolioItem();
    expect(item.find('.id').text()).toEqual('1234567');
  });
  it('renders the item abbreviation', () => {
    const item = createShallowPortfolioItem();
    expect(item.find('.abv').text()).toEqual('rit');
  });
  it('renders the item active status', () => {
    const item = createShallowPortfolioItem();
    expect(item.find('.active').text()).toEqual('true');
  });
  it('renders the item managementCompany\'s boolean value ', () => {
    const item = createShallowPortfolioItem();
    expect(item.find('.manComp').text()).toEqual('false');
  });
  it('renders the item name', () => {
    const item = createShallowPortfolioItem();
    expect(item.find('.name').text()).toEqual('Jorge Joestar');
  });
  it('renders the item targetOperatingReserve', () => {
    const item = createShallowPortfolioItem();
    expect(item.find('.tor').text()).toEqual('0');
  });
});
