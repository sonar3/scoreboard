import React from 'react';
import axios from 'axios';

export class Heroes extends React.Component {

	render() {
		return (
			<div>
				Heroes works.
			</div>
		);
	}

	componentDidMount() {
		this.getHeroes();
	}

	// async를 붙이면 Promise가 리턴
	// async는 반드시 await와 함께 사용
	// await 뒤에는 Promise가 오고 결과가 올때 까지 기다렸다가 결과를 리턴
	async getHeroes() {
		const res = await axios.get('http://ec2-15-164-134-124.ap-northeast-2.compute.amazonaws.com:8000/api/user/heroes');
		console.log(res.data);
		// 처리 로직
	}
}
