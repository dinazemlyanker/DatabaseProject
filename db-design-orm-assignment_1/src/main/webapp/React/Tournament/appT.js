import TournamentList from "./tournament-list";
import TournamentFormEditor from "./tournament-form-editor";


const {HashRouter, Link, Route} = window.ReactRouterDOM;

const App = () => {
  return (
      <div className="container-fluid">
        <h1>Tournaments</h1>
        <HashRouter>
          <Route path={["/tournaments", "/"]} exact={true}>
            <TournamentList/>
          </Route>
          <Route path="/tournaments/:id" exact={true}>
            <TournamentFormEditor/>
          </Route>
        </HashRouter>
      </div>
  );
}

export default App;
