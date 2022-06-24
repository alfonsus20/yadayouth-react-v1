import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import { animateScroll as scroll, scroller } from "react-scroll";
import Button from "../components/Button";
import Card from "../components/Card";
import PostCarousel from "../components/PostCarousel";
import Title from "../components/Title";
import { getInstagramPosts } from "../model";
import { CARD_CONTENTS } from "../utils/constants";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const { data } = await getInstagramPosts();
        setLoading(true);
        setPosts(data.results);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchInstagramPosts();
  }, []);

  return (
    <div className="relative">
      <Helmet>
        <title>YadaYouth</title>
        <meta
          name="description"
          content="YadaYouth.id | “Empowering Children of Tomorrow” | We are a non-profit organization 
          that aims to focus to on the empowerment of Indonesian children and young people living in 
          poverty through a collective effort to minimize the systemic factors which caused poverty "
        />
      </Helmet>
      <Button scrollUp />
      <div
        className="min-h-screen py-16 px-20 bg-no-repeat bg-cover relative"
        id="home"
        style={{ backgroundImage: "url('./backgrounds/landing-page.png')" }}
      >
        <div className="max-w-7xl mx-auto">
          <Fade delay={250}>
            <div className="relative">
              <h2 className="text-6xl text-white text-center md:text-left font-bold">
                Welcome To Yada Youth!
                <button onClick={() => scroll.scrollTo("serv")}></button>
              </h2>
              <h3 className="text-3xl text-yellow text-center md:text-left my-4 md:my-0">
                EMPOWERING CHILDREN OF TOMORROW
              </h3>
            </div>
          </Fade>
          <div className="flex flex-col-reverse md:flex-row md:mt-16">
            <Fade delay={750}>
              <div className="w-full md:w-6/12 flex justify-center items-center md:justify-start md:items-start">
                <div className="bg-orange rounded-2xl px-4 py-3 text-2xl text-white w-auto md:w-92 leading-tight text-justify">
                  We provide community services where all profits will go to the
                  children of Indonesia
                </div>
              </div>
            </Fade>
          </div>
          <Fade>
            <img
              src="/shapes/arrow.png"
              alt="Arrow"
              className="cursor-pointer mx-auto absolute bottom-12 left-0 right-0"
              onClick={() =>
                scroller.scrollTo("about", {
                  smooth: "easeInOut",
                  duration: 500,
                  offset: -70,
                })
              }
            />
          </Fade>
        </div>
      </div>

      <div className="relative py-16 overflow-x-hidden" id="about">
        <Fade left>
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center text-2xl relative lg:left-20 max-w-8xl mx-auto ">
            <div className="bg-blue-light px-10 py-10 mb-4 lg:mb-0 rounded-2xl w-10/12 lg:w-7/12 lg:pr-40 border-yellow border-4 ">
              <p className="text-white font-book mt-4">
                Yada Youth is a non-profit organization that aims to focus to on
                the empowerment of Indonesian children and young people living
                in poverty through a collective effort to minimize the systemic
                factors which caused poverty
              </p>
              <div className="flex justify-center">
                <Button
                  text="LEARN MORE"
                  fontSize="lg"
                  color="blue"
                  rounded="full"
                  bgColor="yellow"
                  path="/about"
                />
              </div>
            </div>
            <img
              src="/pictures/yadayouthmainlogo.svg"
              alt="Yada Youth Main Logo"
              className="relative top-12 lg:right-40 lg:top-0 w-80 lg:w-120 border-yellow border-4 rounded-full"
            />
          </div>
        </Fade>
      </div>
      <div className="bg-yellow py-16 rounded-t-2xl" id="services">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <Fade bottom>
            <Title
              text="OUR SERVICES"
              bgColor="orange"
              color="white"
              borderColor="white"
            />
          </Fade>
          <Fade bottom>
            <p className="text-center text-xl w-full md:w-6/12 font-book px-4">
              Yada Youth provides volunteer opportunities, community services,
              and development programs to help educate, feed, and empower the
              youth.
            </p>
          </Fade>
          <Fade bottom>
            <div className="flex flex-wrap justify-between w-full text-center">
              {CARD_CONTENTS.map((cardContent, id) => {
                return <Card key={id} {...cardContent} />;
              })}
            </div>
          </Fade>
        </div>
      </div>
      <div className="py-12 bg-yellow rounded-b-2xl">
        <div className="flex flex-center items-center relative max-w-7xl mx-auto">
          <div className="bg-orange-light px-4 md:px-16 py-10 rounded-2xl w-10/12 md:w-8/12 border-orange border-4 flex flex-col justify-center items-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold">HOW TO DONATE</h2>
            <p className="text-xl my-2 font-book">
              Yada Youth would like to inform you on several future plans,
              including development programs in villages and slums around
              Indonesia. In accordance to that, Yada Youth Indonesia invites you
              to contribute to this program by donating through:
            </p>
            <Button
              text="CLICK HERE TO DONATE"
              bgColor="blue-light"
              color="yellow"
              path="/donate"
            />
          </div>
          <Fade right>
            <img
              src="/shapes/blueshape.png"
              alt="Blue Shape"
              className="absolute left-0 hidden lg:block"
            />
          </Fade>
          <Fade left>
            <img
              src="/shapes/blueshape.png"
              alt="Blue Shape"
              className="absolute right-0 hidden lg:block"
            />
          </Fade>
        </div>
      </div>
      <div className="flex flex-col items-center py-16 max-w-7xl mx-auto">
        <Fade bottom>
          <Title
            text="RECENT POSTS"
            color="blue"
            bgColor="white"
            borderColor="orange"
          />
        </Fade>
        <Fade bottom>
          <p className="text-center text-xl w-6/12 font-book">
            Follow Us at @yadayouth.id
          </p>
        </Fade>
        <div className="px-10 py-10 rounded-2xl w-11/12 border-white border-4">
          <PostCarousel
            posts={posts}
            loading={loading}
            slidesToScroll={3}
            slidesToShow={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
