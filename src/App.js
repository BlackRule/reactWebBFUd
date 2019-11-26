import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Main from './containers/Main'
import Login from './containers/Login'
import Users from './containers/Users'
import News from './containers/News'
function App() {
  return (
      <Fragment>
        <Route exact path="/" component={Main}/>
        <Route path="/login" component={Login}/>
        <Route path="/users" component={Users}/>
        <Route path="/news" component={News}/>
      </Fragment>
  );
}

export default App;

