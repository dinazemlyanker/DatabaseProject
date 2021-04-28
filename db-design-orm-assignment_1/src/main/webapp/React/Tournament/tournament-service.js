const TOURNAMENTS_URL = "http://localhost:8080/api/tournaments"

export const findAllTournaments = () =>
    fetch(TOURNAMENTS_URL)
    .then(response => response.json())


export const findTournamentById = (id) =>
  fetch(`${TOURNAMENTS_URL}/${id}`, {
    headers: {'access-control-allow-origin': '*'}
  })
  .then(response => response.json())


export const deleteTournament = (id) =>
    fetch(`${TOURNAMENTS_URL}/${id}`, {
      method: "DELETE"
    })


export const createTournament = (tournament) => {
  console.log('got here');
  console.log(tournament.date);
  console.log(tournament.location);
  fetch(TOURNAMENTS_URL, {
    method: 'POST',
    body: JSON.stringify(tournament),
    headers: {'content-type': 'application/json', 'access-control-allow-origin': '*'}
  })
  .then(response => response.json());
}


export const updateTournament = (id, tournament) => {
  console.log('got here');
  console.log(id);
  console.log(tournament.date);
  console.log(tournament.location);
  fetch(`${TOURNAMENTS_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(tournament),
    headers: {'content-type': 'application/json'}
  })
  .then(response => response.json());
}

export default {
  findAllTournaments,
  findTournamentById,
  deleteTournament,
  createTournament,
  updateTournament
}
