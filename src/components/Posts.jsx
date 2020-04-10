import React, { Component } from "react";

export class Posts extends Component {
	state = {
		posts: [],
	};

	componentWillMount() {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((posts) => this.setState({ posts: posts }));
	}

	render() {
		return (
			<div>
				<h1>Posts</h1>
			</div>
		);
	}
}

export default Posts;
