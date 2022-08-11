import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import SitesListScreen from './screens/SitesListScreen/SitesListScreen';
import { Header } from './screens/SitesListScreen/styles/sitesListScreenStyled';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path='/' component={SitesListScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
