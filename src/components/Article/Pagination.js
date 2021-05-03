import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div className='flex justify-end' style={{paddingBottom : '6%'}}>
      <Link to="/articles" className='mx-2'>
        <div className="bg-orange text-white text-md px-4 py-2 rounded-full shadow-lg">
          <i className="fas fa-chevron-left"></i>
          <i className="fas fa-chevron-left"></i>
        </div>
      </Link>
      <Link to="/articles" className='mx-2'>
        <div className="bg-orange text-white text-md px-4 py-2 rounded-md shadow-lg">
          1
        </div>
      </Link>
      <Link to="/articles" className='mx-2'>
        <div className="bg-orange text-white text-md px-4 py-2 rounded-md shadow-lg">
          2
        </div>
      </Link>
      <Link to="/articles" className='mx-2'>
        <div className="bg-orange text-white text-md px-4 py-2 rounded-md shadow-lg">
          3
        </div>
      </Link>
      <Link to="/articles" className='mx-2'>
        <div className="bg-orange text-white text-md px-4 py-2 rounded-full shadow-lg">
          <i className="fas fa-chevron-right"></i>
          <i className="fas fa-chevron-right"></i>
        </div>
      </Link>
    </div>
  );
};

export default Pagination;
