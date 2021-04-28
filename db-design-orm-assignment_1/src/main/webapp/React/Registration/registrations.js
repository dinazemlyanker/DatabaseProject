import Registration from "./registration";
import {deleteRegistration, updateRegistration} from "./registration-service";


const { useState, useEffect } = React;

const Registrations = () => {
  const [registrations, setRegistrations] = useState([])
  const [newRegistration, setNewRegistration] = useState({})
  const createRegistration = (registration) =>
      fetch(`https://localhost:8080/api/registrations`, {
        method: 'POST',
        body: JSON.stringify(registration),
        headers: {'content-type': 'application/json'}
      })
      .then(response => response.json())
      .then(registration => setRegistrations(registrations => ([...registrations, registration])))
  const updateRegistration = (id, newRegistration) =>
      fetch(`http://localhost:8080/registrations/${id}/${newRegistration.paid}`)
      .then(response => response.json())
      .then(registrations => setRegistrations(registrations => (registrations.map(registration => registration.id === id ? newRegistration : registration))))
  const findAllRegistrations = () =>
      fetch(`http://localhost:8080/registrations`)
      .then(response => response.json())
      .then(registrations => setRegistrations(registrations))
  const deleteRegistration = (id) =>
      fetch(`https://localhost:8080/api/registrations/${id}`, {
        method: "DELETE"
      })
      .then(response => response.json())
      .then(registrations => setRegistrations(registration => registrations.filter(registrations => registration.id !== id)))
  useEffect(() => {
    findAllRegistrations()}, [])
  return(
      <div>
        <h2>Registrations {registrations.length}</h2>
        <input value={newRegistration.level}
               onChange={(e) => setNewRegistration(newRegistration => ({...newRegistration, level: e.target.value}))}/>
        <input value={newRegistration.paid}
               onChange={(e) => setNewRegistration(newRegistration => ({...newRegistration, paid: e.target.value}))}/>
        <button onClick={() => createRegistration(newRegistration)}>Create</button>
        {
          registrations.map(registration =>
              <Registration key={registration.id}
                      updateRegistration={updateRegistration()}
                      deleteRegistration={deleteRegistration()}
                      registration={registration}/>)
        }
      </div>
  )
}

export default Registrations;