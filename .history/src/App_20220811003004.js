import { Route, Router, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
