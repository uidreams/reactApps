import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Layout/Header";

import TodoList from "./components/todos/TodoList";
import CakeContainer from "./components/bakery/Bakery";
import GithubDetails from "./components/githubPages/GHdetails";
import ContactList from "./components/contacts/ContactList";
import Posts from "./components/posts/Posts";

function App() {
	return (
		<BrowserRouter>
			<div className="todo-app container">
				<Header />
				<Route path="/" exact component={TodoList} />
				<Route path="/bakery" component={CakeContainer} />
				<Route path="/ghdetails" component={GithubDetails} />
				<Route path="/contacts" component={ContactList} />
				<Route path="/posts" component={Posts}/>
			</div>
		</BrowserRouter>
	);
}

export default App;
