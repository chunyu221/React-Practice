// import logo from './logo.svg';
import './App.css';
import Navi from './Navi';
import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom"
import Login from './Login';
import Home from './Home';
import Content from './Content';
import Reference from './Reference';
import Signup from './Signup';
// import  Component  from './Origin';
// import InputBox from './InputBox';

function App() {
  return (
    <div>
      <Navi />
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/content' element={<Content />} />
          <Route path='/reference' element={<Reference />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </HashRouter>
    </div>


  );
}

export default App;
