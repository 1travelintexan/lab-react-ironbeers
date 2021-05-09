import React, { Component } from 'react';

class Beers extends Component {
  render() {
    const { beers } = this.props;
    console.log(this.props);
    return (
      <div>
        <h2> List of Beers!</h2>
        {beers.map((beer) => {
          return (
            (<img src={beer.image_url} height="150" />),
            (<h2>{beer.name}</h2>),
            (<h3>{beer.tagline}</h3>)
          );
        })}
      </div>
    );
  }
}
export default Beers;
