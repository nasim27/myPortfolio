import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

function AwardForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", organization: "", year: "" });

  useEffect(() => {
    if (id) {
      api.get(`awards/${id}/`)
        .then((res) => setForm(res.data))
        .catch((err) => console.error("Error loading award:", err));
    }
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = id ? api.put(`awards/${id}/`, form) : api.post("awards/", form);
    request.then(() => navigate("/awards"))
      .catch((err) => console.error("Error saving award:", err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit Award" : "Add Award"}</h2>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
      <input name="organization" value={form.organization} onChange={handleChange} placeholder="Organization" />
      <input name="year" value={form.year} onChange={handleChange} placeholder="Year" />
      <button type="submit">Save</button>
    </form>
  );
}

export default AwardForm;
