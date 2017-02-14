import React from 'react'
import { connect } from 'react-redux'
import App from '../components/app'
import AppActions from '../actions/app'

// グローバルなstateから必要な値をとってきて、コンポーネントのthis.propsとしてセット
// 今回はいずれにしろstateのプロパティには{fuga}しか無いので、stateをまるごと返してます
function mapStateToProps(state) {
  return state
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    handleAdd: () => { dispatch(AppActions.increment()) },
    handleCut: () => { dispatch(AppActions.decrement()) },
    setDisplay: (x) => { dispatch(AppActions.setdisplay(x)) }
  }
}



//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)