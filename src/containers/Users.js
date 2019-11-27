import React, {Component, Fragment} from 'react'
import Container from "./Container";

class Users extends Container {
	constructor(props) {
		super(props);
		this.fioRef = React.createRef();
		this.dateRef = React.createRef();
		this.state = {
			users: [],
			lastId: 0
			};
		let usersJson = localStorage.getItem('users');
		if (usersJson) {
			this.state.users = JSON.parse(usersJson);
			this.state.lastId = this.state.users[this.state.users.length-1].id;
		}
	}

	componentDidMount() {
		super.componentDidMount();
	}

	addUser =  (e) => {
		e.preventDefault();
		let newState={
			users: this.state.users,
			lastId: this.state.lastId+1
		};
		newState.users.push({fio: this.fioRef.current.value, birthDate: this.dateRef.current.value,id: newState.lastId});
		this.setState(newState);
		localStorage.setItem("users",JSON.stringify(this.state.users));
	};

	render() {
		return (
			<Fragment>
			<h1>Users</h1>
				<form action="#" onSubmit={this.addUser}>
					<div className="field-wrap">
						<label>
							ФИО<span className="req">*</span>
						</label>
						<input type="text" required autoComplete="off" ref={this.fioRef}/>
					</div>
					<div className="field-wrap">
						<input type="date" required autoComplete="off" ref={this.dateRef} title="Дата рождения"/>
					</div>
					<input type="submit" className="button button-block" value="Добавить"/>
				</form>
				<input type="button" onClick={this.logout} className="button button-block logout" value="Logout"/>
				<table>
					<thead>
					<tr>
						<td>ФИО:</td>
						<td>Дата рождения:</td>
					</tr>
					</thead>
					<tbody>
					{this.state.users.map((val, ind, arr) => {
						return (<tr key={val.id}>
							<td>{val.fio}</td>
							<td>{val.birthDate}</td>
						</tr>);
					})}
					</tbody>
				</table>
		</Fragment>
		);
	}

	logout() {
		localStorage.removeItem("authorised");
		window.location = "/login"
	}
}

export default Users;
