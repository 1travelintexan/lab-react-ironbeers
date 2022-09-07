import React, { useState } from 'react';

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
    const name = e.target.name;
    setNewBeer({
      ...newBeer,
      [name]: value,
    });
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleNewBeer(e, newBeer);
        }}
      >
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newBeer.name}
          onChange={handleChange}
        />
        <label>Tagline:</label>
        <input
          type="text"
          name="tagline"
          value={newBeer.tagline}
          onChange={handleChange}
        />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={newBeer.description}
          onChange={handleChange}
        />
        <label>First Brewed:</label>
        <input
          type="text"
          name="first_brewed"
          value={newBeer.first_brewed}
          onChange={handleChange}
        />
        <label>Brewers Tips:</label>
        <input
          type="text"
          name="brewers_tips"
          value={newBeer.brewers_tips}
          onChange={handleChange}
        />
        <label>Attenuation level:</label>
        <input
          type="number"
          name="attenuation_level"
          value={newBeer.attenuation_level}
          onChange={handleChange}
        />
        <label>Contributed by:</label>
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
