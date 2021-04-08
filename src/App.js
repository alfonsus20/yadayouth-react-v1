import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Donate from "./pages/Donate";
import Rumah from "./pages/Rumah";

const App = () => {
  return (
    <Router className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/donate" component={Donate} exact />
      </Switch>
    </Router>
  );
};

export default App;
