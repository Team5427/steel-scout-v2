import {Switch, Route, Redirect} from 'react-router-dom';
import Seasons from './pages/seasons/seasonsViewData.component';
import Teams from './pages/teams/teams.component';
import CompetitionsData from "./pages/competitions/competitionsViewData.component";
import CompetitionsComponent from "./pages/competitions/competitions.component";
import TeamData from "./pages/teams/teamsViewData.component";
import SeasonData from "./pages/seasons/seasonsViewData.component";
import SeasonsComponent from "./pages/seasons/seasons.component";
import ScoutingComponent from "./pages/scouting/scouting.component";
import ScoutingData from "./pages/scouting/scoutingViewData.component";
import PitScoutingComponent from "./pages/pit_scouting/pit-scouting.component";
import PitscoutingData from "./pages/pit_scouting/pit-scoutingViewData.component";

function App() {
    return (
        <Switch>

            {/*competitions*/}
            <Route path='/competitionsData' component={CompetitionsData}/>
            <Route path='/competitions' component={CompetitionsComponent}/>

            {/*teams*/}
            <Route path='/teams' component={Teams}/>
            <Route path='/teamsData' component={TeamData}/>

            {/*seasons*/}
            <Route path='/seasons' component={SeasonsComponent}/>
            <Route path='/seasonData' component={SeasonData}/>

            {/*scouting*/}
            <Route path='/scouting' component={ScoutingComponent}/>
            <Route path='/scoutingData' component={ScoutingData}/>

            {/*pit-scouting*/}
            <Route path='/pit-scouting' component={PitScoutingComponent}/>
            <Route path='/pit-scoutingData' component={PitscoutingData}/>


        </Switch>


    );
}

export default App;
