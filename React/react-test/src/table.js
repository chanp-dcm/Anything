import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SimpleTable extends React.Component {
  render() {
    return(<table calssName='regularTable'>
      <thead><tr>
        <th>名前</th>
        <th>地域</th>
        <th>番号</th>
      </tr></thead>
      <tbody><tr>
        <td>山田太郎</td>
        <td>東京都港区</td>
        <td>85312312</td>
      </tr></tbody>
      <tbody><tr>
        <td>鈴木二郎</td>
        <td>神奈川県横浜市</td>
        <td>242342342343</td>
      </tr></tbody>
    </table>)
  }
}

export {SimpleTable};
