import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "../actionTypes";

const playerInitialState = {
	players: [
		{name: 'LDK', score: 0, id: 1},
		{name: 'HONG', score: 0, id: 2},
		{name: 'KIM', score: 0, id: 3},
		{name: 'PARK', score: 0, id: 4},
	]
}

let maxId = 4; // 편의상

export const playerReducer = (state = playerInitialState, action) => {
	let players;
	switch (action.type) {
		case ADD_PLAYER:
			players = [...state.players]; // 기존 players를 deep copy
			const player = {name: action.name, score: 0, id: ++maxId}; // short hand property
			players.push(player);
			return {...state, players}

		case CHANGE_SCORE:
			players = [...state.players];
			players.forEach(player => {
				if (player.id === action.id) {
					player.score += action.delta;
				}
			})
			return {...state, players}

		case REMOVE_PLAYER:
			players = state.	players.filter(player => player.id !== action.id)
			return {...state, players}

		default:
			return state;
	}
}