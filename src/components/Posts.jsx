import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

export class Posts extends Component {
	state = {
		posts: [],
	};

  componentWillMount() {
    this.props.fetchPosts();
  }

	render() {
		const postsList = this.props.posts.map((post) => (
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

const mapStateToProps = (state) => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
