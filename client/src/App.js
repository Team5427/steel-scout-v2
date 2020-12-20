import { Switch, Route, Redirect } from 'react-router-dom';


import HomePage from 'client/src/pages/home-page/home-page.component';
import LoginPage from 'client/src/pages/login-page/login-page.component';
import Competitions from 'client/src/pages/competitions/competitions.component';
import Scouting from 'client/src/pages/scouting/scouting.component';
import Seasons from 'client/src/pages/seasons/seasons.component';
import Teams from 'client/src/pages/teams/teams.component';
import PitScouting from "./pages/pit_scouting/pit-scouting.component";

function App() {
  return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/competitions' component={Competitions}/>
        <Route path='/pit_scouting' component={PitScouting} />
        <Route path='/teams' component={Teams} />
        <Route path='/seasons' component={Seasons} />
        <Route path='/scouting' component={Scouting} />
      </Switch>
  );
}

export default App;
