import React from 'react';
import { Link } from 'react-router-dom'

const Portfolio = () => (
    <div>
        <h2>My Work</h2>
        This is Portfolio page.
        <Link to="/portfolio/1">Item 01</Link>
        <Link to="/portfolio/2">Item 02</Link>
    </div>
);

export default Portfolio