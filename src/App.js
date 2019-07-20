import React from 'react';
import './App.css';

// 앞글자는 대문자, 반드시 react element를 리턴
const Header = ({title, totalPlayers}) => {
  // 객체 해체 할당

  return (
    <header className="header">
      <h1 className="h1">{title}</h1>
      <span className="stats">Players: {totalPlayers}</span>
    </header>
  )
}

const Player = ({name, score, removePlayer, id}) => {
  return (
    <div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={() => removePlayer(id)}>x</button>
        {name}
			</span>
      <Counter score={score} />
    </div>
  )
}

class Counter extends React.Component {
  // 1. 시간에 따라 변하는 데이터는 state라는 모델로 정의
  // 2. state를 변경하는 방법은 setState()밖에 없다.
  // 3. setState()는 merge(overwriting)
  // 4. setState() 비동기로 처리된다.
  // 이벤트 우측에는 함수 선언문이 와야 된다.
  state = {
    score: 0,
    number: 1
  }

  // arrow function안에 쓰이는 this는 lexical this
  changeScore = (delta) => {
    console.log('incrementScore: ', this);
    // this.state.score += 1;
    // this.setState({score: this.state.score + delta});
    this.setState(prevState => ({score: prevState.score + delta}));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"
                onClick={() => this.changeScore(-1)}> -</button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment"
                onClick={() => this.changeScore(1)}> +</button>
      </div>
    )
  }
}

/*const Counter = (props) => (
	<div className="counter">
		<button className="counter-action decrement"> -</button>Student { name: 'Tom' }
		<span className="counter-score">{props.score}</span>
		<button className="counter-action increment"> +</button>
	</div>
)*/

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 30, id: 1},
      {name: 'HONG', score: 40, id: 2},
      {name: 'KIM', score: 50, id: 3},
      {name: 'PARK', score: 60, id: 4},
    ]
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11} />

        {
          this.state.players.map((player) =>
            <Player name={player.name} score={player.score}
                    id={player.id} key={player.id}
                    removePlayer={this.handleRemovePlayer}/>)
        }
      </div>
    )
  }

  handleRemovePlayer = (id) => {
    console.log(id);
    // 자식을 삭제하는 로직
    this.setState(prevState => ({
        players: prevState.players.filter(player => player.id !== id)
      })
    )
  }
}

export default App;