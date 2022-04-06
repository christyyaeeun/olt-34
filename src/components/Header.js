import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="link">
        Timeline
      </Link>
      <Link to="/userposts" className="link">
        Posts
      </Link>
      <Link to="/Profile" className="link">Profile</Link>
    </div>
  );
}