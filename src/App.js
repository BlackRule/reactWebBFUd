import React from 'react'
import { Route } from 'react-router-dom'
import Main from './containers/Main'
import Login from './containers/Login'
import Users from './containers/Users'
import News from './containers/News'
import Menu from "./components/Menu";
function App() {
  return (
          <div className="form">
              <Menu/>
              <div className="tab-content">
                  <Route exact path="/" component={Main}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/users" component={Users}/>
                  <Route path="/news" component={News}/>
              </div>
          </div>
  );
}

export default App;

