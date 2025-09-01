import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

function ProjectList() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = () => {
    api.get("projects/")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  };

  const deleteProject = (id) => {
    api.delete(`projects/${id}/`)
      .then(() => fetchProjects())
      .catch((err) => console.error("Error deleting project:", err));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      <Link to="/projects/new">+ Add New Project</Link>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong>: {p.description}
            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer">
                {" "}Visit
              </a>
            )}
            {" | "}
            <Link to={`/projects/edit/${p.id}`}>Edit</Link>
            {" | "}
            <button onClick={() => deleteProject(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
