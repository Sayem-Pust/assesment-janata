import React from "react";

export default function Header() {
  return (
    <header className="header">
      <h1 style={{ textAlign: "center" }}>Data Analysis</h1>
      <nav>
        <ul>
          <div>
            <li style={{ listStyleType: "none" }}>
              <a href="/">Home</a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
