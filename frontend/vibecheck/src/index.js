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
import EngagementPage from './pages/EngagementPage';
import ItemsPage from './pages/ItemsPage';
import LikesPage from './pages/LikesPage';
import VibesPage from './pages/VibesPage';
import Redirect from './pages/Redirect';

ReactDOM.render(
  
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App/>}/>
      <Route exact path="/App" element={<App/>}/>
      <Route exact path="/Landing" element={<Landing/>}/>
      <Route exact path="/ColorsPage" element={<ColorsPage/>}/>
      <Route exact path="/CommentsPage" element={<CommentsPage/>}/>
      <Route exact path="/EmotionsPage" element={<EmotionsPage/>}/>
      <Route exact path="/EngagementPage" element={<EngagementPage/>}/>
      <Route exact path="/ItemsPage" element={<ItemsPage/>}/>
      <Route exact path="/LikesPage" element={<LikesPage/>}/>
      <Route exact path="/VibesPage" element={<VibesPage/>}/>
      <Route exact path="/Redirect" element={<Redirect/>}/>
    </Routes> 
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
