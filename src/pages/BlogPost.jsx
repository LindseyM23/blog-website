// BlogPost.js
import React from "react";
import { useParams } from "react-router-dom";
import BlogData from "../components/BlogData"; // Adjust the path as needed

const BlogPost = () => {
  const { id, category } = useParams(); // Get the blog ID and category from the URL
  const blogData = BlogData();

  // Find the specific blog post by category and ID
  const blog = blogData[category].find(blog => blog.id.toString() === id);

  if (!blog) {
    return <h2>Blog post not found</h2>;
  }

  return (
    <div>
      <h1>{blog.heading}</h1>
      <p><strong>By:</strong> {blog.author} | <strong>Date:</strong> {blog.date}</p>
      <p><strong>Category:</strong> {blog.category}</p>
      <p>{blog.content}</p>
      <h3>Comments</h3>
      {blog.comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        blog.comments.map((comment, index) => <p key={index}>{comment}</p>)
      )}
    </div>
  );
};

export default BlogPost;
