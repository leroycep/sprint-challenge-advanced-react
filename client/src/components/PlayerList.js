import React from "react";
import axios from "axios";

class PlayerList extends React.Component {
  _isMounted = false;
  state = {
    players: []
  };

  componentDidMount() {
    this._isMounted = true;
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        if (this._isMounted) {
          this.setState({ players: res.data });
        }
      })
      .catch(err => console.log("Failed to fetch player list", err));
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        <h3>Runner List</h3>
        <div>
          {this.state.players.map(player => (
            <div key={player.id}>
              <code>{JSON.stringify(player)}</code>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PlayerList;
