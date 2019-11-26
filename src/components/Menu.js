import React, {Component, Fragment} from 'react'
import {NavLink} from "react-router-dom";


class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {

	}

	render() {
		return (

			<Fragment>
				<ul className="tab-group">
					<li className="tab"><NavLink exact to="/">Main</NavLink></li>
					<li className="tab"><NavLink to="/login">Login</NavLink></li>
					{/*TODO*/}
					<li className="tab"><NavLink to={localStorage.getItem("authorised") === "true" ? "/users" : "/login"}>Users</NavLink></li>
					<li className="tab"><NavLink to="/news">News</NavLink></li>
				</ul>

			</Fragment>

		);
	}
}

export default Menu;
