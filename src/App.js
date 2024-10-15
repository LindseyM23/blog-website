import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from './pages/Home'; // Import other components
import About from './pages/About';
import Footer from './components/Footer';
import BlogPost from './pages/BlogPost';
import Category from './pages/Category';



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/:category/:id" element={<BlogPost />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;


