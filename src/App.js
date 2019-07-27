import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";

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

  maxId = 4;  // 편의상 추가

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" players={this.state.players} />

        {
          this.state.players.map((player) =>
            <Player name={player.name} score={player.score}
                    id={player.id} key={player.id}
                    removePlayer={this.handleRemovePlayer}
                    changeScore={this.handleChangeScore} />)
        }
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
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
    this.setState(prevState => {
      prevState.players.forEach(player => {
        if (player.id === id) {
          player.score += delta;
        }
      })
      return {
        players: [...prevState.players]
      }
    })
  }

  handleAddPlayer = (name) => {
    // name 을 가진 player 객체를 this.state.players 배열에 추가
    console.log(name);
    const player = {name: name, score: 0, id: ++this.maxId};

    this.setState(prevState => {
      prevState.players.push(player);
      return {players: prevState.players}
    })
  }
}

export default App;