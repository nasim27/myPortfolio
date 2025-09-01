import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

function ProjectForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", description: "", link: "" });

  useEffect(() => {
    if (id) {
      api.get(`projects/${id}/`)
        .then((res) => setForm(res.data))
        .catch((err) => console.error("Error loading project:", err));
    }
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = id
      ? api.put(`projects/${id}/`, form)
      : api.post("projects/", form);

    request
      .then(() => navigate("/projects"))
      .catch((err) => console.error("Error saving project:", err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit Project" : "Add Project"}</h2>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <input name="link" value={form.link} onChange={handleChange} placeholder="Link" />
      <button type="submit">Save</button>
    </form>
  );
}

export default ProjectForm;
