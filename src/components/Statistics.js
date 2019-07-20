import React from 'react';

export const Statistics = (props) => {
	const totalPlayers = props.players.length;
	let totalScore = 0;
	// 계산 로직: forEach 이용
	props.players.forEach(player => {
		totalScore += player.score;
	})

	return (
		<table className="stats">
			<tbody>
			<tr>
				<td>Players:</td>
				<td>{totalPlayers}</td>
			</tr>
			<tr>
				<td>Total Points:</td>
				<td>{totalScore}</td>
			</tr>
			</tbody>
		</table>
	);
}