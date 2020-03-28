import React, {Component} from 'react';
import nba from "../nba-client";
import Profile from "./Profile";

class Main extends Component {
    state = {
        playerInfo: {}
    }
    componentDidMount() {
        window.nba = nba;
        nba.stats.playerInfo({ PlayerID: nba.findPlayer('Stephen Curry').playerId})
            .then((info) => {
                console.log(info);
                const playInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
                console.log(playInfo);
                this.setState({ playerInfo: playInfo });
            })
    }

    render() {
        return (
            <div className="main">
                <Profile playerInfo={this.state.playerInfo} />
            </div>
        );
    }
}

export default Main;