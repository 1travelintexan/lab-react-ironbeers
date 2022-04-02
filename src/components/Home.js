import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/beers.png';
import img2 from '../assets/new-beer.png';
import img3 from '../assets/random-beer.png';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/beers">
          <h1>Beers</h1>
        </Link>
        <img src={img1} alt="pic" width="100%" />
        <Link to="/random-beer">
          <h2>Random Beer</h2>
        </Link>
        <img src={img3} alt="pic2" width="100%" />
        <Link to="/newbeer">
          <h2>New Beer</h2>
        </Link>
        <img src={img2} alt="pic" width="100%" />
      </div>
    );
  }
}
export default Home;
