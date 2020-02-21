import React, {Component} from 'react';

class Counter extends Component {
constructor () {
  super ();
  this.state = {
    /*state is something
  that's gonna change  */
    count: 0,
  }
}

//this is where our methods go
increment = () => {
  this.setState({
    count: this.state.count + 1,
  })
}

decrement = () => {
  this.setState ({
    count: this.state.count - 1,
  })
}

  render () {
    return (
      <div className = "container">
      <div className = "navbar">Counter</div>
      <div className = "counter">
      <h1>{this.state.count}</h1>
      <button type="button">Clear</button>
      <button type="button" onClick={this.increment}>Increment</button>
      <button type="button" onClick={this.decrement}>Decrement</button>
      <button type="button">Single Count</button>
      </div>
      </div>
    )
  }
}

export default Counter;
