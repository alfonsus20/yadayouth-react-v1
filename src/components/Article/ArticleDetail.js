import React, { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import Container from "../Container";
import ArticleMiniCard from "./ArticleMiniCard";
import "./ArticleDetail.css";
import { animateScroll as scroll } from "react-scroll";
import Button from "../Button";
import yadayouth from "../../api/yadayouth";
import moment from "moment";
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";
import { countWords } from "../../utils/functions";

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const override = css`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `;

  const shareArticle = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: window.document.title,
          text: article.content,
          url: window.document.location,
        });
        console.log("Thank you for sharing !")
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    scroll.scrollToTop({ duration: 0 });

    const fetchArticle = async () => {
      try {
        setLoading(true);
        const { data } = await yadayouth.get(`/api/article/${id}`);
        setArticle(data);
        document.title = data.title;
        console.log(data);
      } catch (e) {
        setLoading(false);
      }
    };

    const fetchArticles = async () => {
      try {
        const { data } = await yadayouth.get("/api/article/");
        setArticles(data.results);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };

    fetchArticle();

    fetchArticles();
  }, [id]);

  const readingTime = Math.round(countWords(article.content || "") / 275);
  // Object.keys(article).length !== 0 ?
  return (
    <Container maxWidth={1800} additional="mx-auto">
      <Button scrollUp />
      {!loading ? (
        <>
          <>
            <h1 className="text-5xl text-blue font-book text-center">
              {article.title}
            </h1>
            <p className="text-center my-4 font-light">
              {moment(article.timePublised).format("MMMM Do")}, {readingTime}{" "}
              min read
            </p>
            <img
              src={article.articleImage}
              className="w-full my-4"
              alt="article"
            />
            <div className="font-book text-lg my-8">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-row flex-wrap w-full sm:w-8/12 md:w-10/12">
                <span className="font-book p-2 bg-gray rounded-md m-2">
                  {article.topic}
                </span>
              </div>
              <div className="text-white ml-auto mt-4 sm:mt-0 w-full sm:w-4/12 md:w-2/12 grid place-items-center">
                <div
                  className="rounded-full py-2 px-4 mb-auto mt-2 icon cursor-pointer"
                  style={{ backgroundColor: "#FDAE5A" }}
                  onClick={shareArticle}
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
                {articles.slice(0, 3).map((recentArticle) => (
                  <ArticleMiniCard
                    key={recentArticle.id}
                    title={recentArticle.title}
                    time={moment(recentArticle.timePublised).format(
                      "dddd, MMMM Do YYYY"
                    )}
                    id={recentArticle.id}
                    image={recentArticle.articleImage}
                  />
                ))}
              </div>
            </div>
            <div
              className="flex justify-between sm:px-12 my-4"
              style={{ fontSize: "clamp(12px,2vw,1rem)" }}
            >
              <Link to="/articles">
                <div className="bg-orange text-white text-md px-4 py-2 rounded-lg shadow-lg">
                  <i className="fas fa-chevron-left"></i>
                  <i className="fas fa-chevron-left"></i>
                  &nbsp; Previous Article
                </div>
              </Link>
              <Link to="/articles">
                <div className="bg-orange text-white text-md px-4 py-2 rounded-lg shadow-lg">
                  Next Article &nbsp;
                  <i className="fas fa-chevron-right"></i>
                  <i className="fas fa-chevron-right"></i>
                </div>
              </Link>
            </div>
          </>
        </>
      ) : (
        <div className="grid place-items-center h-60">
          <div className="w-full">
            <div className="text-2xl text-orange text-center mb-2">
              Loading...
            </div>
            <div className="w-full h-24 relative">
              <PuffLoader loading={loading} color="#FF4C2E" css={override} />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default ArticleDetail;
