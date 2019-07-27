import React from 'react';

export class Stopwatch extends React.Component {
	state = {
		timer: 0,
		isRunning: false
	}

	tickRef;

	render() {
		return (
			<div className="stopwatch">
				<h2>StopWatch</h2>
				<span className="stopwatch-time">{this.state.timer}</span>
				<button>{this.state.isRunning ? 'stop' : 'start'}</button>
				<button>Rest</button>
			</div>
		);
	}

	tick = () => {
		if (this.state.isRunning) {
			this.setState(prevState => ({
				timer: prevState.timer +1
			}));
		}
	}

	// Dom이 렌더링 된 직후에 호출되는 라이프 사이클 메서드
	// 네트워크 호출, 3rd 라이브러리 로딩
	componentDidMount() {
		this.tickRef = setInterval(this.tick, 1000);
	}

	// Dom이 파괴 직전에 호출되는 라이프 사이클 메서드
	// 리소스 해제
	componentWillUnmount() {
		clearInterval(this.tickRef);
	}
}
