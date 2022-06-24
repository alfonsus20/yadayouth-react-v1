import { Link } from "react-router-dom";
import TextSkeleton from "../Skeleton/TextSkeleton";

const ArticleAside = ({ articles, categories, loading }) => {
  return (
    <div className="w-full md:w-4/12">
      <div
        className="px-6 py-8 rounded-lg"
        style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        <div>
          <h3 className="text-2xl text-blue font-bold">Last Articles</h3>
          <dl>
            {!loading ? (
              articles.map((article, idx) => (
                <dd key={idx} className="my-4 font-book text-base">
                  <Link to={`/articles/${article.id}`}>{article.title}</Link>
                </dd>
              ))
            ) : (
              <TextSkeleton amount={3} />
            )}
          </dl>
        </div>
        <div className="bg-blue w-full my-8" style={{ height: 0.5 }}></div>
        <div>
          <h3 className="text-2xl text-blue font-bold">Categories</h3>
          <dl>
            {!loading ? (
              categories.map((category, idx) => (
                <dd key={idx} className="my-4 font-book text-base">
                  <Link to={`articles?topic=${category.topic}`}>
                    {category.topic}
                  </Link>
                </dd>
              ))
            ) : (
              <TextSkeleton amount={4} />
            )}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ArticleAside;
