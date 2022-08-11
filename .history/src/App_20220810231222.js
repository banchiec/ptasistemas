import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDetailsSites, getSites } from './redux/actions/sitesActions';
import store from './redux/store';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDetailsSites())
    dispatch(getSites())
  }, [dispatch])

  console.log(store.getState());
  return (
    <div className="App">
    </div>
  );
}

export default App;
