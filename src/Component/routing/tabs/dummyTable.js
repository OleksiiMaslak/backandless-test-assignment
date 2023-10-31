import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DummyTable = () => {
  const response = useLoaderData();
  const {tabs} = JSON.parse(response);

  return (
    <>
    <h1>{tabs[0].title}</h1>
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
