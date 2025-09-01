import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";

function WorkList() {
  const [work, setWork] = useState([]);

  const fetchWork = () => {
    api.get("work/")
      .then((res) => setWork(res.data))
      .catch((err) => console.error("Error fetching work:", err));
  };

  useEffect(() => {
    fetchWork();
  }, []);

  const deleteWork = (id) => {
    api.delete(`work/${id}/`)
      .then(() => fetchWork())
      .catch((err) => console.error("Error deleting work:", err));
  };

  return (
    <div>
      <h2>Work Experience</h2>
      <Link to="/work/new">+ Add Work</Link>
      <ul>
        {work.map((w) => (
          <li key={w.id}>
            <strong>{w.role}</strong> at {w.company} ({w.start_date} – {w.end_date || "Present"})
            <br />
            {w.description}
            <br />
            <Link to={`/work/edit/${w.id}`}>Edit</Link>{" "}
            <button onClick={() => deleteWork(w.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkList;
