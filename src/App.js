import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import RandomBeer from './components/Random-Beer';
import Beers from './components/Beers';
import NewBeer from './components/New-Beer';

class App extends Component {
  state = {
    beers: [],
  };

  componentDidMount = () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      this.setState({ beers: response.data });
    });
  };

  render() {
    const { beers } = this.state;
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
        </nav>
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
