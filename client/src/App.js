import React, { Component } from 'react'
import UnsplashList from './components/UnsplashList';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import OneSplash from './components/OneSplash';
import FreshPhotos from './components/FreshPhotos';


class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Switch>
         <Route exact path="/" component={FreshPhotos} />
        <Route exact path="/unsplash" component={UnsplashList} />
         <Route exact
        path="/unsplash/:id" 
        render={request => {
          const id = request.match.params.id;
          // console.log(id);
          return <OneSplash id={id} />;
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
