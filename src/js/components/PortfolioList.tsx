import * as React from 'react';
import axios from 'axios';
import PortfolioItem from './PortfolioItem';

export default class PortfolioList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: false,
      startIndex: 0,
      currentPage: 0,
      results: []
    };
  }
  componentWillMount() {
    axios.post('https://greatapi.azurewebsites.net/api/PwProxy', {
      path: ['getPortfolioList']
    })
    .then((response) => {
        this.setState({
            results: response.data,
            currentPage: 1
        });
    })
    .catch((error) => {
      this.setState({
        error: true
      });
    });
  }
  renderItems() {
      if (this.state.results.length === 0) {
        if (this.state.error) {
          return <tr><td rowSpan={6}>API call failed</td></tr>;
        }
        //If there is no error display that you are loading
        return <tr><td rowSpan={6}>Loading</td></tr>;
      }
      const output = this.state.results.filter((item: any, i: any) => {
          return i >= this.state.startIndex && i <= this.state.startIndex + 10;
      });
      return output.map((item: any, i: any) => {
          return <PortfolioItem obj={item} key={i} />;
      });
  }
  handleClick = (event: any) => {
    let newIndex = this.state.startIndex;
    let current = this.state.currentPage;

    if (event.target.value === '<' && newIndex - 10 >= 0) {
      newIndex -= 10;
      current--;
    }
    // using if instead of else or elseif because of lint
    if (event.target.value === '>'
      && newIndex + 10 < this.state.results.length) {
      newIndex += 10;
      current++;
    }
    this.setState({
      startIndex: newIndex,
      currentPage: current
    });
  }
  pagination() {
    if ( this.state.results.length > 0 ) {
      const currentPage = this.state.currentPage;
      const pageAvilable = Math.ceil(this.state.results.length / 10);

      return (
      <div>
        <label>{`Page ${currentPage} of ${pageAvilable}`}</label>
      </div>
    );
    }
    return <div />;
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Abbreviation</th>
              <th>Active</th>
              <th>ManagementCompany</th>
              <th>Name</th>
              <th>TargetOperatingReserve</th>
            </tr>
          </thead>
          <tbody>
            {this.renderItems()}
          </tbody>
        </table>
        <div>
          {this.pagination()}
          <div>
            <input type='button' value='<' onClick={this.handleClick} />
            <input type='button' value='>' onClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}