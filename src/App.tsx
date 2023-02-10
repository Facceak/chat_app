import React from 'react';
import { ReactDOM } from 'react';
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LoginPage from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
