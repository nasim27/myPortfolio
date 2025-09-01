import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

function WorkForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    role: "",
    company: "",
    description: "",
    start_date: "",
    end_date: "",
  });

  useEffect(() => {
    if (id) {
      api.get(`work/${id}/`)
        .then((res) => setForm(res.data))
        .catch((err) => console.error("Error loading work:", err));
    }
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = id ? api.put(`work/${id}/`, form) : api.post("work/", form);
    request.then(() => navigate("/work"))
      .catch((err) => console.error("Error saving work:", err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit Work" : "Add Work"}</h2>
      <input name="role" value={form.role} onChange={handleChange} placeholder="Role" />
      <input name="company" value={form.company} onChange={handleChange} placeholder="Company" />
      <input name="start_date" value={form.start_date} onChange={handleChange} placeholder="Start Date (YYYY-MM-DD)" />
      <input name="end_date" value={form.end_date} onChange={handleChange} placeholder="End Date (YYYY-MM-DD)" />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <button type="submit">Save</button>
    </form>
  );
}

export default WorkForm;
