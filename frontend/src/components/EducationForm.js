import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

function EducationForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ degree: "", institution: "", description: "", date: "" });

  useEffect(() => {
    if (id) {
      api.get(`education/${id}/`)
        .then((res) => setForm(res.data))
        .catch((err) => console.error("Error loading education:", err));
    }
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = id ? api.put(`education/${id}/`, form) : api.post("education/", form);
    request.then(() => navigate("/education"))
      .catch((err) => console.error("Error saving education:", err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit Education" : "Add Education"}</h2>
      <input name="degree" value={form.degree} onChange={handleChange} placeholder="Degree" />
      <input name="institution" value={form.institution} onChange={handleChange} placeholder="Institution" />
      <input name="date" value={form.date} onChange={handleChange} placeholder="Date" />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <button type="submit">Save</button>
    </form>
  );
}

export default EducationForm;
