import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProdutoList from './views/ProdutoList'
import Carrinho from './views/Carrinho'
import Nav from './components/nav'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProdutoDetail from './views/ProdutoDetail';

function Index(){
    return(
      <div className="home-content">
        <h2>Index</h2>
      </div>
    ) 
}

function App() {
  return (
    <div className="App">
      <Router>
        <div>
            <div className="App-Title">
              <h1>Amazing redux store</h1>
            </div>
          <Nav/>
          <Route path="/" exact component={Index}/>
          <Route path="/prod" exact component={ProdutoList}/>
          <Route path="/prod/:id" exact component ={ProdutoDetail}/>
          <Route path="/cart" exact component={Carrinho}/>

        </div>
      </Router>
    </div>


  );
}

export default App;
