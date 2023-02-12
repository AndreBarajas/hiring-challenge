import './App.css';
import React from "react"
import Post from './Post'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Travel from './components/Travel'
import Lifestyle from './components/Lifestyle'
import Business from './components/Business'
import Food from './components/Food'
import Work from './components/Work'

function App() {
  return (
    <BrowserRouter >
      <header>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/travel'>Travel</Link>
          <Link to='/lifestyle'>Lifestyle</Link>
          <Link to='/business'>Business</Link>
          <Link to='/food'>Food</Link>
          <Link to='/work'>Work</Link>
        </div>
        
      </header>

      <Routes>
        <Route path='/' element={<Post />}></Route>
        <Route path='/travel' element={<Travel />}></Route>
        <Route path='/lifestyle' element={<Lifestyle />}></Route>
        <Route path='/business' element={<Business />}></Route>
        <Route path='/food' element={<Food />}></Route>
        <Route path='/work' element={<Work />}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
