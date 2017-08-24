import React from 'react'

export default class App extends React.Component {
  render() {
    return <div>
      <span>{ this.props.counter }</span>
      <button onClick={ () => this.props.onClickIncrement() }>Increment</button>
      <button onClick={ () => this.props.onClickDecrement() }>Decrement</button>
      <button onClick={ () => this.props.onClickReset() }>Reset</button>
    </div>
  }
}
