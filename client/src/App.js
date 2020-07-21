import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './components/home';
import RegisterForm from './components/register';
import SigninForm from './components/signin';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/register' component={RegisterForm}/>
        <Route path='/signin' component={SigninForm}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
