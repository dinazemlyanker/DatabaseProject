const TEAM_URL = "http://localhost:8080/api/teams"

export const findAllTeams = () =>
    fetch(TEAM_URL)
    .then(response => response.json())


export const findTeamById = (id) =>
    fetch(`${TEAM_URL}/${id}`)
    .then(response => response.json())


export const deleteTeamById = (id) =>
    fetch(`${TEAM_URL}/${id}`, {
      method: "DELETE"
    })


export const createTeam = (team) =>
    fetch(TEAM_URL, {
      method: 'POST',
      body: JSON.stringify(team),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


export const updateTeam = (id, team) =>
    fetch(`${TEAM_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(team),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export default {
  findAllTeams,
  findTeamById,
  deleteTeamById,
  createTeam,
  updateTeam
}
