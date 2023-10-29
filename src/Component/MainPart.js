import React, {useEffect, useState} from 'react';
import axios from 'axios';

const MainPart = () => {

    const [tabs, setTabs] = useState(null);

    useEffect(() => {
        async function fetchTabs() {
            try{
                const response  = await axios.get('https://raw.githubusercontent.com/OleksiiMaslak/backandless-test-assignment/master/tabs.json');
                await setTabs(response.data);                
            }
            catch(error){
                console.error('Error occured' - error);
            }
        } 
        fetchTabs()
        console.log(tabs);
    }, []);


  return (
<main>
      <div className="container">
        {tabs && (
          <div>
            {tabs.tabs.map((tab) => (
              <p key={tab.id}>
                <a href={tab.path}>{tab.title}</a>
              </p>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default MainPart