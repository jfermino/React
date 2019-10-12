import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from "react-redux";
import './App.css';
import ProdutoList from './views/ProdutoList'
import Carrinho from './views/Carrinho'
import Nav from './components/nav'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProdutoDetail from './views/ProdutoDetail'; 
import carrinhoReducer from './reducers/carrinhoReducer'

const reducers = combineReducers({
  car: carrinhoReducer
});

function Index() {
  return (
    <div className="home-content">
      <h2>Index</h2>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
      <div className="App">
        <Router>
          <div>
            <div className="App-Title">
              <h1>Amazing redux store</h1>
            </div>
            <Nav />
            <Route path="/" exact component={Index} />
            <Route path="/prod" exact component={ProdutoList} />
            <Route path="/prod/:id" component={ProdutoDetail} />
            <Route path="/cart" component={Carrinho} />
          </div>
        </Router>
      </div>
      </Provider>
    );
  }
}

export default App;
