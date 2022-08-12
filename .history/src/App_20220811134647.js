import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import SitesListScreen from './screens/SitesListScreen/SitesListScreen';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' component={SitesListScreen} />
          <Route path='/site/:siteId' component={SitesListScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
