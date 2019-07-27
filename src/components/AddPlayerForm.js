import React from 'react';

export class AddPlayerForm extends React.Component {
	state = {
		value: ''
	}

	handleValueChange = (e) => {
		console.log(e);
		this.setState({value: e.target.value})
	}

	handleSubmit = (e) => {
		// 화면을 리프레쉬하는 기본 이벤트 막기
		e.preventDefault();
		this.props.addPlayer(this.state.value);
	}

	render() {
		return (
			<form className="form">
				<input className="input" type="text" placeholder="enter a player's name"
					value={this.state.value} onChange={this.handleValueChange}></input>
				<input className="input" type="submit" value="Add Player"
					onClick={this.handleSubmit}></input>
			</form>
		);
	}
}
