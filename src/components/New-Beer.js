import React, { useState } from 'react';
import Header from './Header';

function NewBeer({ handleNewBeer }) {
  const [newBeer, setNewBeer] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  });

  function handleChange(e) {
    const value = e.target.value;
    setNewBeer({
      ...newBeer,
      [e.target.name]: value,
    });
  }
  return (
    <div>
      <Header />
      <form
        onSubmit={(e) => {
          handleNewBeer(e, newBeer);
        }}
      >
        <input
          type="text"
          name="name"
          value={newBeer.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tagline"
          value={newBeer.tagline}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={newBeer.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="first_brewed"
          value={newBeer.first_brewed}
          onChange={handleChange}
        />
        <input
          type="text"
          name="brewers_tips"
          value={newBeer.brewers_tips}
          onChange={handleChange}
        />
        <input
          type="text"
          name="attenuation_level"
          value={newBeer.attenuation_level}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contributed_by"
          value={newBeer.contributed_by}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewBeer;
