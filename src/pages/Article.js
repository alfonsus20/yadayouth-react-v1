import React, { useEffect, useState } from "react";
import ArticleAside from "../components/Article/ArticleAside";
import ArticleCard from "../components/Article/ArticleCard";
import Pagination from "../components/Article/Pagination";
import Button from "../components/Button";
import yadayouth from "../api/yadayouth";
import moment from "moment";
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";
import { Helmet } from "react-helmet";

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);
  const [categories, setCategories] = useState([]);

  const override = css`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const { data } = await yadayouth.get("/api/article/");
        const { data: categoryData } = await yadayouth.get("/api/topic/");
        setLoading(false);
        setArticles(data.results);
        setCategories(categoryData.results);
        setPrev(data.prev);
        setNext(data.next);
      } catch (e) {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Articles</title>
      </Helmet>
      <Button scrollUp />
      <div
        className={`flex flex-col md:flex-row bg-cover bg-no-repeat p-12`}
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
      <div className="flex flex-col md:flex-row md:space-x-8 mx-auto max-w-7xl p-12">
        <div className="w-full md:w-8/12">
          {!loading ? (
            articles.map((article) => {
              return (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  description={article.content}
                  publishTime={moment(article.timePublised).format(
                    "dddd, MMMM Do YYYY"
                  )}
                  image={article.articleImage}
                  id={article.id}
                />
              );
            })
          ) : (
            <div className="grid place-items-center h-60">
              <div className="w-full">
                <div className="text-2xl text-orange text-center mb-2">
                  Loading...
                </div>
                <div className="w-full h-24 relative">
                  <PuffLoader
                    loading={loading}
                    color="#FF4C2E"
                    css={override}
                  />
                </div>
              </div>
            </div>
          )}
          <Pagination prev={prev} next={next} />
        </div>
        <ArticleAside
          articles={articles}
          categories={categories}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Article;
