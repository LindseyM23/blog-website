// components/Home.js
import React from 'react';
import BlogData from '../components/BlogData';
import { Link } from 'react-router-dom';

const Home = () => {
  const blogData = BlogData();
  return (
    <div>
      {Object.keys(blogData).map(category => (
        <div key={category}>
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          {blogData[category].map(blog => (
            <div key={blog.id} className="blog-post">
              <h3>{blog.heading}</h3>
              <p><strong>By:</strong> {blog.author} | <strong>Date:</strong> {blog.date}</p>
              <p><strong>Category:</strong> {blog.category}</p>
              <p>{blog.shortDescription}</p>
              <Link to={`/${category}/${blog.id}`}>Read More</Link>
            </div>
          ))}
        </div>
      ))}
    </div>

  );
};

export default Home;
