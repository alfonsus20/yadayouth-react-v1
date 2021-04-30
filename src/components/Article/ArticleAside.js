import React from "react";

const ArticleAside = () => {
  return (
    <div className="w-full md:w-4/12">
      <div
        className="px-6 py-8 rounded-lg"
        style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        <div>
          <h3 className="text-3xl text-blue font-bold">Last Articles</h3>
          <dl>
            <dd className="my-4 font-book">
              Child Empowerment In Playing Phase
            </dd>
            <dd className="my-4 font-book">
              Entrepreneurial Youths: Why and How?
            </dd>
          </dl>
        </div>
        <div className="bg-blue w-full my-8" style={{ height: 0.5 }}></div>
        <div>
          <h3 className="text-3xl text-blue font-bold">Categories</h3>
          <dl>
            <dd className="my-4 font-book">
              Child Empowerment In Playing Phase
            </dd>
            <dd className="my-4 font-book">
              Entrepreneurial Youths: Why and How?
            </dd>
          </dl>
        </div>
        <div className="bg-blue w-full my-8" style={{ height: 0.5 }}></div>
        <div>
          <h3 className="text-3xl text-blue font-bold">Catalouges</h3>
          <dl>
            <dd className="my-4 font-book">
              Child Empowerment In Playing Phase
            </dd>
            <dd className="my-4 font-book">
              Entrepreneurial Youths: Why and How?
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ArticleAside;
