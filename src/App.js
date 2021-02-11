import logo from './logo.svg';
import './App.css';
import React from 'react';
import TestComponent from './components/TestComponent'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {totalClicks: 0}
  }

  addClick = () => {
    this.setState({totalClicks: this.state.totalClicks + 1})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Clicks {this.state.totalClicks}
          </p>
          <TestComponent name="Pelle" age="20" addClick={this.addClick}/>
          <TestComponent name="Linus" age="20" addClick={this.addClick}/>
          <TestComponent name="Lisa" age="20" addClick={this.addClick}/>
          <TestComponent name="Anna" age="20" addClick={this.addClick}/>
        </header>
      </div>
    );
  }
}

export default App;
