import React, {useEffect, useState} from 'react';
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
import GetTabsId from '../Hooks/GetTabsId';

const Layout = () => {

  const [tabs, setTabs] = useState([]) 

  useEffect(() => {
    async function fetchData() {
        try {
            const tabsList = await GetTabsId();
            console.log(tabsList);
            setTabs(tabsList);
        } catch (error) {
            console.error("Error occurred", error);
        }
    }

    fetchData();
}, []);

  return (
    <>

    <header>
      {tabs.sort((a, b) => a.order - b.order).map(item => <NavLink to={`/${item.id}`} className= 'header-link' key={item.order}>{item.title}</NavLink>)}

    </header>
    <main className="container">
        <Outlet></Outlet>
    </main>
    
    </>
  )
}

export default Layout