const { useState, useEffect } = React;


const Registration = ({registration, deleteRegistration, updateRegistration}) => {
  const [registrationCopy, setRegistrationCopy] = useState(registration)
  const [editing, setEditing] = useState(false)
  return(
      <div>
        {
          editing &&
          <div>
            <input value={registrationCopy.level} onChange={(e)=>setRegistrationCopy(registrationCopy => ({...registrationCopy, level: e.target.value}))}/>
            <input value={registrationCopy.paid} onChange={(e)=>setRegistrationCopy(registrationCopy => ({...registrationCopy, paid: e.target.value}))}/>
            <button onClick={() => deleteRegistration(registration.id)}>Delete</button>
            <button onClick={() => {
              setEditing(false)
              updateRegistration(registrationCopy.id, registrationCopy)
            }}>Save</button>
          </div>
        }
        {
          !editing &&
          <div>
            {registrationCopy.level}
            {registrationCopy.paid}
            <button onClick={() => setEditing(true)}>Edit</button>
          </div>
        }
      </div>
  )
}

export default Registration;

