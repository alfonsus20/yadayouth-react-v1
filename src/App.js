import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/Animations/AnimatedRoutes";
import RouteTransition from "./components/Animations/RouteTransitions";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Articles from "./pages/Article";
import ArticleDetail from "./pages/ArticleDetail";
import Donate from "./pages/Donate";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Oprec from "./pages/Oprec";
import RegisterWebinar from "./pages/RegisterWebinar";
import Webinar from "./pages/Webinar";
import useWindowDimensions from "./utils/window-dimension";

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
      <ScrollToTop />
      <AnimatedRoutes exitBeforeEnter>
        <RouteTransition path="/" component={<Home />} exact />
        <RouteTransition path="/donate" component={<Donate />} exact />
        <RouteTransition path="/webinar" component={<Webinar />} exact />
        <RouteTransition path="/about" component={<About />} exact />
        <RouteTransition
          path="/webinar/register"
          component={<RegisterWebinar />}
          exact
        />
        <RouteTransition path="/articles" component={<Articles />} exact />
        <RouteTransition
          path="/articles/:id"
          component={<ArticleDetail />}
          exact
        />
        <RouteTransition path="/oprec" component={<Oprec />} exact />
        <RouteTransition path="*" component={<NotFound />} />
      </AnimatedRoutes>
      <Footer menu={menu} toggleMenu={toggleMenu} mobile={width <= 768} />
    </Router>
  );
};

export default App;
