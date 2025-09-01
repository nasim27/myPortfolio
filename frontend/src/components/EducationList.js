import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";

function EducationList() {
  const [education, setEducation] = useState([]);

  const fetchEducation = () => {
    api.get("education/")
      .then((res) => setEducation(res.data))
      .catch((err) => console.error("Error fetching education:", err));
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  const deleteEdu = (id) => {
    api.delete(`education/${id}/`)
      .then(() => fetchEducation())
      .catch((err) => console.error("Error deleting education:", err));
  };

  return (
    <div>
      <h2>Education</h2>
      <Link to="/education/new">+ Add Education</Link>
      <ul>
        {education.map((e) => (
          <li key={e.id}>
            <strong>{e.degree}</strong> - {e.institution} ({e.date})<br />
            {e.description}
            <br />
            <Link to={`/education/edit/${e.id}`}>Edit</Link>{" "}
            <button onClick={() => deleteEdu(e.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EducationList;
