import React from 'react';

import './card.style.css';

export const Card = (props) => (
    <div className="card-container">
        <img alt="Star" src="/images/logo192.png"/>
        <h2>{ props.star.name } </h2>
    </div>
);