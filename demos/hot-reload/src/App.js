import React, { Component } from 'react';

export default class App extends Component {

  constructor() {
    super();
    this.state = {counter: 0};
  }

  componentDidMount() {
    setInterval(() => this.setState({counter: this.state.counter + 1}), 1000);
  }

  render() {
    return <h1>Hello, world {this.state.counter}</h1>;
  }
}
