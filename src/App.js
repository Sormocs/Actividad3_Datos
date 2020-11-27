import './App.css';

import React from 'react'
import Alert from './Alert';
import StarWarsPeople from './StarWarsPeople'
import logo from './logo.svg';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      });
    }, 1000)
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
            <div>{this.state.counter}</div>
            <Alert count={this.state.counter}></Alert>
            <StarWarsPeople></StarWarsPeople>
          </header>
        </div>
    );
  }
}
