import React from 'react';
import './App.css';
import Header from './components/Header';
import Stackoverflow from './components/Stackoverflow/index'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
           <Routes>
              <Route exact path="/" element={<Stackoverflow/>}/>
            </Routes>
        </BrowserRouter>
         
    </div>
  );
}

export default App;
