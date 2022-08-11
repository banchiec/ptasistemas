import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { getSites, getSitesList } from './redux/actions/sitesActions';
import { useDispatch, useSelector } from 'react-redux';
import { SITES_LIST_REQUEST } from './redux/constants/sitesConstants';

function App() {
  const dispatch = useDispatch()
  const {sites} = useSelector((state) => state.sitesList)

  useEffect(() => {
    dispatch(getSites())
  }, [])
  console.log(sites);
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
