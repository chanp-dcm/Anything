import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {TextArea} from './textarea';
import {CheckBox} from './checkbox';
import {ForSubmit} from './forsubmit';
import {SimpleTable} from './table';
import {DispTable} from './maptable';
import {MultiElement} from './multielement';
// import {DispTable} from './namespaced';
import {Evaluator} from './evaluator';
import {ColorButton} from './colorbutton';
import {TextInput} from './textinput';


var tableData = [
  {id:1, name:'山田太郎', area:'東京都港区', number:'123123'},
  {id:2, name:'山田太郎', area:'東京都港区', number:'123123'},
  {id:3, name:'山田太郎', area:'東京都港区', number:'123123'}
]

var tableColumns = ['名前', '地域', '番号']

var myAttributes = {
  type: 'checkbox',
  checked: 'true',
  size: 8
}

var myStyle = {
  fontStyle: 'normal',
  fontFamily: 'Courier',
  color: 'brown'
}

var myStyle2 = {
  color: '#A04020',
  backgroudColor: '#90C0A0',
  fontFamily: 'Serif',
  fontSize: 22
}

ReactDOM.render(
  // <MultiElement />,
  // <Evaluator />,
  // <p><input {...myAttributes}/>Checke Me!</p>,
  // <h2 style={{...myStyle}}>Lets Spread!</h2>,
  // <ColorButton
  //   style={{...myStyle2}}
  //   type='button'
  //   disabled={false}
  // >Clicked Me!</ColorButton>,
  // <TextInput />,
  // <CheckBox />,
  // <TextArea dispText='未編集'/>,
  // <ForSubmit selection={[]} />,
  // <SimpleTable />,
  <DispTable data={tableData}/>,
  // <DispTable title={tableColumns} data={tableData}/>,
  // <DispTable title={tableColumns} data={tableData}/>,
  document.getElementById('content')
)
