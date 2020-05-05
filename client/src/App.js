import React, { Component } from 'react'
import UnsplashList from './components/UnsplashList';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Switch>
         <UnsplashList />
        </Switch>
          <Footer />
      </div>
      </Router>
    )
  }
}

export default App;
