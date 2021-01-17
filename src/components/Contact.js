import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import Banner from "../images/bg_002.jpg";

const ContactWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 500px;
  background: url(${Banner}) fixed no-repeat top center / cover;
`;

const LearnMore = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding-top: 130px;
  font-size: 40px;
  color: #fff;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(60, 60, 60, 0.5);
`;
const ContactButtons = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  button {
    margin: 0 50px;
  }

  a {
    text-decoration: none;
    color: #222;
  }
`;

export default function Contact() {
  return (
    <ContactWrapper id="contact">
      <LearnMore>Learn more about Heidi</LearnMore>
      <Overlay></Overlay>
      <ContactButtons>
        <Button variant="primary" size="lg">
          <a
            href="https://github.com/heidiliu2020"
            target="_blank"
            rel="noreferrer nofollow"
          >
            GitHub
          </a>
        </Button>
        <Button variant="light" size="lg">
          <a
            href="https://heidiliu2020.github.io/"
            target="_blank"
            rel="noreferrer nofollow"
          >
            Blog
          </a>
        </Button>
      </ContactButtons>
    </ContactWrapper>
  );
}
