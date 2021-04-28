
import registrationService, {
  createRegistration,
  deleteRegistration, findRegistrationById,
  updateRegistration
} from "./registration-service";
import registration from "./registration";
import {updatePlayer} from "../Player/player-service";

const {useState, useEffect} = React;
const {useParams} = window.ReactRouterDOM;
const RegistrationEditor = () => {
  const {id} = useParams()
  const [registration, setRegistration] = useState({})
  useEffect(() => {
    findRegistrationById(id)
  }, []);
  const findRegistrationById = (id) =>
      registrationService.findRegistrationById(id)
      .then(registration => setRegistration(registration))

  return (
      <div>
        <h2>Registration Editor</h2>
        <label>ID</label>
        <input value={registration.id}/><br/>
        <label>Level</label>
        <input value={registration.level}/><br/>
        <label>Tournament</label>
        <input value={registration.tournament}/><br/>
        <label>Paid</label>
        <input value={registration.paid}/><br/>
        <button>Cancel</button>
        <button>Delete</button>
        <button>Create</button>
        <button>Save</button>
      </div>
  )
}


const RegistrationFormEditor = () => {

  useEffect(() => {
    if(id !== "new") {
      findRegistrationById(id)
    }
  }, []);
  const createRegistration = (registration) =>
      registrationService.createRegistration(registration)
      .then(() => history.goBack())
  return (
      <div>
        <h2>Registration Editor</h2>
        <label>Level</label>
        <input
            onChange={(e) =>
                updateRegistration(registration =>
                    ({...registration, level: e.target.value}))}
            value={registration.level}/>
        <label>Paid</label>
        <input
            onChange={(e) =>
                updateRegistration(registration =>
                    ({...registration, paid: e.target.value}))}
            value={registration.paid}/>
        <button
            onClick={() => {
              history.goBack()}}>
          Cancel
        </button>
        <button
            onClick={() => deleteRegistration(id)}>
          Delete
        </button>
        <button onClick={async () => await updatePlayer(id, registration)}>Save</button>
        <button onClick={async () => await createPlayer(registration)}>Create</button>
      </div>
  )


}

export default RegistrationFormEditor