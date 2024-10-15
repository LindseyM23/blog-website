import React from 'react';
import { useParams, Link } from 'react-router-dom';
import BlogData from '../components/BlogData';

const Category = () => {
  const { category } = useParams(); // Get the category from the URL parameters
  const blogData = BlogData(); // Fetch the blog data

  // Check if the category exists in the blogData
  const blogs = blogData[category] || [];
  

  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      {blogs.length > 0 ? (
        blogs.map(blog => (
          <div key={blog.id} className="blog-post">
            <h3>{blog.heading}</h3>
            <p><strong>By:</strong> {blog.author} | <strong>Date:</strong> {blog.date}</p>
            <p><strong>Category:</strong> {blog.category}</p>
            <p>{blog.shortDescription}</p>
            <Link to={`/${category}/${blog.id}`}>Read More</Link>
          </div>
        ))
      ) : (
        <p>No blogs found in this category.</p>
      )}
    </div>
  );
};

export default Category;
