import React, { Component } from 'react'
import UnsplashList from './components/UnsplashList';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import OneSplash from './components/OneSplash';
import FreshPhotos from './components/FreshPhotos';
import Collections from './components/Collections';
import OneCollection from './components/OneCollection';
import Animals from './components/Animals';
import Nature from './components/Nature';
import Wallpapers from './components/Wallpapers';
import  People from './components/People';
import Travel from './components/Travel';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Switch>
         <Route exact path="/" component={FreshPhotos} />
        <Route exact path="/unsplash" component={UnsplashList} />
        <Route exact path="/collections" component={Collections} />
        <Route  path="/animals" component={Animals} />
        <Route  path="/wallpapers" component={Wallpapers} />
        <Route  path="/nature" component={Nature} />
        <Route  path="/people" component={People} />
        <Route  path="/travel" component={Travel} />
         <Route exact
        path="/unsplash/:id" 
        render={request => {
          const id = request.match.params.id;
          // console.log(id);
          return <OneSplash id={id} />;
        }}
      />

<Route exact
        path="/collection/:id" 
        render={request => {
          const id = request.match.params.id;
          // console.log(id);
          return <OneCollection id={id} />;
        }}
      />
        </Switch>
          <Footer />
      </div>
      </Router>
    )
  }
}

export default App;
