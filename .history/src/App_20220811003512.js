import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './screens/SitesListScreen/styles/sitesListScreenStyled';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path='/'/ component={}>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
