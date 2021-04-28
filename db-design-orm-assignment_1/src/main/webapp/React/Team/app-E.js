

import TeamFormEditor from "./team-form-editor";
import TeamList from "./team-list";


const {HashRouter, Link, Route} = window.ReactRouterDOM;

const App = () => {
  return (
      <div className="container-fluid">
        <h1>Player Database</h1>
        <HashRouter>
          <Route path={["/teams", "/"]} exact={true}>
            <TeamList/>
          </Route>
          <Route path="/teams/:id" exact={true}>
            <TeamFormEditor/>
          </Route>
        </HashRouter>
      </div>
  );
}

export default App;
