import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import AxiosWithAuth from './utils/AxiosWithAuth';

import './App.css';

import Home from './components/home';
import RegisterForm from './components/formikRegister';
import SigninForm from './components/formikSignin';
import Dashboard from './components/dashboard';
import PrivateRoute from './utils/PrivateRoute';
import Resources from './components/resources';
import AllDreams from './components/allDreams';
import MenuBar from './components/menu';

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
      <MenuBar />
      <Switch>
        <Route path='/register' component={RegisterForm}/>
        <Route path='/signin' component={SigninForm}/>
        <PrivateRoute
         path='/dashboard'
         component={Dashboard}
         render={(props) => <Dashboard {...props} dreams={dreams}/>}
        />
        <PrivateRoute
         path='/alldreams'
         component={AllDreams}
         render={(props) => <AllDreams {...props} dreams={dreams}/>}
         />
        <Route path='/resources' component={Resources}/>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
