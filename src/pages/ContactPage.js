import React, { Component } from "react";
import "../styles/ContacPage.css";

class ContactPag extends Component {
	state = {
		value: "",
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			value: "",
		});
	};

	handleChange = (e) => {
		this.setState({
			value: e.target.value,
		});
	};

	render() {
		return (
			<div className='contact'>
				<form onSubmit={this.handleSubmit}>
					<h4>Contact with us</h4>
					<textarea
						placeholder='Write a message...'
						value={this.state.value}
						onChange={this.handleChange}></textarea>
					<button>Send</button>
				</form>
			</div>
		);
	}
}

export default ContactPag;
