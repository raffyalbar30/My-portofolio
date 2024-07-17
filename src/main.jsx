import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom';
import Projectcoffeeshop from './pages/Project._coffe_shop.jsx'
import ProjectPerintis from './pages/Project_perintis.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <Router>
       <Routes>
       <Route path="/" element={<App />}/>
       <Route path="/project/coffeshop" element={<Projectcoffeeshop />} />
       <Route path="/project/perintis" element={<ProjectPerintis />} />
       </Routes>
       </Router>
  </React.StrictMode>,
)
