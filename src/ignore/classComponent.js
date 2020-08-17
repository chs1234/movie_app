import React from 'react';

class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    //this.state.count += 1;
    //this.setState({count: this.state.count + 1}); //bad smell
    this.setState(current => ({count: current.count + 1})); // good 
  };
  minus = () => {
    //this.state.count -= 1;
    this.setState({count: this.state.count + -1});
  };

  componentDidMount() {
    console.log("I mount");
  }

  componentDidUpdate() {
    console.log("I just Updated!!");
  }

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>Hi, I'm Class Component, count number is: {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    )
  }
}

export default App;
