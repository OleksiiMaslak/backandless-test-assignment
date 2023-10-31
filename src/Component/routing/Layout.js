import React from 'react';
import { NavLink, Outlet, useNavigation, useLoaderData } from 'react-router-dom';

const Layout = ({data}) => {
  const {state} = useNavigation();
  const tabs = useLoaderData();
  console.log(tabs)
  return (
    <>
    {state === "loading" ? <div>Loading...</div>: null}
    <header>
        <NavLink to="/dummyList" className= 'header-link'>DummyList</NavLink>
        <NavLink to="/dummyTable" className= 'header-link'>DummyTable</NavLink>
        <NavLink to="/dummyChart" className= 'header-link'>DummyChart</NavLink>
    </header>
    <main className="container">
        <Outlet></Outlet>
    </main>
    
    </>
  )
}

export default Layout