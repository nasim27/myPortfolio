

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";

import EducationList from "./components/EducationList";
import EducationForm from "./components/EducationForm";
import AwardList from "./components/AwardList";
import AwardForm from "./components/AwardForm";
import WorkList from "./components/WorkList";
import WorkForm from "./components/WorkForm";
import SkillList from "./components/SkillList";
import SkillForm from "./components/SkillForm";


/*
function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Curriculum Vitae</h1>
        <nav>
          <Link to="/projects" style={{ marginRight: "10px" }}>Projects</Link>
          <Link to="/blog">Blog</Link>
        </nav>

        <Routes>
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/new" element={<ProjectForm />} />
          <Route path="/projects/edit/:id" element={<ProjectForm />} />
          
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/new" element={<BlogForm />} />
          <Route path="/blog/edit/:id" element={<BlogForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
*/

function Header() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px" }}>
      {/* Left side info */}
      <div>
        <h1 style={{ color: "green", cursor: "pointer" }}>
          <Link to="/" style={{ textDecoration: "none", color: "green" }}>
            Curriculum Vitae
          </Link>
        </h1>
        <h2>SHAIKH NASIM ALI</h2>
        <p>Masters in Software Engineering, PhD Dropout</p>
        <p>
          <strong>Phone:</strong> +91 9734712613 <br />
          <strong>Email:</strong> <a href="mailto:nas27.2010@gmail.com">nas27.2010@gmail.com</a> <br />
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://linkedin.com/in/shaikhnasimali"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/shaikhnasimali
          </a>
        </p>
      </div>

      {/* Right side photo */}
      <div>
        <img
          src="/profile.jpg"   // 👉 place your photo in public/profile.jpg
          alt="Profile"
          style={{ width: "200px", height: "200px" , borderRadius: "50%"}}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        {/* Header always at the top */}
        <Header />

        {/* Navigation */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/projects" style={{ marginRight: "10px" }}>Projects</Link>
          <Link to="/blog">Blog</Link>
        </nav>

        {/* Page content BELOW header */}
        <Routes>
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/new" element={<ProjectForm />} />
          <Route path="/projects/edit/:id" element={<ProjectForm />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/new" element={<BlogForm />} />
          <Route path="/blog/edit/:id" element={<BlogForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;