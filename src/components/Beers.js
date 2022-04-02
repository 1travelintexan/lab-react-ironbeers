import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function Beers({ beers }) {
  return (
    <div>
      <Header />
      {beers.map((elem, i) => {
        return (
          <Link to={`/beers/${elem._id}`}>
            <div key={elem + i} className="beer">
              <img
                src={elem.image_url}
                alt="beer image"
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
