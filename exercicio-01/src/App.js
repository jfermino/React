import React from 'react';
import Footer from './modules/Footer';
import Menu from './modules/Menu';
import NavLocal from './modules/NavLocal';
import Article from './modules/Article';

import './App.css';

function App() {
  return (
    <div>
      <Menu/>
      <NavLocal/>
      <Article/>
    <Footer/>
    </div>
  );
}

export default App;
