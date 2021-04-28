

import playerService, {
  deletePlayer,
  findPlayerById,
  updatePlayer
} from "./player-service"



const {useState, useEffect} = React;
const {useParams} = window.ReactRouterDOM;



const PlayerFormEditor = () => {
  const {id} = useParams()
  const [player, setPlayer] = useState({})
  useEffect(async () => {
    if(id !== "new") {
      setPlayer(await findPlayerById(id));
    }
  }, []);
  const createPlayer = (player) => {
    playerService.createPlayer(player)
    .then(() => history.goBack())
  }
  return (
      <div>
        <h2>Player Editor</h2>
        <label>First Name</label>
        <input
            onChange={(e) =>
                setPlayer(player =>
                    ({...player, firstName: e.target.value}))}
            value={player.firstName}/>
        <label>Last Name</label>
        <input
            onChange={(e) =>
                setPlayer(player =>
                    ({...player, lastName: e.target.value}))}
            value={player.lastName}/>
        <label>Username</label>
        <input
            onChange={(e) =>
                setPlayer(player =>
                    ({...player, username: e.target.value}))}
            value={player.username}/>
        <label>Points</label>
        <input
            onChange={(e) =>
                setPlayer(player =>
                    ({...player, points: e.target.value}))}
            value={player.points}/>
        <label>Date Of Birth</label>
        <input
            onChange={(e) =>
                setPlayer(player =>
                    ({...player, dateOfBirth: e.target.value}))}
            value={player.dateOfBirth}/>
        <label>Password</label>
        <input
            onChange={(e) =>
                setPlayer(player =>
                    ({...player, password: e.target.value}))}
            value={player.password}/>
        <label>Team</label>
        <input
            onChange={(e) =>
                setPlayer(player =>
                    ({...player, team: e.target.value}))}
            value={player.team}/>
        <button
            onClick={() => {
              history.goBack()}}>
          Cancel
        </button>
        <button
            onClick={() => createPlayer(player)}>
          Create
        </button>
        <button
            onClick={async () => await deletePlayer(id)}>
          Delete
        </button>
        <button onClick={async () => await updatePlayer(id, player)}>Save</button>
        <div>
          <h2>Team List</h2>
          <ul className="list-group">
            {
              player.team().map((team) => {
                return (
                    <li className="list-group-item">
                      <Link to={`/teams/${team.id}`}>
                        {team.teamName}
                      </Link>
                    </li>
                )
              })
            }
          </ul>
        </div>
      </div>
  )


}

export default PlayerFormEditor;

