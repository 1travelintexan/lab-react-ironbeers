import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RandomBeer() {
  const [random, setRandom] = useState(null);
  useEffect(() => {
    let callingRandom = async () => {
      try {
        let response = await axios.get(
          'https://ih-beers-api2.herokuapp.com/beers/random'
        );
        console.log(response.data);
        setRandom(response.data);
      } catch (err) {
        console.log(err, 'error');
      }
    };
    callingRandom();
  }, []);

  if (!random) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h1>Random-Beer</h1>
      <div style={{ display: 'flex' }}>
        <img src={random.image_url} alt="random beer " />
        <div>
          <h2>{random.name}</h2>
          <h3>{random.tagline}</h3>
          <h5>{random.first_brewed}</h5>
          <h5>{random.attenuation_level}</h5>
          <p>{random.description}</p>
          <p>{random.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default RandomBeer;
