import React,{Component} from 'react'
import { Route } from 'react-router-dom'
import Main from './containers/Main'
import Login from './containers/Login'
import Users from './containers/Users'
import News from './containers/News'
import Menu from "./components/Menu";
import $ from "jquery";

class App extends Component {
	componentDidMount(){
		$('.tab-content').find('input, textarea').on('keyup blur focus', function (e) {

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
	render() {
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
}

export default App;

