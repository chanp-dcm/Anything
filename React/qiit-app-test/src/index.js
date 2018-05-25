import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import request from 'request';

class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'before'
    };
  }

  render() {
    let status = "status";

    var style = {
      container: {
        backgroundColor: "#9ACD32",
        width: 900
      }
    }

    return  (
      <div className="timeline">
        <div style={style.container}>メニューバー</div>
        <td align="center">
          align="center"を指定すると中央寄せです。
          </td>
          <div className="line">
            game-bord
          </div>
      </div>
    );
  }
}



ReactDOM.render(<TimeLine />, document.getElementById("root"));
