import { Switch, Route, Redirect } from 'react-router-dom';


import HomePage from 'client/pages/home-page/home-page.component';
import LoginPage from 'client/pages/login-page/login-page.component';
import Competitions from 'client/pages/competitions/competitions.component';
import Scouting from 'client/pages/scouting/scouting.component';
import Seasons from 'client/pages/seasons/seasons.component';
import Teams from 'client/pages/teams/teams.component';
import PitScouting from "../pages/pit_scouting/pit-scouting.component";

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
