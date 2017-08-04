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
        <td className='id' >{ID}</td>
        <td className='abv' >{abbreviation}</td>
        <td className='active' >{active}</td>
        <td className='manComp' >{managementCompany}</td>
        <td className='name' >{name}</td>
        <td className='tor' >{targetOperatingReserve}</td>
      </tr>
    );
  }
}
