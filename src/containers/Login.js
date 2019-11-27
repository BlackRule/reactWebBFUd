import React, {Component} from 'react'
import Container from "./Container";


class Login extends Container {
	constructor(props) {
		super(props);
		this.loginRef = React.createRef();
		this.passwordRef = React.createRef();
		this.state = {error: false};
	}

	componentDidMount() {
		super.componentDidMount();
	}

	logIn = (e) => {
		e.preventDefault();
		if (this.loginRef.current.value === "Admin" && this.passwordRef.current.value === "12345") {
			localStorage.setItem("authorised", "true");
			window.location = "/users"
		} else {
			this.setState({error: true});
		}
	};

	render() {
		return (
			<div id="login">
				<h1>Welcome Back!</h1>
				<h1 id="error" className={this.state.error?"":"hidden"}>Имя пользователя или пароль введены не верно</h1>

				<form action="#">

					<div className="field-wrap">
						<label>
							User name<span className="req">*</span>
						</label>
						<input type="text" required autoComplete="off" className={this.state.error?"error":""} ref={this.loginRef}/>
					</div>

					<div className="field-wrap">
						<label>
							Password<span className="req">*</span>
						</label>
						<input type="password" required autoComplete="off" className={this.state.error?"error":""} ref={this.passwordRef}/>
					</div>

					<button className="button button-block" onClick={this.logIn}>Log In</button>

				</form>
			</div>
		);
	}
}

export default Login;
