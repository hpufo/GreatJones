import * as React from 'react';
import { mount } from 'enzyme';
import PortfolioList from '../../src/js/components/PortfolioList';

describe('PortfolioItem', () => {
  it('calls componentWillMount', () => {
    spyOn(PortfolioList.prototype, 'componentWillMount');
    mount(<PortfolioList />);
    expect(PortfolioList.prototype.componentWillMount).toHaveBeenCalledTimes(1);
  });
});
