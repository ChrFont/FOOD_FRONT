import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Home from './pages/Home'
import Details from "./pages/Details"
import Form from "./pages/Form"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/details/:id" component={Details}></Route>
          <Route path="/form" component={Form}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
