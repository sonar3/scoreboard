import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";
import {playerReducer} from "./redux/reducers/player";
import {CustomPlayer} from "./components/CustomPlayer";
import {PlayList} from "./components/PlayList";

class App extends React.Component {
  // Listing UP: 카운터 컴포넌트가 갖고 있는 로컬 state를 최상단 부모로 올리기
  // 로직을 구현하기 위해서 Lifting up이 필요

  render() {
    const goodPlayers = this.props.players.filter(item => item.score >=0);
    const badPlayers = this.props.players.filter(item => item.score <0);

    return (
      <div className="scoreboard">
        <Header />

        {
          [
            <PlayList playerState="All Players" players={this.props.players}/>,
            <PlayList playerState="Good Players" players={goodPlayers}/>,
            <PlayList playerState="Bad Players" players={badPlayers}/>,
          ]
        }
        <AddPlayerForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽은 state
  players: state.playerReducer.players,
})

export default connect(mapStateToProps, null)(App);