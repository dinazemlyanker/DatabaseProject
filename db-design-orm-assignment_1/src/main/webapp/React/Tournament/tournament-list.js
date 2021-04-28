import service from "./tournament-service"

const {useEffect, useState} = React
const {Link} = ReactRouterDOM

const TournamentList = () => {
  const [tournaments, setTournaments] = useState([])
  useEffect(() => {
    service.findAllTournaments()
    .then((tournaments) => {
      setTournaments(tournaments)
    })
  }, [])
  return (
      <div>
        <h2>Tournament List</h2>
        <ul className="list-group">
          {
            tournaments.map((tournament) => {
              return (
                  <li className="list-group-item">
                    <Link to={`/tournaments/${tournament.id}`}>
                      {tournament.location},
                      {tournament.date}
                    </Link>
                  </li>
              )
            })
          }
        </ul>

      </div>
  )
}

export default TournamentList