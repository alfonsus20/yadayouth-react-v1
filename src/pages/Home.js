import React, { useEffect } from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import Button from "../components/Button";
import PostCarousel from "../components/PostCarousel";
import Title from "../components/Title";
import { CARD_CONTENTS } from "../utils/constants";
import styles from "./Home.module.css";
import { animateScroll as scroll, scroller } from "react-scroll";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    document.title = "Yada Youth";
  });

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
      <Container padding="4% 7%" screen id="home">
        <Fade delay={250}>
          <div className="relative">
            <h2 className="text-6xl text-blue text-center md:text-left font-bold">
              Welcome To Yada Youth!
              <button onClick={() => scroll.scrollTo("serv")}></button>
            </h2>
            <h3 className="text-3xl text-orange text-center md:text-left my-4 md:my-0">
              EMPOWERING CHILDREN OF TOMORROW
            </h3>
          </div>
        </Fade>

        <div className="flex flex-col-reverse md:flex-row md:mt-16">
          <Fade delay={750}>
            <div className="w-full md:w-6/12 flex justify-center items-center md:justify-start md:items-start">
              <div className="bg-yellow rounded-2xl px-4 py-3 text-2xl text-blue w-auto md:w-92 leading-tight text-justify">
                We provide community services where all profits will go to the
                children of Indonesia
              </div>
            </div>
          </Fade>
          <Fade delay={500}>
            <div className="w-full md:w-6/12 flex justify-center items-center md:justify-start md:items-start mt-4 mb-8 md:my-0">
              <img
                src="/pictures/landingpage.png"
                alt="Landing Page"
                className="w-10/12 h-auto md:ml-auto"
              />
            </div>
          </Fade>
        </div>
        <Fade>
          <img
            src="/shapes/arrow.png"
            alt="Arrow"
            className="cursor-pointer mx-auto my-6 sm:my-0"
            onClick={() =>
              scroller.scrollTo("about", {
                smooth: "easeInOut",
                duration: 500,
                offset: -70,
              })
            }
          />
        </Fade>
      </Container>

      <Container additional="relative" bgColor="yellow" id="about">
        <Fade left>
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center text-2xl relative lg:left-20 max-w-8xl mx-auto">
            <div className="bg-blue-light px-10 py-10 mb-4 lg:mb-0 rounded-2xl w-10/12 lg:w-7/12 lg:pr-40 border-white border-4">
              <h4 className="text-yellow mt-4 lg:mt-0">
                Yada Youth means the heighest form of commitment towards the
                youth
              </h4>
              <p className="text-white font-book mt-4">
                We are a non-profit organization that aims to focus to on the
                empowerment of Indonesian children and young people living in
                poverty through a collective effort to minimize the systemic
                factors which caused poverty
              </p>
            </div>
            <img
              src="/pictures/yadayouthmainlogo.svg"
              alt="Yada Youth Main Logo"
              className="relative top-12 lg:right-40 lg:top-0 w-80 lg:w-120"
            />
          </div>
        </Fade>
      </Container>

      <Container center px={52} id="services" additional="max-w-10xl mx-auto">
        <Fade bottom>
          <Title
            text="OUR SERVICES"
            bgColor="orange"
            color="white"
            borderColor="white"
          />
        </Fade>
        <Fade bottom>
          <p className="text-center text-xl w-full md:w-6/12 mt-4 font-book">
            Yada Youth provides volunteer opportunities, community services, and
            development programs to help educate, feed, and empower the youth.
          </p>
        </Fade>
        <Fade bottom>
          <div className="flex flex-wrap justify-between w-full text-center">
            {CARD_CONTENTS.map((cardContent, id) => {
              return (
                <Card
                  key={id}
                  image={cardContent.image}
                  title={cardContent.title}
                  body={cardContent.body}
                  link={cardContent.link}
                />
              );
            })}
          </div>
        </Fade>

        <Fade right>
          <img
            src="/shapes/blueshape.png"
            alt="Blue Shape"
            className={styles.blueShapeLeft + " hidden lg:block"}
          />
        </Fade>
        <Fade left>
          <img
            src="/shapes/blueshape.png"
            alt="Blue Shape"
            className={styles.blueShapeRight + " hidden lg:block"}
          />
        </Fade>
      </Container>
      <Container center bgColor="orange">
        <div className="bg-yellow px-4 md:px-16 py-10 rounded-2xl w-10/12 md:w-8/12 border-white border-4 flex flex-col justify-center items-center max-w-8xl mx-auto">
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
            width="72"
            path="/donate"
          />
          <Fade right>
            <img
              src="/shapes/yellowdiamondshape.png"
              alt="Yellow Diamond"
              className={styles.diamondLeft + " hidden md:block"}
            />
          </Fade>
          <Fade left>
            <img
              src="/shapes/yellowdiamondshape.png"
              alt="Yellow Diamond"
              className={styles.diamondRight + " hidden md:block"}
            />
          </Fade>
          <Fade right>
            <img
              src="/shapes/yellowshape.png"
              alt="Yellow Shape"
              className={styles.yellowShapeLeft + " hidden md:block"}
            />
          </Fade>
          <Fade left>
            <img
              src="/shapes/yellowshape.png"
              alt="Yellow Shape"
              className={styles.yellowShapeRight + " hidden md:block"}
            />
          </Fade>
        </div>
      </Container>
      {/* <Container bgImage="gradient_5.jpg">
        <img
          src="/pictures/oprec-left.png"
          className="absolute left-0 bottom-0 w-100 hidden md:block"
          alt="leftOprec"
        />
        <div className={`${styles.oprecContainer} max-w-10xl mx-auto`}>
          <Link
            to="/oprec"
            className="bg-white w-full md:w-8/12 py-16 mx-auto flex flex-col justify-center items-center rounded-lg md:rounded-full relative z-10"
          >
            <Title
              text="OPEN RECRUITMENT STAFF"
              width="92"
              fontSize="xl"
              bgColor="blue"
              color="yellow"
              borderColor="blue"
            />
            <p className="w-8/12 mt-6 text-center text-lg font-book">
              We are opening recruitment for staff position in Yada Youth!
              <br />
              Let’s grow with us and get new benefit experience together!
            </p>
          </Link>
        </div>
        <img
          src="/pictures/oprec-right.png"
          className="absolute right-0 bottom-0 w-100 hidden md:block"
          alt="leftOprec"
        />
      </Container> */}
      <Container center additional="max-w-10xl mx-auto">
        <Fade bottom>
          <Title
            text="RECENT POSTS"
            color="blue"
            bgColor="white"
            borderColor="orange"
            width={84}
          />
        </Fade>
        <Fade bottom>
          <p className="text-center text-xl w-6/12 mt-4 font-book">
            Follow Us at @yadayouth.id
          </p>
        </Fade>
        <div className="px-10 py-10 rounded-2xl w-11/12 border-white border-4">
          <PostCarousel />
        </div>
      </Container>
    </div>
  );
};

export default Home;
