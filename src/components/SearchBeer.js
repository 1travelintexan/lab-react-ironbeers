import React from 'react';

function SearchBeer({ handleFilter }) {
  return (
    <div>
      <input onChange={handleFilter} placeholder="Search for a beer" />
    </div>
  );
}

export default SearchBeer;
