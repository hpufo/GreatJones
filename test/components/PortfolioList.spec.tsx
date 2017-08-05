import * as React from 'react';
import { shallow, mount } from 'enzyme';
import PortfolioList from '../../src/js/components/PortfolioList';

const item = {
  ID: 1234567,
  abbreviation: 'rit',
  active: 'true',
  managementCompany: 'false',
  name: 'Jorge Joestar',
  targetOperatingReserve: 0.0
};

// Helper function to fill an array with items
function fillArray(length: number) {
  const ary = new Array(length);
  for (let i = 0; i < length; i++) {
    ary.push(item);
  }
  return ary;
}

beforeEach(() => {
  spyOn(PortfolioList.prototype, 'componentWillMount');
});
describe('PortfolioItem', () => {
  it('calls componentWillMount', () => {
    shallow(<PortfolioList />);
    expect(PortfolioList.prototype.componentWillMount).toHaveBeenCalledTimes(1);
  });
  it('simple tests for the table', () => {
    const wrapper = shallow(<PortfolioList />);
    expect(wrapper.find('table').exists()).toBe(true);
  });
  it('renders an error message', () => {
    const wrapper = shallow(<PortfolioList />);
    wrapper.setState({error: true});
    expect(wrapper.find('.errMsg').exists()).toBe(true);
  });
  it('renders a loading message', () => {
    const wrapper = shallow(<PortfolioList />);
    expect(wrapper.find('.loading').exists()).toBe(true);
  });/*
  it('renders the items', () => {
    const wrapper = mount(<PortfolioList />);
    const items = fillArray(2);
    wrapper.setState({results: items});
    expect(wrapper.find('tbody').children.length).toBe(2);
  });//*/
  /*
  it('', () => {
    const wrapper = shallow(<PortfolioList />);
  });//*/
});
