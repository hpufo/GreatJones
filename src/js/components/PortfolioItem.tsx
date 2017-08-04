import * as React from 'react';

export default class PortfolioItem extends React.Component<any, any> {
  render() {
    return (
      <tr>
        <td>{this.props.obj.ID}</td>
        <td>{this.props.obj.abbreviation}</td>
        <td>{this.props.obj.active}</td>
        <td>{this.props.obj.managementCompany}</td>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.targetOperatingReserve}</td>
      </tr>
    );
  }
}
