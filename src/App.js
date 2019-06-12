import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import { Table, Button } from 'antd';
import "antd/dist/antd.css";
import logo1 from "./img/1.jpg";
import logo2 from "./img/2.jpg";
import logo3 from "./img/3.jpg";

const url = 'http://localhost:3001';
const history = createBrowserHistory();

const columns = [
  {
    title: 'Наименование книги',
    dataIndex: 'bookname',
    key: '1',
   
  },
  {
    title: 'Авторы',
    dataIndex: 'author',
    key: '2',
     render: (name, id) => <Link to={'/authors/'+id.key}>{name}</Link>,
   
  },
  {
    title: 'Дата',
    dataIndex: 'date',
    key: '3',
  }
 
];

const Authors = () => (
  <Switch>
    <Route path="/authors/1" component={Author1}/>
    <Route path="/authors/2" component={Author2}/>
    <Route path="/authors/3" component={Author3}/>

  </Switch>
)

const Author1 = () => {
	return (

		<div>
			<img src={logo1} alt={"logo1"} width={"200px"}/>
			<h3>Лев Николаевич Толстой</h3>
			<p><b>Дата рождения:</b>28.08.1828</p>
			<p><b>Дата смерти:</b>07.11.1910</p>
			<Link to={'/'}>BACK</Link>
		</div>
	)
}
const Author2 = () => {
	return (

		<div>
			<img src={logo2} alt={"logo2"} width={"200px"}/>
			<h3>Алан Александр Милн</h3>
			<p><b>Дата рождения:</b>18.01.1882</p>
			<p><b>Дата смерти:</b>31.01.1956</p>
			<Link to={'/'}>BACK</Link>
		</div>
	)
}
const Author3 = () => {
	return (

		<div>
			<img src={logo3} alt={"logo3"} width={"200px"}/>
			<h3>Поляков Илья Сергеевич</h3>
			<p><b>Дата рождения:</b>19.12.1954</p>
			<p><b>Дата смерти:</b>13.06.2015</p>
		 	<Link to={'/'}>BACK</Link>
		</div>
	)
}

class ContentFeed extends React.Component {
	constructor(){
		super()
		this.state = {
			items:[]
		}
	}
	
	componentDidMount(){
		this.getItems();
	}
	getItems(){
		fetch(url)
			.then(response => response.json())
			.then(response => this.setState({items: response}))
	}
	render(){
		return (

			<Router history={history}>
				<Table columns={columns} dataSource={this.state.items}/>

				<Authors />
			</Router>
		);
	}
}

export default ContentFeed;
