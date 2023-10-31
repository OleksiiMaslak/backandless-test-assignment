import React from 'react';
import { NavLink,  } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
        <h2>Ooops...</h2>
        <p>Something go wrong, please go to other page:</p>
        <ul>
            <li><NavLink to="/dummyList" className= 'error-link'>DummyList</NavLink></li>
            <li><NavLink to="/dummyTable" className= 'error-link'>DummyTable</NavLink></li>
            <li><NavLink to="/dummyChart" className= 'error-link'>DummyChart</NavLink></li>
        </ul>
    </>
  )
}

export default ErrorPage