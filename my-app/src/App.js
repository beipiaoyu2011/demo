import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { action } from "./actions"

import { connect } from 'react-redux'

class Test extends Component {
  constructor(props){
    super(props)
  }
  render(){
    console.log(this);
    
    return (<div>0000000</div>)
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    // this.props.add();
    console.log(this);
    this.state = {a: 55}
    // this.props._setState({
    //   name: 99
    // })
    // this.props.addItem({
    //   name: 99
    // })
    // setTimeout(()=>{
    //   console.log(this.props._setState(this.state));
    // })

  }
  render() {
    console.log(this);
    
    return (
      <div className="App">
        11
        <Test></Test>
      </div>
    );
  }

}


export default connect(
  (state) => {
    return {
      user: state.todos
    }
  },
  action('app')
  // (dispatch, ownProps) => {
  //   return {
  //     add: () => {
  //       dispatch(addItem(88))
  //     }
  //   }
  // }
)(App);
