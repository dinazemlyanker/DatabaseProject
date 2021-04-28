import service from "./team-service"

const {useEffect, useState} = React
const {Link} = ReactRouterDOM


const TeamList = () => {
  const [teams, setTeams] = useState([])
  useEffect(() => {
    service.findAllTeams()
    .then((teams) => {
      setTeams(teams)
    })
  }, [])
  return (
      <div>
        <h2>Team List</h2>
        <ul className="list-group">
          {
            teams.map((team) => {
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
        {JSON.stringify(teams)}
      </div>
  )
}

export default TeamList

