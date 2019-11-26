import React, { Component, Fragment } from 'react'


class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {

			};
	}

	componentDidMount() {

	}

	render() {
		return (

			<Fragment>
				<a href="/">Main</a>
				<a href="/login">Login</a>
				<a href="/users">Users</a>
				<a href="/news">News</a>
			</Fragment>

		);
	}
}

export default Menu;
