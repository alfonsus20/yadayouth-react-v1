import { BrowserRouter as Router } from "react-router-dom";
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
import AnimatedRoutes from "./components/Animations/AnimatedRoutes";
import RouteTransition from "./components/Animations/RouteTransitions";


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
      <AnimatedRoutes exitBeforeEnter>
        <RouteTransition path="/" component={<Home/>} exact />
        <RouteTransition path="/donate" component={<Donate/>} exact />
        <RouteTransition path="/webinar" component={<Webinar/>} exact />
        {/* <Route path="/webinar/register" component={RegisterWebinar} exact /> */}
        <RouteTransition path="/articles" component={<Articles/>} exact />
        <RouteTransition path="/articles/:id" component={<ArticleDetail/>} exact />
        <RouteTransition path="*" component={<NotFound/>} />
      </AnimatedRoutes>
      <Footer menu={menu} toggleMenu={toggleMenu} mobile={width <= 768} />
    </Router>
  );
};

export default App;
