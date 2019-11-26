import React, {Component, Fragment} from 'react'
import Menu from "../components/Menu";
import Footer from "../components/Footer";


class News extends Component {
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
				<h1>News</h1>
				<Footer/>
			</Fragment>
		);
	}
}

export default News;
