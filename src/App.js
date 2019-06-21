import React, { Component } from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
import { Table } from "antd";
import "antd/dist/antd.css";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const columns = [
	{
		title: "Наименование книги",
		dataIndex: "bookname",
		key: "1"
	},
	{
		title: "Авторы",
		dataIndex: "author",
		key: "2",
		render: (text, record) => (<Link to={"/authors/" + record.authorid}>{text}</Link>)
	},
	{
		title: "Дата",
		dataIndex: "date",
		key: "3"
	}
];


class BooksTable extends Component {
	render() {
		return (
			<Table columns={columns} dataSource={this.props.items} />
		);
	}
}


class Author extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		const authorId = this.props.match.params.authorId;
		this.getAuthor(authorId);
	}

	getAuthor(authorId) {
		fetch("http://localhost:3001/authors/" + authorId)
			.then(response => response.json())
			.then(data => this.setState(data))
	}

	render() {
		const { name, dateOfBirth, dateOfDeath, photo } = this.state;
		return (
			<div>
				{
					<div>
						<img src={'http://localhost:3001' + photo} alt={name} width="150" />
						<h3>{name}</h3>
						<p><b>Дата рождения:</b> {dateOfBirth}</p>
						<p><b>Дата смерти:</b> {dateOfDeath}</p>
						<Link to={"/"}><b>BACK</b></Link>
					</div>
				}
			</div>
		);
	}
}

class ContentFeed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		};
	}

	componentDidMount() {
		this.getItems();
	}

	getItems() {
		fetch("http://localhost:3001/books")
			.then(response => response.json())
			.then(data => this.setState({ items: data }))
	}

	render() {
		return (
			<Router history={history}>
				<Switch>
					<Route path="/" exact render={() => (<BooksTable items={this.state.items} />)} />
					<Route path="/authors/:authorId" component={Author} />
				</Switch>
			</Router>
		);
	}
}

export default ContentFeed;
