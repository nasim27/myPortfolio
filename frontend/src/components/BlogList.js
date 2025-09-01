import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = () => {
    api.get("blog/")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Error fetching blogs:", err));
  };

  const deleteBlog = (id) => {
    api.delete(`blog/${id}/`)
      .then(() => fetchBlogs())
      .catch((err) => console.error("Error deleting blog:", err));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <h2>Blog</h2>
      <Link to="/blog/new">+ Add New Blog</Link>
      <ul>
        {blogs.map((b) => (
          <li key={b.id}>
            <strong>{b.title}</strong><br />
            {b.content}
            <br />
            <Link to={`/blog/edit/${b.id}`}>Edit</Link>{" "}
            <button onClick={() => deleteBlog(b.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
