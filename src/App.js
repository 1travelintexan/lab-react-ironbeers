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
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [filteredBeers, setFilteredBeer] = useState(null);

  const handleNewBeer = async (e, newBeer) => {
    e.preventDefault();
    await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer);
    navigate('/');
  };

  useEffect(() => {
    const getBeers = async () => {
      const resAxios = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      let data = resAxios.data;
      setFilteredBeer(data);
    };
    getBeers();
  }, []);

  async function handleFilter(e) {
    let searchedBeer = e.target.value;
    async function searchingBeers() {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchedBeer}`
      );
      setFilteredBeer(response.data);
    }
    searchingBeers();
  }

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route
          path={'/beers'}
          element={<Beers beers={filteredBeers} handleFilter={handleFilter} />}
        />
        <Route path={'/random-beer'} element={<RandomBeer />} />
        <Route path={'/beers/:beerId'} element={<SingleBeer />} />
        <Route
          path={'/new-beer'}
          element={<NewBeer handleNewBeer={handleNewBeer} />}
        />
      </Routes>
    </div>
  );
}

export default App;
