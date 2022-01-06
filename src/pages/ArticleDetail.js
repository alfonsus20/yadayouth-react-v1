import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import ArticleMiniCard from "../components/Article/ArticleMiniCard";
import { animateScroll as scroll } from "react-scroll";
import Button from "../components/Button";
import moment from "moment";
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";
import { countWords } from "../utils/functions";
import { getArticleDetail, getArticleList } from "../model";

const ArticleDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const [article, setArticle] = useState({});
  const [articleLoading, setArticleLoading] = useState(false);
  const [otherArticlesloading, setOtherArticlesLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const override = css`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `;

  const shareArticle = async () => {
    if (navigator.share) {
      try {
        let response = await fetch(article.articleImage);
        let blob = await response.blob();
        let file = new File([blob], "image.jpg", { type: blob.type });
        await navigator.share({
          title: "Yada Youth Article",
          text: window.document.title,
          url: window.document.location,
          files: [file],
        });
        console.log("Thank you for sharing !");
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    scroll.scrollToTop({ duration: 0 });

    const fetchArticle = async () => {
      try {
        setArticleLoading(true);
        const { data } = await getArticleDetail(id);
        setArticle(data);
        setArticleLoading(false);
        document.title = data.title;
      } catch (e) {
        history.push("/not-found");
      }
    };

    const fetchArticles = async () => {
      try {
        setOtherArticlesLoading(true);
        const { data } = await getArticleList();
        setArticles(data.results);
        setOtherArticlesLoading(false);
      } catch (e) {
        setOtherArticlesLoading(false);
      }
    };

    fetchArticle();
    fetchArticles();
  }, [id, history]);

  const readingTime = Math.round(countWords(article.content || "") / 275);

  return (
    <div className="max-w-8xl mx-auto p-12">
      {!articleLoading ? (
        <>
          <Button scrollUp />
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
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-row flex-wrap">
                  <span className="font-book p-2 bg-gray rounded-md m-2">
                    {article.topic}
                  </span>
                </div>
                <div className="text-white mt-4 sm:mt-0 w-full sm:w-4/12 md:w-2/12 grid place-items-center">
                  <div
                    className="rounded-full py-2 px-4 mb-auto mt-2 cursor-pointer"
                    style={{
                      backgroundColor: "#FDAE5A",
                      fontSize: "clamp(12px,2vw,1rem)",
                    }}
                    onClick={shareArticle}
                  >
                    <i className="fas fa-link"></i>&nbsp; Share This Article
                  </div>
                </div>
              </div>
            </>
          </>
        </>
      ) : (
        <div className="min-h-screen md:h-80 grid place-items-center">
          <div className="w-full">
            <div className="text-2xl text-orange text-center mb-2">
              Loading...
            </div>
            <div className="w-full h-24 relative">
              <PuffLoader
                loading={articleLoading}
                color="#FF4C2E"
                css={override}
              />
            </div>
          </div>
        </div>
      )}
      <div>
        <h3 className="text-blue text-center text-xl mt-8 mb-6">
          More From YadaYouth Article
        </h3>
        {!otherArticlesloading ? (
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
        ) : (
          <div className="w-full">
            <div className="w-full h-24 relative">
              <PuffLoader
                loading={articleLoading}
                color="#FF4C2E"
                css={override}
              />
            </div>
          </div>
        )}
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
    </div>
  );
};

export default ArticleDetail;
