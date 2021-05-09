import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import RandomBeer from './components/Random-Beer';
import Beers from './components/Beers';
import NewBeer from './components/New-Beer';

class App extends Component {
  state = {
    beers: [],
  };

  render() {
    const { beers } = this.state;
    return (
      <div className="App">
        <Home />

        <Switch>
          <Route
            exact
            path="/beers"
            render={() => {
              return <Beers beers={beers} />;
            }}
          />

          <Route
            path="/randombeer"
            render={() => {
              return <RandomBeer />;
            }}
          />

          <Route
            path="/newbeer"
            render={() => {
              return <NewBeer />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
