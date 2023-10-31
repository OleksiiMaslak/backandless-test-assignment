import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DummyChart = () => {
  const response = useLoaderData();
  const {tabs} = JSON.parse(response);

  return (
    <>
    <h1>{tabs[1].title}</h1>
      <table>
          <tbody>
              <tr>
                  <td>Dummy</td>
                  <td>Chart</td>
              </tr>
          </tbody>
      </table>
    </>
  );
};

export default DummyChart
