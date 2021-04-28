
import service from './team-service'





const {useState, useEffect} = React;
const {useParams} = window.ReactRouterDOM;


const TeamFormEditor = () => {
  const {id} = useParams()
  console.log(id);
  const [team, setTeam] = useState({})
  useEffect(async () => {
    if(id !== "new") {
      setTeam(await findTeamById(id))
    }
  }, []);
  const createTeam = (team) =>
      service.createTeam(team)
      .then(() => history.goBack())
  return (
      <div>
        <h2>Team Editor</h2>
        <label>Location</label>
        <input
            onChange={(e) =>
                setTeam({...team, teamName: e.target.value})}
            value={team.teamName}/>
        <label>Players</label>
        <input
            onChange={(e) =>
                setTeam({...team, players: e.target.value})}
            value={team.players}/>
        <label>Registrations</label>
        <input
            onChange={(e) =>
                setTeam({...team, registrations: e.target.value})}
            value={team.registrations}/>

        <button
            onClick={() => {
              history.goBack()}}>
          Cancel
        </button>
        <button
            onClick={() => deleteTeam(id)}>
          Delete
        </button>
        <button
            onClick={() => createTeam(team)}>
          Create
        </button>
        <button
            onClick={() => updateTeam(id, team)}>Save</button>
        <div>
          <h2>Player List</h2>
          <ul className="list-group">
            {
              team.players.map((player) => {
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
      </div>
  )


}

export default TeamFormEditor

