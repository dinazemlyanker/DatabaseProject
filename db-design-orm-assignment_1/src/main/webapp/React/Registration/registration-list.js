import service from "./registration-service"
import registration from "./registration";

const {useEffect, useState} = React
const {Link} = ReactRouterDOM

const RegistrationList = () => {
  const [registrations, setRegistrations] = useState([])
  useEffect(() => {
    service.findAllRegistrations()
    .then((registrations) => {
      setRegistrations(registrations)
    })
  }, [])
  return (
      <div>
        <h2>Registration List</h2>
        <ul className="list-group">
          {
            registrations.map((registration) => {
              return (
                  <li className="list-group-item">
                    <Link to={`/registrations/${registration.id}`}>
                      {registration.level},
                      {registration.tournament},
                      {registration.paid}
                    </Link>
                  </li>
              )
            })
          }
        </ul>
        {JSON.stringify(registrations)}
      </div>
  )
}

export default RegistrationList