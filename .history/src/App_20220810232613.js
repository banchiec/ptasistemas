import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SITES_LIST_REQUEST } from './redux/constants/sitesConstants';
import logo from './logo.svg';
import './App.css';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({type: SITES_LIST_REQUEST})
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
