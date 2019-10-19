import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from "react-redux";
import './App.css';
import Nav from './components/nav'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Modelo from './views/modelo';
import Versao from './views/versao';
import Cor from './views/cor';
import modeloReducer from './reducers/modeloReducer';
import versaoReducer from './reducers/versaoReducer';
import corReducer from './reducers/corReducer';
import opcionaisReducer from './reducers/opcionaisReducer';
import Opcionais from './views/opcionais';
import Resumo from './views/resumo';


const reducers = combineReducers({
    modelo : modeloReducer,
    versao: versaoReducer,
    cor: corReducer,
    opcionais: opcionaisReducer

});

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
      <div className="App">
        <Router>
          <div>
            <div className="App-Title">
              <h1>Monte seu Carro</h1>
            </div>
            <Nav />
            <Route path="/" exact component={Modelo} />
            <Route path="/versao/:id" exact component={Versao} />
            <Route path="/cor" exact component={Cor} />
            <Route path="/opcionais" exact component={Opcionais}/>
            <Route path="/resumo" exact component={Resumo} />
          </div>
        </Router>
      </div>
      </Provider>
    );
  }
}

export default App;

