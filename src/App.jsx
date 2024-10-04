import React, { useState, useEffect } from 'react';
import './App.css';



import Header from './Componentes/Header';
import CifradoCesar from './Componentes/CifradoCesar';
import CifradoEscitala from './Componentes/CifradoEscitala';
import GuiaUso from './Componentes/GuiaUso';
import CifradoIDEA from './Componentes/CifradoIDEA';
import Blake3Hash from './Componentes/Blake3Hash';
import MQV from './Componentes/CompMQV';
import Frame from './Componentes/Frame';
import Footer from './Componentes/Footer';
import ComparisonFramework from './Componentes/ComparisonFramework';



import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
        <Route path="/" element={<Navigate to="/guia" />} />
        <Route path="/guia" element={< GuiaUso/>} />
        <Route path="/cesar" element={<CifradoCesar />} />
        <Route path="/escitala" element={< CifradoEscitala/>} />
        <Route path="/idea" element={< CifradoIDEA/>} />
        <Route path="/mqv" element={< MQV/>} />
        <Route path="/blake" element={< Blake3Hash/>} />
        <Route path="/compar" element={< ComparisonFramework/>} />
        <Route path="/frame" element={< Frame/>} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
