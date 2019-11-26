import React, {Component, Fragment} from 'react'
import Menu from "../components/Menu";
import Footer from "../components/Footer";


class Main extends Component {
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
				<h1>Main</h1>
				<Footer/>
			</Fragment>
		);
	}
}

export default Main;
