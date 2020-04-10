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
		const postsList = this.state.posts.map((post) => (
			<div className="post-container" key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		));

		return (
			<div>
				<h1>Posts</h1>
				{postsList}
			</div>
		);
	}
}

export default Posts;
