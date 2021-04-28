
import PlayerList from "./player-list";
import PlayerFormEditor from "./player-form-editor";
import PlayerCreator from "./create-player";

const {HashRouter, Link, Route} = window.ReactRouterDOM;

const App = () => {
  console.log(PlayerCreator)
  console.log(PlayerFormEditor)
  return (
      <div className="container-fluid">
        <h1>Player Database</h1>
        <HashRouter>
          <Route path={["/players", "/"]} exact={true}>
              <PlayerList/>
          </Route>
          <Route path="/players/:id" exact={true}>
            <PlayerFormEditor/>
          </Route>
        </HashRouter>
      </div>
  );
}

export default App;
