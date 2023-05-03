import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" alt="blog" className="img-fluid" />
        </div>
        <div className="blog-content">
          <p className="date">3 May, 2023</p>
          <h5 className="title">A beautiful Wednesday Morning Renaissance</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam.
          </p>
          <Link className="button" to="">
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
