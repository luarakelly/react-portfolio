import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './Pages/Nav'
import Portfolio from './Pages/View/index';

function App() {
  //url navigation 
  return(
    <div className='App'>
      <Router>
        <div>
        <Nav/>
        <Routes>
          <Route path='/' element={<Portfolio/>}/>
          <Route path='*' element={<div>404 Not Found</div>}/>
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
