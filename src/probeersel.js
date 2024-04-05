import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './Table.css';

const Table = () => {
  const functionaliteiten = [
    "Actieve rijbaanassistentie (LKA)",
    "Cruise Control met limiet",
    "Noodremassistent (FCA) met voetgangerherkenning",
    "eCall (Emergency Call)",
    "Start/Stop systeem",
    "Achterbank in delen neerklapbaar",
    "Zij- en gordijnairbags",
    "ABS",
    "Vermoeidheidsherkenning",
    "8 inch multimediascherm",
    "USB aansluiting",
    "Android Auto (voorbereiding) / Apple CarPlay",
    "Airconditioning (manueel)",
    "8 inch multimediascherm met navigatie",
    "Achteruitrijcamera met dynamische hulplijnen",
    "Snelheidsbordenherkenning (ISLW)",
    "Airconditioning (volautomatisch)",
    "Parkeersensoren achter",
    "3D afwerking interieurdelen",
    "16-inch lichtmetalen velgen",
    "Verwarmde stoelen voor",
    "Draadloos telefoon opladen",
    "Verwarmd stuurwiel"
  ];

  return (
    <div className="table-container">
      <div className="table-scroll">
        <table className="custom-table">
          <thead>
            <tr>
              <th className="header-cell hoofd-1">Functionaliteiten</th>
              <th className="header-cell hoofd-2">i-Drive</th>
              <th className="header-cell hoofd-3">Comfort<br />
              <p className='prijsaanduiding'>vanaf €275 p/m</p></th>
              <th className="header-cell hoofd-4">Comfort Smart</th>
              <th className="header-cell hoofd-5">Premium</th>
              <th className="header-cell hoofd-6">N Line</th>
            </tr>
          </thead>
          <tbody>
            {functionaliteiten.map((item, index) => (
              <tr key={index}>
                <td>{item}</td>
                <td className='icon divider'><FontAwesomeIcon icon={index < 9 ? faCheckCircle : faTimesCircle} style={{ color: index < 9 ? "#002e6b" : "#fd1212" }} size="2x" /></td>
                <td className='icon divider'><FontAwesomeIcon icon={index < 13 ? faCheckCircle : faTimesCircle} style={{ color: index < 13 ? "#002e6b" : "#fd1212" }} size="2x" /></td>
                <td className='icon divider'><FontAwesomeIcon icon={index < 16 ? faCheckCircle : faTimesCircle} style={{ color: index < 16 ? "#002e6b" : "#fd1212" }} size="2x" /></td>
                <td className='icon divider'><FontAwesomeIcon icon={index < 19 ? faCheckCircle : faTimesCircle} style={{ color: index < 19 ? "#002e6b" : "#fd1212" }} size="2x" /></td>
                <td className='icon divider'><FontAwesomeIcon icon={index < 19 ? faCheckCircle : faTimesCircle} style={{ color: index < 19 ? "#002e6b" : "#fd1212" }} size="2x" /></td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
