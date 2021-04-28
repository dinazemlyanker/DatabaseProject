const { useState, useEffect } = React;

const Tournament = ({tournament, deleteTournament, updateTournament}) => {
  const [tournamentCopy, setTournamentCopy] = useState(tournament)
  const [editing, setEditing] = useState(false)
  return(
      <div>
        {
          editing &&
          <div>
            <input value={tournamentCopy.location} onChange={(e)=>setTournamentCopy(tournamentCopy => ({...tournamentCopy, location: e.target.value}))}/>
            <input value={tournamentCopy.date} onChange={(e)=>setTournamentCopy(tournamentCopy => ({...tournamentCopy, date: e.target.value}))}/>
            <button onClick={() => deleteTournament(tournament.id)}>Delete</button>
            <button onClick={() => {
              setEditing(false)
              updateTournament(tournamentCopy.id, tournamentCopy)
            }}>Save</button>
          </div>
        }
        {
          !editing &&
          <div>
            {tournamentCopy.location}
            {tournamentCopy.date}
            <button onClick={() => setEditing(true)}>Edit</button>
          </div>
        }
      </div>
  )
}

export default Tournament;

