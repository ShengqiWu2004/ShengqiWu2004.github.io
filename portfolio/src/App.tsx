import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import { PortPage } from './pages/PortPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path = "/portfolio" element = {<PortPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
