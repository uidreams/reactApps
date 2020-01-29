import React, { Component } from "react";
import PostForm from "./PostForm";

class Posts extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: []
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(res => res.json())
			.then(data => this.setState({ posts: data }));
	}
	render() {
		const postItems = this.state.posts.map(post => (
			<div key={post.id}>
				<h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
        ));
		return (
			<div>
				<h2 className="blue-text">Posts</h2>
				<p>
					<a href="https://www.youtube.com/watch?v=93p3LxR9xfM">
						Redux Crash Course With React - Brad Traversy
					</a>
				</p>
                <PostForm/>
                {postItems}
			</div>
		);
	}
}

export default Posts;
