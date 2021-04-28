import Tournament from "./tournament";

const { useState, useEffect } = React;

const Tournaments = () => {
  const [tournaments, setTournaments] = useState([])
  const [newTournament, setNewTournament] = useState({})
  const createTournament = (tournament) =>
      fetch(`https://localhost:8080/api/tournaments`, {
        method: 'POST',
        body: JSON.stringify(tournament),
        headers: {'content-type': 'application/json'}
      })
      .then(response => response.json())
      .then(tournaments => setTournaments(tournaments => ([...tournaments, tournament])))
  const updateTournament = (id, newTournament) =>
      fetch(`http://localhost:8080/tournaments/${id}/${newTournament.location}`)
      .then(response => response.json())
      .then(tournaments => setTournaments(tournaments => (tournaments.map(tournament => tournament.id === id ? newTournament : tournament))))
  const findAllTournaments = () =>
      fetch(`http://localhost:8080/tournaments`)
      .then(response => response.json())
      .then(tournaments => setTournaments(tournaments))
  const deleteTournament = (id) =>
      fetch(`https://localhost:8080/api/tournaments/${id}`, {
        method: "DELETE"
      })
      .then(response => response.json())
      .then(tournaments => setTournaments(tournaments => tournaments.filter(tournaments => tournaments.id !== id)))
  useEffect(() => {
    findAllTournaments()}, [])
  return(
      <div>
        <h2>Tournaments {tournaments.length}</h2>
        <input value={newTournament.location}
               onChange={(e) => setNewTournament(newTournament => ({...newTournament, location: e.target.value}))}/>
        <input value={newTournament.date}
               onChange={(e) => setNewTournament(newTournament => ({...newTournament, date: e.target.value}))}/>
        <button onClick={() => createTournament(newTournament)}>Create</button>
        {
          tournaments.map(tournament =>
              <Tournament key={tournament.id}
                      updateTournament={updateTournament()}
                      deleteTournament={deleteTournament()}
                      tournament={tournament}/>)
        }
      </div>
  )
}

export default Tournaments;