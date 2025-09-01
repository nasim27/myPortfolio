import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

function BlogForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", content: "" });

  useEffect(() => {
    if (id) {
      api.get(`blog/${id}/`)
        .then((res) => setForm(res.data))
        .catch((err) => console.error("Error loading blog:", err));
    }
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = id
      ? api.put(`blog/${id}/`, form)
      : api.post("blog/", form);

    request
      .then(() => navigate("/blog"))
      .catch((err) => console.error("Error saving blog:", err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit Blog" : "Add Blog"}</h2>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
      <textarea name="content" value={form.content} onChange={handleChange} placeholder="Content" />
      <button type="submit">Save</button>
    </form>
  );
}

export default BlogForm;
