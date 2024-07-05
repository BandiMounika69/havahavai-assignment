import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/Home/home';
import AirportDetails from './components/AirportDetails/AirportDetails';
import { Routes,Route } from 'react-router-dom'

function App() {
  return (

    <Routes>
      <Route exact path="/" Component={HomeComponent}/>
      <Route exact path ="details/:id" Component={AirportDetails}/>
    </Routes>
  );
}

export default App;
