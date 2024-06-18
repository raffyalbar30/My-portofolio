import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom';
import ViewDetail from './pages/View_detail.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <Router>
       <Routes>
       <Route path="/" element={<App />}/>
       <Route path="/project/detail" element={<ViewDetail />} />
       </Routes>
       </Router>
  </React.StrictMode>,
)
