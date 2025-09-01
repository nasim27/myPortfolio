import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

function SkillForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", level: "" });

  useEffect(() => {
    if (id) {
      api.get(`skills/${id}/`)
        .then((res) => setForm(res.data))
        .catch((err) => console.error("Error loading skill:", err));
    }
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = id ? api.put(`skills/${id}/`, form) : api.post("skills/", form);
    request.then(() => navigate("/skills"))
      .catch((err) => console.error("Error saving skill:", err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit Skill" : "Add Skill"}</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Skill Name" />
      <input name="level" value={form.level} onChange={handleChange} placeholder="Level (Beginner / Intermediate / Expert)" />
      <button type="submit">Save</button>
    </form>
  );
}

export default SkillForm;
