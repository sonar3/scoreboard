import React from 'react';

export class AddPlayerForm extends React.Component {

	render() {
		return (
			<form className="form">
				<input className="input" type="text" placeholder="enter a player's name"></input>
				<input className="input" type="submit" value="Add Player"></input>
			</form>
		);
	}
}
