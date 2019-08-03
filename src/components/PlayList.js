import React from 'react';
import {CustomPlayer} from "./CustomPlayer";

export class PlayList extends React.Component {
	getHighScore() {
		let highScore = 0;
		this.props.players.forEach(player => {
			if (player.score > highScore) {
				highScore = player.score;
			}
		})
		return highScore > 0 ? highScore : null;
	}

	render() {
		let titleClass = '';
		if (this.props.playerState.indexOf('All') >= 0) {
			titleClass = 'all-title'
		} else if (this.props.playerState.indexOf('Good') >= 0) {
			titleClass = 'good-title'
		} else if (this.props.playerState.indexOf('Bad') >= 0) {
			titleClass = 'bad-title'
		}

		return (
			<>
				<p className={titleClass}>{this.props.playerState}</p>

				{
					this.props.players.map((player) =>
	 					<CustomPlayer name={player.name} score={player.score}
							 id={player.id} key={player.id}
							 isHighScore={player.score === this.getHighScore()} />
						)
				}
			</>
		);
	}
}
