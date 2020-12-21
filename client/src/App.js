import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home-page/home-page.component';
import LoginPage from './pages/login-page/login-page.component';
import Scouting from './pages/scouting/scouting.component';
import Seasons from './pages/seasons/seasons.component';
import Teams from './pages/teams/teams.component';
import PitScouting from "./pages/pit_scouting/pit-scouting.component";
import Competitions from "./pages/competitions/competitions.component";
import "bootstrap/dist/css/bootstrap.min.css";
import {Table,Modal,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

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
