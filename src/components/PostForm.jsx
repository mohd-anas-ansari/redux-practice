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

	render() {
		return (
			<div>
				<h1>Add post</h1>

				<form>
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
