import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SITES_LIST_REQUEST } from './redux/constants/sitesConstants';
import { getDetailsSites, getSites } from './redux/actions/sitesActions';
import store from './redux/store';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDetailsSites())
  }, [])
  console.log(store.getState());
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
