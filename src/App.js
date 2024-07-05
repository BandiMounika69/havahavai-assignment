import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/Home/home';
import Airportdetails from './components/Airportdetailcomponent/airportdetails';
import Details from './components/Details/details'; 
import { Routes,Route } from 'react-router-dom'

function App() {
  return (

    <Routes>
      <Route exact path="/" Component={HomeComponent}/>
      <Route exact path ="details/:id" Component={Details}/>
    </Routes>
  );
}

export default App;
