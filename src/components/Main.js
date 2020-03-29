import React, {Component} from 'react';
import nba from "../nba-client";
import Profile from "./Profile";
import DataViewContainer from "./DataViewContainer";
import SearchBar from "./SearchBar";
import {DEFAULT_PLAYER_INFO} from "./constant";

class Main extends Component {
    state = {
        playerInfo: DEFAULT_PLAYER_INFO,
        playerId: 201939
    }
    componentDidMount() {
        window.nba = nba;
        this.loadPlayerInfo("Stephen Curry")
    }
    loadPlayerInfo = (playerName) => {
        nba.stats.playerInfo(
            { PlayerID: nba.findPlayer(playerName).playerId}).then((info) => {
                console.log(info);
                const playInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
                console.log(playInfo);
                this.setState({ playerInfo: playInfo });
            }
        )
    }
    handleSelectPlayer = (playerName) => {
        this.loadPlayerInfo(playerName);
    }
    render() {
        return (
            <div className="main">
                <SearchBar handleSelectPlayer={this.handleSelectPlayer}/>
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo} />
                    <DataViewContainer playerId={this.state.playerId}/>
                </div>
            </div>
        );
    }
}

export default Main;