import React, { Component } from "react";

export class PostForm extends Component {
	render() {
		return (
			<div>
				<h1>Add post</h1>

				<form>
					<div className="form-input">
						<label>Title: </label>
						<input type="text" name='title' />
          </div>
          <br />
					<div className="form-input">
						<label>Body: </label>
						<textarea name='body' />
					</div>
          <br />
        <button type='submit'>Submit</button>
        </form>
        <hr/>
			</div>
		);
	}
}

export default PostForm;
