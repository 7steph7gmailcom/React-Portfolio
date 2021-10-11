import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import "../project.css";
import PasswordGenImg from "../images/PasswordGenerator.png";
import TeamGenPng from "../images/TeamGen.png";
import EmployeePng from "../images/Employee.png";
import ReadMePng from "../images/ReadMe.png";
import DineInJpg from "../images/DineIn.jpg";
// import { distanceAndSkiddingToXY } from "@popperjs/core/lib/modifiers/offset";



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
                src={TeamGenPng}
                alt="An example of the file created after using the application."
              />
            </a>
            <a
              href="https://watch.screencastify.com/v/8znTbApicbEgNA0oaTMG"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-1">Team Profile Generator</h4>
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
              <h4 className="samp-text-4">Password Generator</h4>
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
                alt=""
              />
            </a>
            <a
              href="https://thawing-mesa-73583.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-3">DineIn Meal Planning App</h4>
            </a>
          </Col>
          <Col auto className="sample">
            <a
              href="https://github.com/Korbin-Sargent/Dine-In"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={DineInJpg}
                alt=""
              />
            </a>
            <a
              href="https://korbin-sargent.github.io/Dine-In/"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-2">Food and Cocktails</h4>
            </a>
          </Col>
          <Col auto className="sample">
            <a
              href="https://github.com/7steph7gmailcom/Employee-Managment-System"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={EmployeePng}
                alt="Process of adding/updating employees is shown"
              />
            </a>
            <a
              href="https://watch.screencastify.com/v/tVjBi3xtnlcc6eXxJBPK"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-5"> Employee-Tracker</h4>
            </a>
          </Col>
          <Col auto className="sample">
            <a
              href="https://github.com/7steph7gmailcom/ReadMe-Generator"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ReadMePng} alt="Process of creating a new ReadMe" />
            </a>
            <a
              href="https://watch.screencastify.com/v/8znTbApicbEgNA0oaTMG"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-6"> ReadMe Generator</h4>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Project;