import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

import { Button, Form } from "react-bootstrap";
import LearnMoreBanner from "../images/bg_004.jpg";
import ContactBanner from "../images/bg_002.jpg";

const ContactWrapper = styled.div``;

const LearnMoreContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 330px;
  background: url(${LearnMoreBanner}) fixed bottom center / cover;

  @supports (-webkit-touch-callout: inherit) {
    background-attachment: scroll;
  }
`;

const LearnMoreTitle = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding-top: 100px;
  font-size: 40px;
  color: #fff;

  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(60, 60, 60, 0.5);
`;

const CommunityButtons = styled.div`
  position: absolute;
  z-index: 10;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);

  button {
    margin: 0 50px;
    width: 95px;
  }

  a {
    text-decoration: none;
    color: #222;
  }

  @media (max-width: 767px) {
    button {
      width: 85px;
      margin: 0 4px;
      font-size: 20px;
      padding: 6px;
    }
  }
`;

const ContactContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 600px;
  background: url(${ContactBanner}) fixed center center / cover;

  @supports (-webkit-touch-callout: inherit) {
    background-attachment: scroll;
  }

  form {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
    max-width: 500px;
    padding: 30px 60px;
    margin: 80px auto;

    @media (max-width: 767px) {
      padding: 30px 40px;
      margin: 60px 10px;
    }
  }

  h2 {
    text-align: center;
    font-size: 30px;
  }

  label {
    font-size: 18px;
    padding: 8px 0;
  }
`;

const ContactOverlay = styled(Overlay)`
  background-color: rgba(255, 255, 255, 0.2);
`;

const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) return alert("未填寫完全");

    let templateParams = {
      from_email: `${email}`,
      from_name: `${name}`,
      message: `${message}`,
    };

    let service_id = "service_heidi_email";
    let template_id = "template_ibhhfg8";
    let userID = "user_pgHMpdeDmGRU9yIs2rTmI";
    emailjs
      .send(service_id, template_id, templateParams, userID)
      .then((response) => {
        alert("SUCCESS!", response.status, response.text);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        alert("FAILED...", error);
      });
  };

  return (
    <ContactWrapper id="contact">
      <LearnMoreContainer>
        <Overlay></Overlay>
        <LearnMoreTitle>Learn more about Heidi</LearnMoreTitle>
        <CommunityButtons>
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
        </CommunityButtons>
      </LearnMoreContainer>
      <ContactContainer>
        <ContactOverlay>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <h2>Contact</h2>
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={handleNameChange}
                required
              />
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                value={message}
                onChange={handleMessageChange}
                required
              />
            </Form.Group>
            <SubmitButton>
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </SubmitButton>
          </Form>
        </ContactOverlay>
      </ContactContainer>
    </ContactWrapper>
  );
}
