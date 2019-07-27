import React from 'react';
import {Counter} from "./Counter";

export class Player extends React.PureComponent {
	render() {
		const {name, score, removePlayer, id, changeScore} = this.props;

		console.log(name, 'rendered');

		return	(
			<div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={() => removePlayer(id)}>x</button>
				{name}
			</span>
				<Counter id={id} score={score} changeScore={changeScore} />
			</div>
		);
	}
}