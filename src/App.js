import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router className="App">
      <Navbar/>
      <Switch>
        <Route path = '' component = {Home}/>
      </Switch>
    </Router>
  );
};

export default App;
