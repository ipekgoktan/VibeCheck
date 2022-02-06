import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from './pages/App';
import Landing from './pages/Landing';
import ColorsPage from './pages/ColorsPage';
import CommentsPage from './pages/CommentsPage';
import EmotionsPage from './pages/EmotionsPage';
import LikesPage from './pages/LikesPage';
import ObjectsPage from './pages/ObjectsPage';
import VibesPage from './pages/VibesPage';
import VibeCheck from './pages/VibeCheck';


ReactDOM.render(
  
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Landing/>}/>
      <Route exact path="/App" element={<App/>}/>
      <Route exact path="/Landing" element={<Landing/>}/>
      <Route exact path="/ColorsPage" element={<ColorsPage/>}/>
      <Route exact path="/CommentsPage" element={<CommentsPage/>}/>
      <Route exact path="/EmotionsPage" element={<EmotionsPage/>}/>
      <Route exact path="/LikesPage" element={<LikesPage/>}/>
      <Route exact path="/VibesPage" element={<VibesPage/>}/>
      <Route exact path="/ObjectsPage" element={<ObjectsPage/>}/>
      <Route exact path="/VibeCheck" element={<VibeCheck/>}/>
    </Routes> 
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
