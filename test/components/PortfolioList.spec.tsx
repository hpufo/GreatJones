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
  });
  it('gets the current page', () => {
    const items = fillArray(30);
    const wrapper = shallow(<PortfolioList />)
    .setState({results: items, currentPage: 1});
    expect(wrapper.find('label').text()).toContain('1');
  });
  it('changes the page number when clicked', () => {
    const items = fillArray(30);
    const wrapper = mount(<PortfolioList />)
    .setState({results: items, currentPage: 1});
    wrapper.find('.fwd').simulate('click');
    expect(wrapper.find('label').text()).toContain('2');
  });
  it('current page can\'t be less than one', () => {
    const items = fillArray(30);
    const wrapper = mount(<PortfolioList />)
    .setState({results: items, currentPage: 1});
    wrapper.find('.back').simulate('click');
    wrapper.find('.back').simulate('click');
    wrapper.find('.back').simulate('click');
    expect(wrapper.find('label').text()).toContain('1');
  });
  /*
  it('can\'t go past the total number of available pages', () => {
    const items = fillArray(30);
    const wrapper = mount(<PortfolioList />)
    .setState({results: items, currentPage: 1});
    wrapper.find('.fwd').simulate('click');
    wrapper.find('.fwd').simulate('click');
    wrapper.find('.fwd').simulate('click');
    expect(wrapper.find('label').text()).toContain('3');
  });//*/
  it('renders the items', () => {
    const wrapper = mount(<PortfolioList />);
    const length = 5;
    const items = fillArray(length);
    // tslint:disable-next-line:no-console
    console.log('LENGTH: ' + items.length);
    wrapper.setState({results: items});
    expect(wrapper.find('tbody').children().length).toBe(length);
  }); /*
  it('gets the correct page number available', () => {
    const items = fillArray(24);
    const wrapper = mount(<PortfolioList />)
    .setState({results: items, currentPage: 1});
    expect(wrapper.find('label').text()).toContain('3');
  });//*/
});
