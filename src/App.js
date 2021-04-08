import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/donate" component={Donate} exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
