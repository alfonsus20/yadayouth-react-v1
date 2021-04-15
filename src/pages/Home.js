import React, { useEffect } from "react";
import Container from "../components/Container";
import LandingPageImg from "../assets/landingpage.png";
import YadaYouthMainLogoImg from "../assets/yadayouthmainlogo.png";
import Card from "../components/Card";
import Button from "../components/Button";
import PostCarousel from "../components/PostCarousel";
import Title from "../components/Title";
import { CARD_CONTENTS } from "../utils/constants";
import BlueShape from "../assets/blueshape.png";
import YellowShape from "../assets/yellowshape.png";
import Arrow from "../assets/arrow.png";
import YellowDiamondShape from "../assets/yellowdiamondshape.png";
import styles from "./Home.module.css";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = "Yada Youth";
    scroller.scrollTo(location.hash.replace("#", ""), {
      duration: 500,
      smooth: "easeInOut",
      offset: -96,
    });
  });
  return (
    <div className="relative">
      <Button scrollUp />
      <Container id="home" padding="4% 4% 2% 4%" screen>
        <div className="relative">
          <h2 className="text-6xl text-blue text-center md:text-left font-bold">
            Welcome To Yada Youth!
            <button onClick={() => scroll.scrollTo("serv")}></button>
          </h2>
          <h3 className="text-4xl text-orange text-center md:text-left my-4 md:my-0">
            EMPOWERING CHILDREN OF TOMORROW
          </h3>
          {/* <img src="./star.png" className = {styles.star} />
          <img src="./star.png" className = {styles.star2} /> */}
        </div>
        <div className="flex flex-col-reverse md:flex-row md:mt-16">
          <div className="w-full md:w-6/12 flex justify-center items-center md:justify-start md:items-start">
            <div className="bg-yellow rounded-2xl px-4 py-3 text-2xl text-blue w-auto md:w-112 leading-tight">
              We provide community services where all profits will go to the
              children of Indonesia
            </div>
          </div>
          <div className="w-full md:w-6/12 flex justify-center items-center md:justify-start md:items-start mt-4 mb-8 md:my-0">
            <img
              src={LandingPageImg}
              alt="Landing Page"
              className="object-cover w-10/12  md:ml-auto"
            />
          </div>
        </div>
        <div className="mt-4">
          <img
            src={Arrow}
            alt="Arrow"
            className="mx-auto cursor-pointer"
            onClick={() =>
              scroller.scrollTo("about", {
                smooth: "easeInOut",
                duration: 500,
                offset: -96,
              })
            }
          />
        </div>
      </Container>
      <Container additional="relative" bgColor="yellow" id="about">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center text-2xl relative lg:left-20">
          <div className="bg-blue-light px-10 py-10 mb-4 lg:mb-0 rounded-2xl w-10/12 lg:w-7/12 lg:pr-40 border-white border-4">
            <h4 className="text-yellow mt-4 lg:mt-0">
              Yada Youth means the heighest form of commitment towards the youth
            </h4>
            <p className="text-white font-book mt-4">
              We are a non-profit organization that aims to focus to on the
              empowerment of Indonesian children and young people living in
              poverty through a collective effort to minimize the systemic
              factors which caused poverty
            </p>
          </div>
          <img
            src={YadaYouthMainLogoImg}
            alt="Yada Youth Main Logo"
            className="relative top-12 lg:right-40 lg:top-0 w-80 lg:w-120"
          />
        </div>
      </Container>

      <Container center px={52} id="services">
        <Title
          text="OUR SERVICES"
          bgColor="orange"
          color="white"
          borderColor="white"
        />
        <p className="text-center text-xl w-full md:w-6/12 mt-4 font-book">
          Yada Youth provides volunteer opportunities, community services, and
          development programs to help educate, feed, and empower the youth.
        </p>
        <div className="flex flex-wrap justify-between w-full text-center">
          {CARD_CONTENTS.map((cardContent, id) => {
            return (
              <Card
                key={id}
                image={cardContent.image}
                title={cardContent.title}
                body={cardContent.body}
              />
            );
          })}
        </div>
        <img
          src={BlueShape}
          alt="Blue Shape"
          className={styles.blueShapeLeft + " hidden lg:block"}
        />
        <img
          src={BlueShape}
          alt="Blue Shape"
          className={styles.blueShapeRight + " hidden lg:block"}
        />
      </Container>
      <Container center bgColor="orange">
        <div className="bg-yellow px-4 md:px-16 py-10 rounded-2xl w-10/12 md:w-8/12 border-white border-4 flex flex-col justify-center items-center">
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
            path="/donate#donate"
          />
          <img
            src={YellowDiamondShape}
            alt="Yellow Diamond"
            className={styles.diamondLeft + " hidden md:block"}
          />
          <img
            src={YellowDiamondShape}
            alt="Yellow Diamond"
            className={styles.diamondRight + " hidden md:block"}
          />
          <img
            src={YellowShape}
            alt="Yellow Shape"
            className={styles.yellowShapeLeft + " hidden md:block"}
          />
          <img
            src={YellowShape}
            alt="Yellow Shape"
            className={styles.yellowShapeRight + " hidden md:block"}
          />
        </div>
      </Container>
      <Container center>
        <Title
          text="RECENT POSTS"
          color="blue"
          bgColor="white"
          borderColor="orange"
          width={84}
        />
        <p className="text-center text-xl w-6/12 mt-4 font-book">
          Follow Us at @yadayouth.id
        </p>
        <div className="px-10 py-10 rounded-2xl w-11/12 border-white border-4">
          <PostCarousel />
        </div>
      </Container>
    </div>
  );
};

export default Home;