import React, { Component,Fragment } from 'react'
import Menu from "../components/Menu";
import Footer from "../components/Footer";


class Login extends Component {
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
			<Menu/>
			<h1>Login</h1>
		<Footer/>
		</Fragment>
		);
	}
}

export default Login;
