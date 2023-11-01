import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { FaTable } from "react-icons/fa6";

const DummyTable = () => {
  const response = useLoaderData();
  const {tabs} = JSON.parse(response);

  return (
    <>
    <h1>{tabs[0].title}<FaTable style={{marginLeft: 10, maxWidth: 25}}/></h1>
      <table>
          <tbody>
              <tr>
                  <td>Dummy</td>
                  <td>Table</td>
              </tr>
          </tbody>
      </table>
    </>
  );
};

export default DummyTable
