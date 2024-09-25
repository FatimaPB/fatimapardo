import React, { useState, useEffect } from 'react';
import './App.css';



import Header from './Componentes/Header';
import CifradoCesar from './Componentes/CifradoCesar';
import CifradoEscitala from './Componentes/CifradoEscitala';
import GuiaUso from './Componentes/GuiaUso';



import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
        <Route path="/cesar" element={<CifradoCesar />} />
        <Route path="/escitala" element={< CifradoEscitala/>} />
        <Route path="/guia" element={< GuiaUso/>} />
        <Route path="/" element={<Navigate to="/guia" />} />
        </Routes>
    </Router>
  );
}

export default App;
