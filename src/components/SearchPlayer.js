import React from 'react';
import {connect} from "react-redux";
import {removePlayer, searchName, setIsSorted} from "../redux/actions";

export class SearchPlayer extends React.Component {
	handleChange = (e) => {
		this.props.setIsSorted(e.target.checked);
	}

	handleSearch = (e) => {
		this.props.searchName(e.target.value)
	}

	render() {
		console.log(this.props);
		return (
			<div className="search-box">
				<label>
					<input type="text" placeholder="search name" className="input"
								 onChange={this.handleSearch}></input>
					<input type="checkbox" checked={this.props.isSorted}
						onChange={this.handleChange}></input>
					show good player and bad player
				</label>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	// 왼쪽은 props, 오른쪽은 state
	isSorted: state.playerReducer.isSorted,
})

const mapActionToProps = (dispatch) => ({
	// 왼쪽은 props, 오른쪽은 펑션(액션을 디스패치하는)
	setIsSorted: (isSorted) => dispatch(setIsSorted(isSorted)),
	searchName: (keyword) => dispatch(searchName(keyword))
})

export default connect(mapStateToProps, mapActionToProps)(SearchPlayer);