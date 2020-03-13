import React from "react";
import axios from "axios";

class PlayerList extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => this.setState({ players: res.data }))
      .catch(console.log("Failed to fetch player list"));
  }

  render() {
    return (
      <div>
        <h3>Runner List</h3>
        <div>
          {this.state.players.map(player => (
            <div><code>{JSON.stringify(player)}</code></div>
          ))}
        </div>
      </div>
    );
  }
}

export default PlayerList;
