import Player from "./player";


const { useState, useEffect } = React;

const Players = () => {
  const [players, setPlayers] = useState([])
  const [newPlayer, setNewPlayer] = useState({})
  const createPlayer = (player) =>
      fetch(`https://localhost:8080/api/players`, {
        method: 'POST',
        body: JSON.stringify(player),
        headers: {'content-type': 'application/json'}
      })
      .then(response => response.json())
      .then(player => setPlayers(players => ([...players, player])))
  const updatePlayer = (id, newPlayer) =>
      fetch(`http://localhost:8080/players/${id}/${newPlayer.password}`)
      .then(response => response.json())
      .then(player => setPlayers(players => (players.map(player => player.id === id ? newPlayer : player))))
  const findAllPlayers = () =>
      fetch(`http://localhost:8080/players`)
      .then(response => response.json())
      .then(players => setPlayers(players))
  const deletePlayer = (id) =>
      fetch(`https://localhost:8080/api/players/${id}`, {
        method: "DELETE"
      })
      .then(response => response.json())
      .then(players => setPlayers(players => players.filter(players => player.id !== id)))
  useEffect(() => {
    findAllPlayers()}, [])
  return(
      <div>
        <h2>Players {players.length}</h2>
        <input value={newPlayer.title}
            onChange={(e) => setNewPlayer(newPlayer => ({...newPlayer, title: e.target.value}))}/>
        <input value={newPlayer.owner}
            onChange={(e) => setNewPlayer(newPlayer => ({...newPlayer, owner: e.target.value}))}/>
        <button onClick={() => createPlayer(newPlayer)}>Create</button>
        {
          players.map(player =>
              <Player key={player.id}
                  updatePlayer={updatePlayer}
                  deletePlayer={deletePlayer}
                  player={player}/>)
        }
      </div>
  )
}

export default Players;