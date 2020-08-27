import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ListUser from './components/ListUser/ListUser';
import PrivateRoute from './service/PrivateRoute';
import {history} from './helper/hisory';
export default function routes() {
  
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path='/' exact component={ListUser} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
      </Switch>
    </Router>
  );
}
