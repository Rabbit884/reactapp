import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'

export default class AppHome extends React.Component {

  post = () => {
    this.props.post({
      display: this.props.home.display,
      square: this.props.card.square
    });
  }

  render () {
    const style = {
      textAlign: 'center'
    }

    return (
      <div style={style}>
        <h1>React.js Trial</h1>
        <p>
          JavaScriptの勉強のために作成しています。
        </p>
        <br />
        <br />
        <RaisedButton label="TEST 1" onClick={ this.post.bind(this) } />
        <br />
        <br />
        <RaisedButton label="TEST 2" />
      </div>
    )
  }
}
