import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import StillUp from './components/page/StillUp'

function App() {
  AOS.init({
    offset: 220,
    duration: 600,
    once: true
  });
  return (
    <BrowserRouter basename='stillup'>
        <Switch>
          <Route exact path='/' component={StillUp} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
