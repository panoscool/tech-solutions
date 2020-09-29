import React from 'react';
import CardItem from './CardItem';
import data from '../data.json';

function CardGrid() {
  return (
    <div className="grid-container">
      <div className="card-grid">
        {data.map((obj, idx) => (
          <CardItem key={idx} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;