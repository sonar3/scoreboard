import React from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

export class AddPlayerForm extends React.Component {
	// state = {
	// 	value: ''
	// }

	// handleValueChange = (e) => {
	// 	console.log(e);
	// 	this.setState({value: e.target.value})
	// }
	textInput = React.createRef();

	handleSubmit = (e) => {
		console.log(e);
		// 화면을 리프레쉬하는 기본 이벤트 막기
		e.preventDefault();

		// 폼체크, 입력폼 체크
		const playerInput =document.getElementById("player");
		console.log(playerInput.validity.valid);
		console.log('form valid: ', document.getElementById("form").checkValidity());

		if (!playerInput.validity.valid) {
			// 에러메시지 보여주기
			return;
		}

		// this.props.addPlayer(this.state.value);
		// this.textInput.current 가 Dom 노드에 해당
		this.props.addPlayer(this.textInput.current.value);
	}

	render() {
		return (
			<form className="form" onSubmit={this.handleSubmit} noValidate id="form">
				<input className="input" type="text" placeholder="enter a player's name"
					required id="player" ref={this.textInput}></input>
				<input className="input" type="submit" value="Add Player"></input>
			</form>
		);
	}
}

const mapActionToProps = (dispatch) => ({
	// 왼쪽은 props, 오른쪽은 펑션(액션을 디스패치하는)
	addPlayer: (name) => dispatch(addPlayer(name))
})

// 커링 펑션, HoC
export default connect(null, mapActionToProps)(AddPlayerForm);