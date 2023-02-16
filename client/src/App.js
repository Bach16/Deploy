import './App.css';
import {Route} from "react-router-dom"
import LandingPage from "./components/landing/LandingPage"
import Home from "./components/home/Home"
import Detail from "./components/details/Detail"
import Create from "./components/form/Create"
import axios from "axios"
axios.defaults.baseURL = "https://deploy-production-c88e.up.railway.app"


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route path='/home' component={Home}/>
      <Route path='/countrie/:id' component={Detail}/>
      <Route path="/create" component={Create}/>      
    </div>
  );
}

export default App;
