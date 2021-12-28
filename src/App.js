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
import ArticleDetail from "./pages/ArticleDetail";
import AnimatedRoutes from "./components/Animations/AnimatedRoutes";
import RouteTransition from "./components/Animations/RouteTransitions";

import ScrollToTop from "./components/ScrollToTop";
import Ambassador from "./pages/Ambassador";
import About from "./pages/About";

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
        {/* <Route path="/webinar/register" component={RegisterWebinar} exact /> */}
        <RouteTransition path="/articles" component={<Articles />} exact />
        <RouteTransition
          path="/articles/:id"
          component={<ArticleDetail />}
          exact
        />
        {/* <RouteTransition path="/OprecStaff" component={<Oprec />} exact /> */}
        <RouteTransition
          path="/ProjectAmbassadorBatch2"
          component={<Ambassador />}
          exact
        />
        <RouteTransition path="*" component={<NotFound />} />
      </AnimatedRoutes>
      <Footer menu={menu} toggleMenu={toggleMenu} mobile={width <= 768} />
    </Router>
  );
};

export default App;
