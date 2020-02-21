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

singleCount = () => {
  this.setState ({
    count: this.state.count * 1,
  })
}

doubleCount = () => {
  this.setState ({
    count: this.state.count * 2,
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
      <button type="button" id="singlecount" onClick={this.singleCount}>Single Count</button>
      <button type="button" id="doublecount"onClick={this.doubleCount}>Double Count</button>
      </div>
      </div>
    )
  }
}



export default Counter;
