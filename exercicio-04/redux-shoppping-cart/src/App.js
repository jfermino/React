import React, { Component } from 'react';
import { combineReducers, createStore,applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import logo from './logo.svg';
import './App.css';
import ProdutoList from './views/ProdutoList'
import Carrinho from './views/Carrinho'
import Nav from './components/nav'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import thunk from "redux-thunk";
import ProdutoDetail from './views/ProdutoDetail';
import produtoReducer from './reducers/produtoReducer';
import produtoDetailReducer from './reducers/produtoDetailReducer'

const reducers = combineReducers({
    produtoReducer,
    produtoDetailReducer
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
      <Provider store={createStore(reducers,applyMiddleware(thunk))}>
      <div className="App">
        <Router>
          <div>
            <div className="App-Title">
              <h1>Amazing redux store</h1>
            </div>
            <Nav />
            <Route path="/" exact component={Index} />
            <Route path="/prod" exact component={ProdutoList} />
            <Route path="/prod/:id" exact component={ProdutoDetail} />
            <Route path="/cart" exact component={Carrinho} />
          </div>
        </Router>
      </div>
      </Provider>
    );
  }
}

export default App;
