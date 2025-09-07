import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom"; // ✅ added Navigate

import Login from "./components/Login";

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

// Reusable wrapper for private routes
function PrivateRoute({ element: Component, token }) {
  return token ? Component : <Navigate to="/login" />;
}

function Header({ token, setToken }) {   // ✅ accept token + setToken as props
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
          <strong>Email:</strong>{" "}
          <a href="mailto:nas27.2010@gmail.com">nas27.2010@gmail.com</a> <br />
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
          src={process.env.PUBLIC_URL + "/profile.jpg"} // 👉 place your photo in public/profile.jpg
          alt="Profile"
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
        />
      </div>
    </div>
  );
}

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        {/* Header always at the top */}
        <Header token={token} setToken={setToken} />   {/* ✅ pass props */}

        {/* Navigation */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/projects" style={{ marginRight: "10px" }}>Projects</Link>
          <Link to="/blog" style={{ marginRight: "10px" }}>Blog</Link>
          <Link to="/education" style={{ marginRight: "10px" }}>Education</Link>
          <Link to="/awards" style={{ marginRight: "10px" }}>Awards</Link>
          <Link to="/work" style={{ marginRight: "10px" }}>Work</Link>
          <Link to="/skills" style={{ marginRight: "10px" }}>Skills</Link>

          {token ? (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                setToken(null);
              }}
              style={{ marginLeft: "20px" }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>

        {/* Page content BELOW header */}
        <Routes>
          {/* Login */}
          <Route path="/login" element={<Login setToken={setToken} />} />

          {/* Projects */}
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/new" element={<PrivateRoute token={token} element={<ProjectForm />} />} />
          <Route path="/projects/edit/:id" element={<PrivateRoute token={token} element={<ProjectForm />} />} />

          {/* Blog */}
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/new" element={<PrivateRoute token={token} element={<BlogForm />} />} />
          <Route path="/blog/edit/:id" element={<PrivateRoute token={token} element={<BlogForm />} />} />

          {/* Education */}
          <Route path="/education" element={<EducationList />} />
          <Route path="/education/new" element={<PrivateRoute token={token} element={<EducationForm />} />} />
          <Route path="/education/edit/:id" element={<PrivateRoute token={token} element={<EducationForm />} />} />

          {/* Awards */}
          <Route path="/awards" element={<AwardList />} />
          <Route path="/awards/new" element={<PrivateRoute token={token} element={<AwardForm />} />} />
          <Route path="/awards/edit/:id" element={<PrivateRoute token={token} element={<AwardForm />} />} />

          {/* Work Experience */}
          <Route path="/work" element={<WorkList />} />
          <Route path="/work/new" element={<PrivateRoute token={token} element={<WorkForm />} />} />
          <Route path="/work/edit/:id" element={<PrivateRoute token={token} element={<WorkForm />} />} />

          {/* Skills */}
          <Route path="/skills" element={<SkillList />} />
          <Route path="/skills/new" element={<PrivateRoute token={token} element={<SkillForm />} />} />
          <Route path="/skills/edit/:id" element={<PrivateRoute token={token} element={<SkillForm />} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
