import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function SingleBeer() {
  let { beerId } = useParams();
  const [singleBeer, setSingleBeer] = useState(null);

  useEffect(() => {
    try {
      async function getOne() {
        let response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );
        setSingleBeer(response.data);
      }
      getOne();
    } catch {}
  }, []);

  if (!singleBeer) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <img
        src={singleBeer.image_url}
        alt="single beer"
        style={{ height: '300px' }}
      />
      <h1>{singleBeer.name}</h1>
      <h2>{singleBeer.tagline}</h2>
      <h4>{singleBeer.first_brewed}</h4>
    </div>
  );
}

export default SingleBeer;
