import React from 'react';
import { useLoaderData } from 'react-router-dom';


const DummyList = () => {
  
    const response = useLoaderData();
    const {tabs} = JSON.parse(response);
    return (
      <>
      <h1>{tabs[2].title}</h1>
        <table>
            <tbody>
                <tr>
                    <td>Dummy</td>
                    <td>List</td>
                </tr>
            </tbody>
        </table>
      </>
    );
};

export default DummyList

