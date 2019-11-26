import React, {Component} from 'react'
import $ from 'jquery'


class Login extends Component {
	constructor(props) {
		super(props);
		this.loginRef = React.createRef();
		this.passwordRef = React.createRef();

		this.state = {};
	}

	componentDidMount() {
		$('.form').find('input, textarea').on('keyup blur focus', function (e) {

			var $this = $(this),
				label = $this.prev('label');

			if (e.type === 'keyup') {
				if ($this.val() === '') {
					label.removeClass('active highlight');
				} else {
					label.addClass('active highlight');
				}
			} else if (e.type === 'blur') {
				if ($this.val() === '') {
					label.removeClass('active highlight');
				} else {
					label.removeClass('highlight');
				}
			} else if (e.type === 'focus') {

				if ($this.val() === '') {
					label.removeClass('highlight');
				} else if ($this.val() !== '') {
					label.addClass('highlight');
				}
			}

		});

	}

	logIn = (e) => {
		e.preventDefault();
		if (this.loginRef.current.value === "Admin" && this.passwordRef.current.value === "12345") {
			localStorage.setItem("authorised", "true");
			window.location = "/users"
		}
		document.getElementById("error").removeClass("hidden");
	};

	render() {
		return (
			<div id="login">
				<h1>Welcome Back!</h1>
				<h1 id="error" className="hidden">Имя пользователя или пароль введены не верно</h1>

				<form action="#">

					<div className="field-wrap">
						<label>
							User name<span className="req">*</span>
						</label>
						<input type="text" required autoComplete="off" ref={this.loginRef}/>
					</div>

					<div className="field-wrap">
						<label>
							Password<span className="req">*</span>
						</label>
						<input type="password" required autoComplete="off" ref={this.passwordRef}/>
					</div>

					<button className="button button-block" onClick={this.logIn}>Log In</button>

				</form>
			</div>
		);
	}
}

export default Login;
