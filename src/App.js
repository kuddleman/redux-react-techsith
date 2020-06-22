import React from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends React.Component {

  // state = {
  //   age: 21
  // }

  // onAgeUP = () => {
  //   this.setState({
  //     ...this.state,
  //     age: ++this.state.age
  //   })
  // }

  // onAgeDOWN = () => {
  //   this.setState({
  //     ...this.state,
  //     age: --this.state.age
  //   })
  // }

  render(){
    return (
      <div className="App">
        <div>Age:<span>{ this.props.age }</span></div>
        <button onClick={ this.props.onAgeUP }>Age UP</button>
        <button onClick={ this.props.onAgeDOWN }>Age DOWN</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    age:state.age
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAgeUP: () => dispatch({ type:'AGE_UP' }),
    onAgeDOWN: () => dispatch({ type:'AGE_DOWN' })
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( App )
