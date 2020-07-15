import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';
import Proyecto from './soass/Project'

function App() {
  return (
    <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Proyecto} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
