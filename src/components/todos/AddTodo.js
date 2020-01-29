import React, { Component } from "react";

class AddTodo extends Component {
	state = {
		content: ""
	};
	handleChange = e => {
		this.setState({
			content: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.addTodo(this.state);
		this.setState({
			content: ""
		});
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label id="addTodo">Add New Todo</label>
					<input
						type="text"
						value={this.state.content}
						htmlFor="addTodo"
						required
						onChange={this.handleChange}
					/>
				</form>
			</div>
		);
	}
}
export default AddTodo;
