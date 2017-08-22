import React from 'react'

export default class App extends React.Component {
  render() {
    return <div>
      <span>{ this.props.fuga }</span>
      <button onClick={ () => this.props.handleClick() }>Add</button>
    </div>
  }
}
