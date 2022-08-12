import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import SitesListScreen from './screens/SitesListScreen/SitesListScreen';
import Header from './components/Header/Header';
import SiteDetailsScreen from './screens/SiteDetailsSreen/SiteDetailsScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' component={SitesListScreen} />
          <Route path='/site/:siteId' component={SiteDetailsScreen} />
          <Route> 404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
