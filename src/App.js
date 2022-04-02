import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import RandomBeer from './components/Random-Beer';
import Beers from './components/Beers';
import NewBeer from './components/New-Beer';
import SingleBeer from './components/SingleBeer';

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const getBeers = async () => {
      const resAxios = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      let data = resAxios.data;
      setBeers(data);
    };
    getBeers();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/beers'} element={<Beers beers={beers} />} />
        <Route path={'/random-beer'} element={<RandomBeer />} />
        <Route path={'/beers/:beerId'} element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;
