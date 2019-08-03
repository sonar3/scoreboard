import React from 'react';
import Counter from "./Counter";

export class Player extends React.Component {
	render() {
		const {name, score, removePlayer, id, changeScore} = this.props;

		console.log(name, 'rendered');

		return	(
			<div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={() => removePlayer(id)}>x</button>
				{name}
			</span>
				<Counter id={id} score={score} />
			</div>
		);
	}

	componentWillReceiveProps(nextProps, nextContext) {
		// console.log('componentWillReceiveProps: ', nextProps);
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		// console.log('shouldComponentUpdate: ', nextProps);
		return this.props.score !== nextProps.score ? true : false;
	}
}