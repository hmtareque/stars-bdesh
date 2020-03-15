import React from 'react';

import './card.style.css';

export const Card = (props) => (
    <div className="card-container">
        <h1>{ props.star.name } </h1>
    </div>
);