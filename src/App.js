import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";
import {playerReducer} from "./redux/reducers/player";
import {CustomPlayer} from "./components/CustomPlayer";
import {PlayList} from "./components/PlayList";
import SearchPlayer from "./components/SearchPlayer";

class App extends React.Component {
  // Listing UP: 카운터 컴포넌트가 갖고 있는 로컬 state를 최상단 부모로 올리기
  // 로직을 구현하기 위해서 Lifting up이 필요

  render() {
    const allPlayers = this.props.filteredPlayers;
    const goodPlayers = this.props.filteredPlayers.filter(item => item.score >=0);
    const badPlayers = this.props.filteredPlayers.filter(item => item.score <0);

    return (
      <div className="scoreboard">
        <Header />

        <SearchPlayer/>

        {
          this.props.isSorted ? [
              <PlayList playerState="Good Players" players={goodPlayers}/>,
              <PlayList playerState="Bad Players" players={badPlayers}/>,
            ] : <PlayList playerState="All Players" players={allPlayers}/>
        }
        <AddPlayerForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽은 state
  players: state.playerReducer.players,
  filteredPlayers: state.playerReducer.filteredPlayers,
  isSorted: state.playerReducer.isSorted,
})

export default connect(mapStateToProps, null)(App);