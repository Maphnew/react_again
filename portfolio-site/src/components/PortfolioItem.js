import React from 'react';

const PortfolioItem = (props) => (
    <div>
        <h2>My Portfolio Item</h2>
        <p>ID: {props.match.params.id}</p>
    </div>
);

export default PortfolioItem