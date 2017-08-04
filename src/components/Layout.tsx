import * as React from 'react';
import PortfolioList from './PortfolioList';

export default class Layout extends React.Component<any, any> {
  // tslint:disable-next-line:one-line
  render() {
    return (
      <div className='layout'>
        <h1>Portfolio List</h1>
        <PortfolioList />
      </div>
    );
  }
}
