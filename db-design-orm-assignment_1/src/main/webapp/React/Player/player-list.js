import service from "./player-service"

const {useEffect, useState} = React
const {Link} = ReactRouterDOM


const PlayerList = () => {
  const [players, setPlayers] = useState([])
  useEffect(() => {
    service.findAllPlayers()
    .then((players) => {
      setPlayers(players)
    })
  }, [])
  return (
      <div>
        <h2>Player List</h2>
        <ul className="list-group">
          {
            players.map((player) => {
              return (
                  <li className="list-group-item">
                    <Link to={`/players/${player.playerId}`}>
                      {player.username}
                    </Link>
                  </li>
              )
            })
          }
        </ul>

      </div>
  )
}

export default PlayerList

