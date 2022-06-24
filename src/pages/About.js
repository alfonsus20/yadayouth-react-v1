import moment from "moment";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Accordion from "../components/Accordion";
import Title from "../components/Title";
import { getEventList } from "../model/eventList";

const About = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPastEvents = async () => {
      try {
        const { data } = await getEventList();
        setPosts(data.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPastEvents();
  }, []);

  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div
        className="bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('./backgrounds/about-page.png')" }}
      >
        <div className="min-h-screen flex flex-col md:flex-row max-w-7xl p-12 lg:px-4 mx-auto items-center justify-center">
          <h1
            className="w-full md:w-1/2 text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue via-yellow to-orange bg-clip-text mb-8 md:mb-0"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            About <br />
            Yada Youth <br /> Indonesia
          </h1>
          <div className="text-white w-full md:w-1/2 text-xl md:text-2xl text-justify">
            <p className="mb-6">
              Yada Youth Indonesia is a non-profit organization that focuses on
              children and youth empowerment through collective efforts to
              minimize factors that cause poverty.
            </p>
            <p>
              Yada Youth Indonesia aims to provide equal opportunities for
              children all around Indonesia.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row text-white gap-6 p-12 lg:px-0 max-w-4xl mx-auto">
        <div
          className="border-4 border-yellow w-full md:w-1/2 rounded-lg px-12 py-16 bg-cover "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 76, 46, 0.5), rgba(255, 76, 46, 0.8)),url('./pictures/vision.jpg')",
          }}
        >
          <h2 className="text-4xl text-center mb-8">Our Vision</h2>
          <p className="font-light text-xl text-justify">
            Building a society fit for the future of humanity, where kids,
            adolescents, and youths are well-fed, well educated, healthy, equal,
            protected, and cared for
          </p>
        </div>
        <div
          className="bg-blue border-4 border-orange w-full md:w-1/2 rounded-lg bg-opacity-80 px-12 py-16 bg-cover"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34, 42, 239, 0.5), rgba(34, 42, 239, 0.8)),url('./pictures/mision.jpg')",
          }}
        >
          <h2 className="text-4xl text-center mb-8">Our Mission</h2>
          <p className="font-light text-xl text-justify">
            Continually raise the standard of living for children, adolescents,
            and youths to help them live happier, empower them to achieve more,
            and contribute more to society
          </p>
        </div>
      </div>
      <div
        className="bg-cover bg-no-repeat p-12"
        style={{ backgroundImage: "url('./backgrounds/gradient_5.jpg')" }}
      >
        <Title
          text="Behind Yada Youth"
          color="blue"
          borderColor="blue"
          bgColor="white"
        />
        <div className="md:mt-10 bottom-10 md:bottom-0 flex flex-col md:flex-row relative items-center justify-center mx-auto max-w-7xl mb-12">
          <div className="w-1/2 md:w-3/12 relative top-16 md:top-0 left-0 md:left-24">
            <img
              src="./pictures/hanif.png"
              alt="hanif"
              className="rounded-full border-4 border-blue ml-auto"
            />
          </div>
          <div className="w-full md:w-9/12 border-4 border-blue rounded-2xl bg-white pl-8 md:pl-28 pr-8 md:pr-12 py-12 mr-0 md:mr-16">
            <h3 className="text-orange text-3xl mb-4 font-semibold">Hanif</h3>
            <p>
              Hanif is the founder and director of Yada Youth Indonesia. Through
              his college life he was both having a strong background in
              academics and frequently engaged in extracurricular activities.
              Which made him awarded the title Third Most Outstanding Student in
              his university, Sepuluh Nopember Institute of Technology (ITS).
              Furthermore, he was also heavily passionate in entrepreneurship,
              which led him to co-found PT. Global Millennial Group. Hanif has a
              longstanding commitment to solving poverty, seeing that most of
              his scientific papers and innovation are focused on solving
              financial, economic, and societal issues in rural areas. Now,
              driven by his childhood dream, he is determined to empower
              impoverished children around Indonesia through Yada Youth
              Indonesia.
            </p>
          </div>
        </div>
        <div className="bottom-20 md:bottom-0 flex flex-col md:flex-row relative items-center justify-center mx-auto max-w-7xl">
          <div className="w-1/2 md:w-3/12 relative top-16 md:top-0 left-0 md:left-24">
            <img
              src="./pictures/stephani.png"
              alt="stephani"
              className="rounded-full border-4 border-blue ml-auto"
            />
          </div>
          <div className="w-full md:w-9/12 border-4 border-blue rounded-2xl bg-white pl-8 md:pl-28 pr-8 md:pr-12 py-12 mr-0 md:mr-16">
            <h3 className="text-orange text-3xl mb-4 font-semibold">
              Stephani
            </h3>
            <p>
              Stephani is the vice director of Yada Youth Indonesia, who is
              currently a student in the University of Gadjah Mada. Throughout
              high school, she was known to be an active student with a good
              academic standing, graduating with a GPA of 3.8 out of 4.0. She is
              heavily infatuated with human connectivity in social
              organizations. Stephani’s endeavors in the advocacy for Children
              began in 2019 as she served as a fundraiser in UNICEF Indonesia
              for the campaign of providing sanitation and education for Papuan
              Children. She then continued to take the role of a development
              volunteer at Karunia Orphanage, an orphanage especially built for
              Papuan Orphans in Surabaya. Stephani fights for the belief that
              children regardless of background should be handed the same
              opportunities as those who are born into more privileged
              situations and is currently fighting for the cause through Yada
              Youth Indonesia.
            </p>
          </div>
        </div>
      </div>
      <div className="p-12 max-w-7xl mx-auto font-semibold">
        <h2 className="text-3xl text-blue text-center">
          Take a Peak at What we Are Doing
        </h2>
        {posts.map((post, idx) => (
          <Accordion
            key={idx}
            title={post.title}
            content={
              <div className="text-center py-6">
                <h3 className="text-blue text-3xl font-semibold">
                  {post.title}
                </h3>
                <h4 className="text-white text-xl font-normal mb-4">
                  {moment(post.date).format("MMMM Do YYYY")}
                </h4>
                <p className="font-book mb-4">{post.text}</p>
                <div className="mx-auto max-w-md">
                  <img src={post.image} alt={post.title} />
                </div>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default About;
