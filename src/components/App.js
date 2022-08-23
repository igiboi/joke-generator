import React, { Component } from 'react';
import Header from './../components/Header';
import './App.css';
import Joke from './../components/Joke';

class App extends Component {
  state = {
    appView: true
  }

  viewInfo = () => {
    this.setState({
      appView: false
    })
  }

  viewApp = () => {
    this.setState({
      appView: true
    })
  }

  view = () =>{
    if(this.state.appView){
      return(
          <Joke />
    )
    }
  }
  render() {
    return (
      <div className="App">
          <Header viewApp={this.viewApp}/>
          {this.view()}
      </div>
       
    );
  }
}

export default App;
