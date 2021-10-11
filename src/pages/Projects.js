import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/project.css";
import PasswordGenImg from "../images/password-generator-screenshot.png";
import TeamGenImg from "../images/team-generator-screenshot.png";
import EmployeeDemo from "../images/Employee-Tracker-Demo.gif";
import ReadmeDemo from "../images/README-Generator-Demo.gif";



function Project() {
  return (
    <section>
      <h1 className="page-todo">Projects</h1>
      <li className="directions">
        Click an image to open the project repository.
      </li>
      <li className="directions">
        Click the box with the project title to see its use
      </li>
      <Container fluid id="work">
        <Row>
          <Col auto className="sample">
            <a
              href="https://https://github.com/7steph7gmailcom/Team-Profile-Generator"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={TeamGenImg}
                alt="An example of the file created after using the application."
              />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-1">VIDEO: Team Profile Generator</h4>
              {/* https://watch.screencastify.com/v/8znTbApicbEgNA0oaTMG */}
            </a>
          </Col>
          <Col auto className="sample">
            <a
              href="https://github.com/7steph7gmailcom/Week3RandomPasswordGen"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={PasswordGenImg}
                alt="A newly generated password after a user answers the alerts"
              />
            </a>
            <a
              href="https://7steph7gmailcom.github.io/Week3RandomPasswordGen/"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-4">LIVE: Password Generator</h4>
            </a>
          </Col>
          <Col auto className="sample">
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={}
                alt=""
              />
            </a>
            <a
              href="https://thawing-mesa-73583.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-3">LIVE: Teacher-Force</h4>
            </a>
          </Col>
          <Col auto className="sample">
            <a
              href="https://github.com/Korbin-Sargent/Dine-In"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={}
                alt=""
              />
            </a>
            <a
              href="https://korbin-sargent.github.io/Dine-In/"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-2">LIVE: Food and Cocktails</h4>
            </a>
          </Col>
          <Col auto className="sample">
            <a
              href="https://github.com/7steph7gmailcom/Employee-Managment-System"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={EmployeeDemo}
                alt="Process of adding/updating employees is shown"
              />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-5"> VIDEO: Employee-Tracker</h4>
            </a>
          </Col>
          <Col auto className="sample">
            <a
              href="https://github.com/7steph7gmailcom/ReadMe-Generator"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ReadmeDemo} alt="Process of creating a new README" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-6">VIDEO: ReadMe Generator</h4>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Project;