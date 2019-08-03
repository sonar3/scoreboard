// 액션은 객체
// 액션 creator는 액션을 생성하는 함수
import {ADD_PLAYER} from "./actionTypes";

export const addPlayer = (name) => ({
	type: ADD_PLAYER,
	name
})