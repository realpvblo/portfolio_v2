import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from './styles/header.scss'
import Header from './components/header/header'
import Intro from './components/intro/intro';
import Work from './components/work/work';

function App() {

  return (

    <div className="App">
      <Header />
      <Intro />
      <Work />
      {/* <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:slug" element={<ReadArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes> */}
  </div>
  )
}

export default App;
