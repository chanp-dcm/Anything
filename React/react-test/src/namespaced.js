import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ContactTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<table>
      {this.props.children}
    </table>)
}

class Header extends React.Component {
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

class Body extends React.Component {
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

class DispTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<ContactTable className='regularTable'>
      <Header titile={this.props.data} />
      <Body data={this.props.data} />
    </ContactTable>)
  }
}
