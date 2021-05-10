import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer/Footer";
import useWindowDimensions from "./utils/window-dimension";
import { useState, useEffect } from "react";
import Webinar from "./pages/Webinar";
import Articles from "./pages/Article";
import ArticleDetail from "./components/Article/ArticleDetail";

const App = () => {
  const [menu, toggleMenu] = useState(false);

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > 768) {
      toggleMenu(true);
    } else {
      toggleMenu(false);
    }
  }, [width]);

  return (
    <Router className="App">
      <Navbar menu={menu} toggleMenu={toggleMenu} mobile={width <= 768} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/donate" component={Donate} exact />
        <Route path="/webinar" component={Webinar} exact />
        {/* <Route path="/webinar/register" component={RegisterWebinar} exact /> */}
        <Route path="/articles" component={Articles} exact />
        <Route path="/articles/:id" component={ArticleDetail} exact />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer menu={menu} toggleMenu={toggleMenu} mobile={width <= 768} />
    </Router>
  );
};

export default App;
