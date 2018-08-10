import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class DispTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var tableBody = this.props.data.map(function(person){
      return (<tbody><tr key={person.id}>
        <th>{person.name}</th>
        <th>{person.area}</th>
        <th>{person.number}</th>
      </tr></tbody>)
    })

    return (<table className='regularTable'>
      <thread>
        <tr>
          <th>名前</th>
          <th>地域</th>
          <th>番号</th>
        </tr>
      </thread>
      {tableBody}
    </table>)
  }
}

export {DispTable};
