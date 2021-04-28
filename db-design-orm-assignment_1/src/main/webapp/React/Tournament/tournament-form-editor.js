

import tournamentService, {
  deleteTournament,
  findTournamentById,
  updateTournament
} from "./tournament-service"




const {useState, useEffect} = React;
const {useParams} = window.ReactRouterDOM;


const TournamentFormEditor = () => {
  const {id} = useParams()
  console.log(id);
  const [tournament, setTournament] = useState({})
  useEffect(async () => {
    if(id !== "new") {
      setTournament(await findTournamentById(id))
    }
  }, []);
  const createTournament = (tournament) =>
      tournamentService.createTournament(tournament)
      .then(() => history.goBack())
  return (
      <div>
        <h2>Tournament Editor</h2>
        <label>Location</label>
        <input
            onChange={(e) =>
                setTournament({...tournament, location: e.target.value})}
            value={tournament.location}/>
        <label>Date</label>
        <input
            onChange={(e) =>
                setTournament({...tournament, date: e.target.value})}
            value={tournament.date}/>
        <button
            onClick={() => {
              history.goBack()}}>
          Cancel
        </button>
        <button
            onClick={() => deleteTournament(id)}>
          Delete
        </button>
        <button
            onClick={() => createTournament(tournament)}>
          Create
        </button>
        <button
        onClick={() => updateTournament(id, tournament)}>Save</button>
      </div>
  )


}

export default TournamentFormEditor

