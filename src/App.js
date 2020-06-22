import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    age: 21
  }

  onAgeUP = () => {
    this.setState({
      ...this.state,
      age: ++this.state.age
    })
  }

  onAgeDOWN = () => {
    this.setState({
      ...this.state,
      age: --this.state.age
    })
  }

  render(){
    return (
      <div className="App">
        <div>Age:<span>{ this.state.age }</span></div>
        <button onClick={ this.onAgeUP }>Age UP</button>
        <button onClick={ this.onAgeDOWN }>Age DOWN</button>
      </div>
    )
  }
}

export default App;
