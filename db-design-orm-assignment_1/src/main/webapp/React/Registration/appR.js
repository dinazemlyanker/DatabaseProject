
import RegistrationList from "./registration-list";
import RegistrationFormEditor from "./registration-form-editor";


const {HashRouter, Link, Route} = window.ReactRouterDOM;

const AppR = () => {
  return (
      <div className="container-fluid">
        <h1>Registrations</h1>
        <HashRouter>
          <Route path={["/registrations", "/"]} exact={true}>
            <RegistrationList/>
          </Route>
          <Route path="/registrations/:tid" exact={true}>
            <RegistrationFormEditor/>
          </Route>
        </HashRouter>
      </div>
  );
}

export default AppR;
