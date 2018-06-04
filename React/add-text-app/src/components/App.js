import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as request from 'superagent'

import { addText, getUserTags } from '../actions/index'

class App extends Component {
  render(){
    return (
    <div>
      <input type='text' ref='input' /><br/>
      <button onClick={(e) => this.onAdd(e)}>AddText</button>
      <ul>
        {
          this.props.state.storedText.map((obj) =>
            <li key={obj.id}>
              {obj.text}
            </li>
          )
        }
      </ul>
      <button onClick={() => this.getTags()}>GetTags</button>
    </div>
    )
  }

  onAdd(e) {
    const input = this.refs.input
    const text = input.value.trim()
    if (!text) return alert('テキストくれメンツ')
    console.log('asd')
    input.value = ''
    this.props.dispatch(addText(text))
  }

  getTags() {
    const url = 'https://qiita.com/api/v2/users/chan-p/following_tags'
    request
      .get(url)
      .query({})
      .end(function(err, res){
        console.log(JSON.parse(res.text)[0]['id'])
        const tag = JSON.parse(res.text)[0]['id']
        this.props.dispatch(getUserTags(tag))
      }.bind(this));
  }
}

const selector = (state) => {
  console.log(state.storedText);
  return { state }
}

// Appコンポーネントをconnect()メソッドでラップした上でエクスポート
// 第一引数には上のselector()メソッドを使って、stateの中からコンポーネントが必要とするデータを指定、第二引数にはコンポーネント自体を指定。
// その上でエクスポート
export default connect(selector)(App)
