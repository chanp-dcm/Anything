import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TableHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var tableTitles = this.props.data.map(function(cName, i){
      return (<th key={i}>
        {cName}
      </th>);
    });

    return (<thead>
      <tr>
        {tableTitles}
      </tr>
    </thread>);
  }
}

class TableBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var tableRows = this.props.data.map(function(person){
      return (<tr key={person.id}>
        <td>{person.name}</td>
        <td>{person.area}</td>
        <td>{person.number}</td>
      </tr>);
    });

    return (<tbody>
      <tr>{tableRows}</tr>
    </tbody>);
  }
}

class Disptable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<table className='regularTable'>
      <TableHeader titile={this.props.data} />
      <TableBody data={this.props.data} />
    </table>)
  }
}

export {DispTable};
