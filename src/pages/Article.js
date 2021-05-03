import React, { useEffect, useState } from "react";
import ArticleAside from "../components/Article/ArticleAside";
import ArticleCard from "../components/Article/ArticleCard";
import Pagination from "../components/Article/Pagination";
import Button from "../components/Button";
import Container from "../components/Container";
import classes from "./Article.module.css";
import { animateScroll as scroll } from "react-scroll";
import yadayouth from "../api/yadayouth";
import moment from 'moment';

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const { data } = await yadayouth.get("/api/article/");
      setLoading(false);
      setArticles(data);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Articles";
    scroll.scrollToTop({ duration: 0 });

    fetchArticles();
  }, []);

  return (
    <div>
      <Button scrollUp />
      <div
        className={`flex flex-col md:flex-row ${classes.hero}`}
        style={{ backgroundImage: "url(/backgrounds/gradient_4.jpg)" }}
      >
        <div className=" w-full md:w-1/2">
          <img
            src="/pictures/article.png"
            alt="webinar"
            className="mx-auto w-full md:w-8/12"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-7xl text-white font-bold">Article</h1>
          <h2 className="text-4xl my-2 text-blue font-bold">Yada Youth</h2>
        </div>
      </div>
      <Container
        additional="flex flex-col md:flex-row md:space-x-8 mx-auto"
        maxWidth={1800}
      >
        <div className="w-full md:w-8/12">
          {!loading
            ? articles.map((article) => {
                return (
                  <ArticleCard
                    key={article.id}
                    title={article.title}
                    description=""
                    publishTime={moment(article.timePublised).format('dddd, MMMM Do YYYY')}
                    image = {article.articleImage}
                    id = {article.id}
                  />
                );
              })
            : "Loading..."}
          <Pagination />
        </div>
        <ArticleAside />
      </Container>
    </div>
  );
};

export default Article;
