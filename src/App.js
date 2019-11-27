import React, {Component, Fragment} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Main from './containers/Main'
import Login from './containers/Login'
import Users from './containers/Users'
import News from './containers/News'
import Menu from "./components/Menu";

class App extends Component {
	render() {
		return (
			<div className="form">
				<Menu/>
				<div className="tab-content">
					<Switch>
						{localStorage.getItem("authorised") === "true" ?
							<Redirect from="/login" to="/users"/>
							:
							<Redirect from="/users" to="/login"/>
						}
						<Route exact path="/" component={Main}/>
						<Route path="/users" component={Users}/>
						<Route path="/login" component={Login}/>
						<Route path="/news" component={News}/>
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;

