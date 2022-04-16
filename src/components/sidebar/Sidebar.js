import React from "react";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth.action";

import "./sidebar.scss";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="sidebar">
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="/" className="d-flex align-items-center nav-link text-white">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "24px",
                height: "24px",
                flexShrink: 0,
              }}
            >
              <g>
                <path d="M4,10V21h6V15h4v6h6V10L12,3Z"></path>
              </g>
            </svg>
            <span>Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="d-flex align-items-center nav-link text-white">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "24px",
                height: "24px",
                flexShrink: 0,
              }}
            >
              <g>
                <path d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"></path>
              </g>
            </svg>
            <span>Explore</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="d-flex align-items-center nav-link text-white">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "24px",
                height: "24px",
                flexShrink: 0,
              }}
            >
              <g height="24" viewBox="0 0 24 24" width="24">
                <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
              </g>
            </svg>
            <span>Shorts</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="d-flex align-items-center nav-link text-white">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "24px",
                height: "24px",
                flexShrink: 0,
              }}
            >
              <g>
                <path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"></path>
              </g>
            </svg>
            <span>Subscriptions</span>
          </a>
        </li>
        <hr />
        <li className="nav-item">
          <a href="/" className="d-flex align-items-center nav-link text-white">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "24px",
                height: "24px",
                flexShrink: 0,
              }}
            >
              <g>
                <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
              </g>
            </svg>
            <span>Library</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="d-flex align-items-center nav-link text-white">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "24px",
                height: "24px",
                flexShrink: 0,
              }}
            >
              <g>
                <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"></path>
              </g>
            </svg>
            <span>History</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="d-flex align-items-center nav-link text-white">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "24px",
                height: "24px",
                flexShrink: 0,
              }}
            >
              <g>
                <path d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z"></path>
              </g>
            </svg>
            <span>Your Videos</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="d-flex align-items-center nav-link text-white">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "24px",
                height: "24px",
                flexShrink: 0,
              }}
            >
              <g>
                <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"></path>
              </g>
            </svg>
            <span>Watch Later</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="d-flex align-items-center nav-link text-white">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "24px",
                height: "24px",
                flexShrink: 0,
              }}
            >
              <g>
                <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
              </g>
            </svg>
            <span>Liked Videos</span>
          </a>
        </li>
        <hr />
        <li className="nav-item" onClick={handleLogout}>
          <a href="/" className="d-flex align-items-center nav-link text-white">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "24px",
                height: "24px",
                flexShrink: 0,
              }}
            >
              <g>
                <path d="M20,3v18H8v-1h11V4H8V3H20z M11.1,15.1l0.7,0.7l4.4-4.4l-4.4-4.4l-0.7,0.7l3.1,3.1H3v1h11.3L11.1,15.1z"></path>
              </g>
            </svg>
            <span>Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
