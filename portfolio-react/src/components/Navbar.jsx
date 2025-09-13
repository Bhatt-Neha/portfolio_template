import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { config } from "../config";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (targetId) => {
    if (location.pathname !== "/") {
      // Navigate to home first
      navigate("/");
      // Wait a bit to let home render, then scroll
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Already on home, just scroll
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav className="navbar">
      <a href="/" className="logo">{config.name}._</a>
      <div className="nav-links">
        {config.navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              handleScroll(item.id);
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
