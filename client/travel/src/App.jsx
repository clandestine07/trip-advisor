import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Search from './components/Search'
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';

function App() {
 

  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </Router>
  )
}

export default App
