import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import Feed from './components/Feed'
import Profile from './components/Profile'
import ArticleView from './components/ArticleView'
import Editor from './components/Editor'
import SignInWith from './components/SignInWith'

class App extends Component {
  render() {
    const pathname = window.location.pathname;
    return (
      <div className="App">
        {!pathname.includes('editor') ? <Header /> : ""}
      </div>
    );
  }
}

export default App;
