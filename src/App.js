import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';

import StillUp from './components/page/StillUp'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={StillUp} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
