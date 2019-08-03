import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";
import {playerReducer} from "./redux/reducers/player";

class App extends React.Component {
  // Listing UP: 카운터 컴포넌트가 갖고 있는 로컬 state를 최상단 부모로 올리기
  // 로직을 구현하기 위해서 Lifting up이 필요

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.props.players} />

        {
          this.props.players.map((player) =>
            <Player name={player.name} score={player.score}
                    id={player.id} key={player.id}
                    removePlayer={this.handleRemovePlayer}
                    changeScore={this.handleChangeScore} />)
        }
        <AddPlayerForm />
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
}

const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽은 state
  players: state.playerReducer.players,
})

export default connect(mapStateToProps, null)(App);