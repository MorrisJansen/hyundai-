import React from 'react';
import './Table.css';

const Table = () => {
  return (
    <div className="table-container">
      <div className="table-scroll">
        <table className="custom-table">
          <thead>
            <tr>
              <th className="header-cell">Functionaliteiten</th>
              <th className="header-cell hoofd-2">i-Drive</th>
              <th className="header-cell hoofd-3">Comfort<br />
              <p className='prijsaanduiding'>vanaf €275 p/m</p></th>
              <th className="header-cell hoofd-4">Comfort Smart</th>
              <th className="header-cell hoofd-5">Premium</th>
              <th className="header-cell hoofd-6">N Line</th>
              {/* Voeg hier meer headers toe indien nodig */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
              <td>Data 4</td>
              <td>Data 5</td>
              <td>Data 6</td>
              {/* Voeg hier meer datacellen toe indien nodig */}
            </tr>
            {/* Voeg hier meer rijen toe indien nodig */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
