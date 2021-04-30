import React, {useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../Container";
import ArticleMiniCard from "./ArticleMiniCard";
import "./ArticleDetail.css";
import {animateScroll as scroll} from 'react-scroll'
import Button from "../Button";

const ArticleDetail = () => {
  const { id } = useParams();

  useEffect(()=>{
    scroll.scrollToTop({ duration: 0 });
  },[])

  return (
    <Container maxWidth = {1800} additional='mx-auto'>
      <Button scrollUp/>
      <h1 className="text-5xl text-blue font-book text-center">
        Child Empowerment In Playing Phase
      </h1>
      <p className="text-center my-4 font-light">April 22, 4 min read</p>
      <div className="font-book text-lg">
        <p className="my-4">
          Have you ever wondered how important it is the playing phase for
          children? Contrary to popular belief, playing holds more than just
          entertainment objectives. It contributes to the intellectual growth
          and construction in children that are crucial in their
          self-development and maturity.
        </p>
        <p className="my-4">
          These factors play a vital role in determining their future
          livelihood. Through the correct tool, environment, and supervision,
          playtime can be a valuable learning experience. Thus, we encourage
          Yada friends to support and realize how important this process is in a
          child’s playing stages.
        </p>
        <h2 className="font-medium text-2xl">
          So, What does playing mean in this context?
        </h2>
        <p className="my-4 ">
          Playing is investigating new ways of doing things, and developing
          imaginative competence and problem-solving skills (Sutton Smith,
          1997). It is seen as a creative process to the onlooker, yet makes
          absolute sense and has grounded reasoning to the children involved
          (Moyles, 2005)
        </p>
      </div>
      <h2 className="font-medium text-2xl">
        How does children's playtime plays a part in empowering them?
      </h2>
      <ul className="font-book list-decimal pl-4 text-lg">
        <li className="my-4">
          It provides a foundation for enabling self-understanding through doing
          and testing social and emotional relationships and is a catalyst for
          self choice when it is child-initiated and child-led (Hughes, 2001)
        </li>
        <li className="my-4">
          A child from an early age in a play situation can develop a sense of
          what they like and dislike, who they want to share their play space
          with who they don't. Making simple decisions without immediate
          consequences empowers children to develop a sense of who they are
          (Bauman & May, 2001).
        </li>
        <li className="my-4">
          To a child, the they are involved in a construction of knowledge,
          ideas meanings (Mayall, 2001).
        </li>
        <li className="my-4">
          Erikson (1963) observed that play has an ego-building function, aiding
          the development of self-esteem. The child is able to demonstrate their
          personality within paradigm of play and the boundaries they have set.
          This provide an environment in which the child can explore
          understanding of themselves and therefore subconsciously support their
          emotional development.
        </li>
        <li className="my-4">
          Holme and Massie (1970) agree that play and socialization with peers
          are independent in supporting an aware of self their emotions. There
          responses support the construction of children's development self. In
          play children are able to develop skills of self understanding and
          discovery.
        </li>
        <li className="my-4">
          When Children are engaged in playful situations they are able to
          maintain a sense of flexibility and freedom which can capture a
          child's concentration and state of mind and enable a sense of being at
          one with the environtment (Csikszentmihalyu, 1979).
        </li>
      </ul>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-row flex-wrap w-full sm:w-8/12 md:w-10/12">
          <span className="font-book p-2 bg-gray rounded-md m-2">
            Yada Youth
          </span>
          <span className="font-book p-2 bg-gray rounded-md m-2">
            EmpoweringChildrenofTomorrow{" "}
          </span>
          <span className="font-book p-2 bg-gray rounded-md m-2">
            EqualChildren
          </span>
          <span className="font-book p-2 bg-gray rounded-md m-2">
            EqualChildren
          </span>
          <span className="font-book p-2 bg-gray rounded-md m-2">
            EqualChildren
          </span>
          <span className="font-book p-2 bg-gray rounded-md m-2">
            EqualChildren
          </span>
          <span className="font-book p-2 bg-gray rounded-md m-2">
            EqualChildren
          </span>
          <span className="font-book p-2 bg-gray rounded-md m-2">
            EqualChildren
          </span>
          <span className="font-book p-2 bg-gray rounded-md m-2">
            EqualChildren
          </span>
        </div>
        <div className="text-white ml-auto mt-4 sm:mt-0 w-full sm:w-4/12 md:w-2/12 grid place-items-center">
          <div
            className="rounded-full py-2 px-4 mb-auto mt-2 icon"
            style={{ backgroundColor: "#FDAE5A" }}
          >
            <i className="fas fa-link"></i>&nbsp; Share This Article
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-blue text-center text-xl my-8">
          More From YadaYouth Article
        </h3>
        <div className="flex flex-row flex-wrap ">
          <ArticleMiniCard />
          <ArticleMiniCard />
          <ArticleMiniCard />
        </div>
      </div>
      <div className="flex justify-between sm:px-12 my-4"  style={{fontSize : 'clamp(12px,2vw,1rem)'}}>
        <Link to="/articles">
          <div className='bg-orange text-white text-md px-4 py-2 rounded-lg shadow-lg'>
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-left"></i>
            &nbsp; Previous Article
          </div>
        </Link>
        <Link to="/articles">
          <div className='bg-orange text-white text-md px-4 py-2 rounded-lg shadow-lg'>
            Next Article &nbsp;
            <i className="fas fa-chevron-right"></i>
            <i className="fas fa-chevron-right"></i>
          </div>
        </Link>
 
      </div>
    </Container>
  );
};

export default ArticleDetail;
