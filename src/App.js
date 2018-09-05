import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';


class App extends Component {
  state = { kucingIn: false, namakucing : "Briana" }

  onKucingBtnPress = () => {
    this.setState({ kucingIn: true, namakucing: "Rihanna" });
  }
 
  render() {
    // var obj1 = { text : "BDO Image 1"};
    console.log("render dijalankan");
    return (
      <div className="App">
        <Header loggedIn={this.state.kucingIn} username={this.state.namakucing}/>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/movielist" component={MovieList}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
          
        </div>
      </div>
    );
  }
}

export default App;
