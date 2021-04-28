const REG_URL = "http://localhost:8080/api/registrations"

export const findAllRegistrations = () =>
    fetch(REG_URL)
    .then(response => response.json())


export const findRegistrationById = (id) =>
    fetch(`${REG_URL}/${id}`)
    .then(response => response.json())


export const deleteRegistration = (id) =>
    fetch(`${REG_URL}/${id}`, {
      method: "DELETE"
    })


export const createRegistration = (registration) =>
    fetch(REG_URL, {
      method: 'POST',
      body: JSON.stringify(registration),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


export const updateRegistration = (id, registration) =>
    fetch(`${REG_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(registration),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export default {
  findAllRegistrations,
  findRegistrationById,
  deleteRegistration,
  createRegistration,
  updateRegistration
}
