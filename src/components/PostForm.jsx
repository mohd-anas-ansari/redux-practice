import React, { Component } from "react";

export class PostForm extends Component {
	state = {
		title: "",
		body: "",
	};

	handleChange = (event) => {
		console.log(event, "event");
		console.log(event.target.name, "event-target-name");
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(event, "inside-submit-event");

		const post = {
			title: this.state.title,
			body: this.state.body,
		};

		fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(post),
		})
			.then((res) => res.json())
			.then((data) => console.log(data, "data in sumbit-post"));
  };
  
  

	render() {
		return (
			<div>
				<h1>Add post</h1>

				<form onSubmit={this.handleSubmit}>
					<div className="form-input">
						<label>Title: </label>
						<input type="text" name="title" onChange={this.handleChange} />
					</div>
					<br />
					<div className="form-input">
						<label>Body: </label>
						<textarea name="body" onChange={this.handleChange} />
					</div>
					<br />
					<button type="submit">Submit</button>
				</form>
				<hr />
			</div>
		);
	}
}

export default PostForm;
