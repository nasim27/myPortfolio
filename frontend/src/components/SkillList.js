import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";

function SkillList() {
  const [skills, setSkills] = useState([]);

  const fetchSkills = () => {
    api.get("skills/")
      .then((res) => setSkills(res.data))
      .catch((err) => console.error("Error fetching skills:", err));
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const deleteSkill = (id) => {
    api.delete(`skills/${id}/`)
      .then(() => fetchSkills())
      .catch((err) => console.error("Error deleting skill:", err));
  };

  return (
    <div>
      <h2>Skills</h2>
      <Link to="/skills/new">+ Add Skill</Link>
      <ul>
        {skills.map((s) => (
          <li key={s.id}>
            {s.name} — {s.level}
            <br />
            <Link to={`/skills/edit/${s.id}`}>Edit</Link>{" "}
            <button onClick={() => deleteSkill(s.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillList;
