import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/home.css";
import "./assets/css/about.css";
import "./assets/css/skill.css";
import "./assets/css/blog.css";
import "./assets/css/navbar.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillPage from "./pages/SkillPage";
import BlogPage from "./pages/BlogPage";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/SkillPage" element={<SkillPage />} />
          <Route path="/BlogPage" element={<BlogPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
