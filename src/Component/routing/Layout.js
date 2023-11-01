import React, {useEffect, useState} from 'react';
import { NavLink, Outlet, useNavigate,  } from 'react-router-dom';
import GetTabsId from '../Hooks/GetTabsId';


const Layout = () => {

  const [tabs, setTabs] = useState([]);
  const navigate = useNavigate();
  const [showDefaultOption, setShowDefaultOption] = useState(true); 
  // const {state} = useNavigation();


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

const handleSelectChange = (event) => {
  const selectedTabId = event.target.value;
  if (selectedTabId) {
    setShowDefaultOption(false); // Скрываем опцию по умолчанию после выбора
  }
  navigate(`/${selectedTabId}`);
};

  return (
    <>
    {/* {state === "loading" ? <h2>Loading</h2> : null} - to be honest, loader not needed here */}

    <header className="header-container">
    <div className="header-container">
    <select className="header-select" onChange={handleSelectChange}>
            {showDefaultOption && (
              <option value="">Choose Dummy Page</option>
            )}
            {tabs.sort((a, b) => a.order - b.order).map((item) => (
              <option key={item.order} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
    </div>


      {/* {tabs.sort((a, b) => a.order - b.order).map(item => <NavLink to={`/${item.id}`} className= 'header-link' key={item.order}>{item.title}</NavLink>)} */}

    </header>
    <main className="container">
        <Outlet></Outlet>
    </main>
    
    </>
  )
}

export default Layout