import React from 'react';
import { Link } from 'react-router-dom';
import SearchBeer from './SearchBeer';

function Beers({ beers, handleFilter }) {
  if (!beers) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <SearchBeer handleFilter={handleFilter} />
      {beers.map((elem, i) => {
        return (
          <Link key={elem + i} to={`/beers/${elem._id}`}>
            <div className="beer">
              <img
                src={elem.image_url}
                alt="beer"
                style={{ height: '200px' }}
              />
              <div>
                <h3>{elem.name}</h3>
                <h3>{elem.tagline}</h3>
                <h5>Create by:{elem.contributed_by}</h5>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Beers;
