import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <div className="home">
        <NavLink to='/' className="home-button">Home </NavLink>
    </div>

    <div className="pizza">
        <Link to='/pizzaOrder' className="pizza-button"> Pizza Order</Link>
    </div>



  </div>
);

export default SavedList;