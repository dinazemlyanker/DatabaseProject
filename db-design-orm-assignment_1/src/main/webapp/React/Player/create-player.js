import playerService, {
  findPlayerById,
} from "./player-service"



const {useState, useEffect} = React;
const {useParams} = window.ReactRouterDOM;



const PlayerCreator = () => {
  const [player, setPlayer] = useState({})
  const createPlayer = (player) =>
      playerService.createPlayer(player)
      .then(() => history.goBack())
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
        <label>Password</label>
        <input
            onChange={(e) =>
                setPlayer(player =>
                    ({...player, password: e.target.value}))}
            value={player.password}/>
        <button
            onClick={async () => await createPlayer(player)}>
          Create
        </button>
      </div>
  )


}


export default PlayerCreator












