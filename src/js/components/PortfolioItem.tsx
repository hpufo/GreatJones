import * as React from 'react';

export default class PortfolioItem extends React.Component<any, any> {
  render() {
    // Deconstructing the items obj into these consts
    const {
      ID,
      abbreviation,
      active,
      managementCompany,
      name,
      targetOperatingReserve
    } = this.props.item;
    return (
      <tr className='.item'>
        <td>{ID}</td>
        <td>{abbreviation}</td>
        <td>{active}</td>
        <td>{managementCompany}</td>
        <td>{name}</td>
        <td>{targetOperatingReserve}</td>
      </tr>
    );
  }
}
