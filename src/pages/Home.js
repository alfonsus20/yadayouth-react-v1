import React from "react";
import Container from "../components/Container";
import styles from "./Home.module.css";
import DonationImg from "../assets/donation.png";
import WebinarsImg from "../assets/webinars.png";
import CommServImg from "../assets/comm_serv.png";
import LandingPageImg from "../assets/landingpage.png";
import YadaYouthMainLogoImg from "../assets/yadayouthmainlogo.png";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Button from "../components/Button";
import PostCarousel from "../components/PostCarousel";

const Home = () => {
  return (
    <div>
      <Container id="main" px={56} py={24} >
        {/* <div className="absolute top-52 -left-40 w-56 h-2/4 border-orange border-4 rounded-lg"></div>
        <div className="absolute top-52 -right-40 w-56 h-2/4 border-orange border-4 rounded-lg"></div> */}
        <div className="relative ">
          <h2 className="text-6xl text-blue mt-28 md:mt-24 text-center md:text-left">Welcome To Yada Youth!</h2>
          <h3 className="text-4xl text-orange text-center md:text-left my-4 md:my-0">
            EMPOWERING CHILDREN OF TOMORROW
          </h3>
          {/* <img src="./star.png" className = {styles.star} />
          <img src="./star.png" className = {styles.star2} /> */}
        </div>
        <div className="flex flex-col-reverse md:flex-row md:mt-16">
          <div className="w-full md:w-6/12 flex justify-center items-center md:justify-start md:items-start">
            <div className="bg-yellow rounded-2xl px-4 py-3 text-2xl text-blue w-10/12 lg:w-80">
              We provide community services where all profits will go to the
              children of Indonesia
            </div>
          </div>
          <div className="w-full md:w-6/12 flex justify-center items-center md:justify-start md:items-start mt-4 mb-8 md:my-0">
            <img
              src={LandingPageImg}
              className="object-cover w-10/12 md:ml-auto"
            />
          </div>
        </div>
      </Container>
      <Container additional="relative" bgColor="yellow">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center text-2xl relative lg:left-20">
          <div className="bg-blue-light px-10 py-10 mb-4 lg:mb-0 rounded-2xl w-10/12 lg:w-7/12 pr-16 border-white border-4">
            <h4 className="text-yellow mt-4 lg:mt-0">
              Yada Youth means the heighest form of commitment towards the youth
            </h4>
            <p className="text-white">
              We are a non-profit organization that aims to focus to on the
              empowerment of Indonesian children and young people living in
              poverty through a collective effort to minimize the systemic
              factors which caused poverty
            </p>
          </div>
          <img
            src={YadaYouthMainLogoImg}
            className="relative top-12 lg:right-20 lg:top-0 w-80 lg:w-108"
          />
        </div>
      </Container>
      <Container additional="flex flex-col justify-center items-center" px={52}>
        <h2 className="text-center text-white text-2xl rounded-2xl bg-orange w-64 py-2">
          OUR SERVICES
        </h2>
        <p className="text-center text-xl w-5/12 md:w-8/12 w-full mt-4 ">
          Yada Youth provides volunteer opportunities, community services, and
          development programs to help educate, feed, and empower the youth.
        </p>
        <div className="flex flex-wrap justify-between w-full text-center  ">
          <Card
            image={DonationImg}
            title="Open Donations"
            body="We are open for donations with all profits will be given to the children in Indonesia"
          />
          <Card
            image={CommServImg}
            title="Community Services"
            body="We conduct voluntary work to educate, distribute food, and empower children"
          />
          <Card
            image={WebinarsImg}
            title="Webinars"
            body="We provides self development webinars to help fund out community service"
          />
        </div>
      </Container>
      <Container
        additional="flex flex-col justify-center items-center text-center"
        bgColor="orange"
      >
        <div className="bg-yellow px-4 md:px-16 py-10 rounded-2xl w-10/12 md:w-8/12 border-white border-4 flex flex-col justify-center items-center">
          <h4 className="text-2xl font-bold">HOW TO DONATE</h4>
          <p className="text-xl my-2">
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
          />
        </div>
      </Container>
      <Container additional="flex flex-col justify-center items-center text-center">
        <h2 className="text-center text-blue text-2xl rounded-2xl border-orange border-4 w-64 py-2">
          RECENT POSTS
        </h2>
        <p className="text-center text-xl w-6/12 mt-4 ">
          Follow Us at @yadayouth.id
        </p>
        <div className="px-10 py-10 rounded-2xl w-11/12 border-white border-4">
          <PostCarousel/>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
