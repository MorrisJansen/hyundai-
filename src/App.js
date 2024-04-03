import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importeer Routes in plaats van Switch
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from './pagina.js';
import Probeersel from './probeersel.js';

function App() {
  return (
    <Router>
      <div>
        <Routes> {/* Gebruik Routes in plaats van Switch */}
          <Route path="/" element={<Pagina />} /> {/* Gebruik element prop */}
          <Route path="/probeersel" element={<Probeersel />} /> {/* Gebruik element prop */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
