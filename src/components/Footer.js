import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <ul>
      <li className="link-info">
        <a
          href="https://github.com/7steph7gmailcom"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </li>
      <li className="link-info">
        <a
          href="https://www.linkedin.com/in/stephanie.johansson-934096213"
          target="no_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  );
}

export default Footer;