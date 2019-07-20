import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";

class App extends React.Component {
  // Listing UP: 카운터 컴포넌트가 갖고 있는 로컬 state를 최상단 부모로 올리기
  // 로직을 구현하기 위해서 Lifting up이 필요
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
                    removePlayer={this.handleRemovePlayer}
                    changeScore={this.handleChangeScore} />)
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

  handleChangeScore = (id, delta) => {
    console.log('handleChangeScore: ', id, delta);
  }
}

export default App;