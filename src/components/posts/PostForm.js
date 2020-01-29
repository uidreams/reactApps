import React, { Component } from "react";

class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
             title: "", 
             body: ""
		};
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	onSubmit(e) {
		e.preventDefault();
		const post = {
			title: this.state.title,
			body: this.state.body
		};
		fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
            headers: { "conent-type": "application/json" },
            body: JSON.stringify(post)
        })
        .then(response => response.json())
        .then(data => console.log(data))
	}

	render() {
		return (
			<div>
				<div className="row">
					<form className="col s6" onSubmit={this.onSubmit}>
						<div className="card-panel">
							<h4>Add Post</h4>
							<div className="row">
								<div className="input-field col s12">
									<input
										id="first_name"
										type="text"
										value={this.state.title}
										onChange={this.onChange}
									/>
									<label htmlFor="first_name">First Name</label>
								</div>
							</div>
							<div className="row">
								<div className="input-field col s12">
									<textarea
										id="textarea1"
										className="materialize-textarea"
										value={this.state.body}
										onChange={this.onChange}
									></textarea>
									<label htmlFor="textarea1">Textarea</label>
								</div>
							</div>
							<button className="waves-effect waves-light btn orange">
								Add Post
							</button>
						</div>
					</form>
				</div>
				<hr />
			</div>
		);
	}
}
export default PostForm;
