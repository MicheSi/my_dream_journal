import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import AxiosWithAuth from './utils/AxiosWithAuth';

import './App.css';

import Home from './components/home';
import FormikRegisterForm from './components/register';
import SigninForm from './components/signin';
import Dashboard from './components/dashboard';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  const [dreams, setDreams] = useState([])

  useEffect(() => {
    AxiosWithAuth()
        .get('/dreams')
        .then(res => {
            setDreams(res.data)
        })
        .catch(err => console.log('Cannot retrieve dreams', err))
}, [])

  return (
    <div className="App">
      <Switch>
        <Route path='/register' component={FormikRegisterForm}/>
        <Route path='/signin' component={SigninForm}/>
        <PrivateRoute
         path='/dashboard'
         component={Dashboard}
         render={(props) => <Dashboard {...props} dreams={dreams}/>}
        />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
