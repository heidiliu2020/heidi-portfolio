import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Image, Button } from "react-bootstrap";
import { GithubIcon, MediumIcon, RssIcon, HandIcon } from "../utils";
import Banner from "../images/bg_003.jpg";

const AboutWrapper = styled.div`
  transition: 1.5s ease all;

  ${(props) =>
    props.selected
      ? `background: #eee; color: #222;`
      : `background: #222; color: #eee;`};
`;

const AboutTitle = styled.div`
  text-align: center;
  height: 350px;
  position: relative;
  white-space: nowrap;
`;

const H2 = styled.h2`
  position: absolute;
  font-size: 72px;
  transition: 1s ease all;

  ${(props) =>
    props.selected
      ? `top:80%; left: 50%; transform: translate(-50%, -50%);`
      : `top:30%; left: 50%;  transform: translate(-50%, -50%);`};

  @media (max-width: 767px) {
    font-size: 48px;
  }
`;

const AboutContainer = styled.div`
  overflow: hidden;
  position: relative;
  background: url(${Banner}) fixed top center / cover;
  color: #000;

  @supports (-webkit-touch-callout: inherit) {
    background-attachment: scroll;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(240, 240, 240, 0.5);
`;

const AboutContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  padding: 100px 20px;
  white-space: nowrap;

  img {
    width: 180px;
    height: 180px;
    margin-right: 100px;
  }

  :hover {
    img {
      transform: rotate(1turn);
      transition: ease-in-out all 1s;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    padding: 40px;

    img {
      margin: 0 0 20px 0;
    }
  }
`;

const Profile = styled.div`
  width: 50%;
  line-height: 2;
  font-weight: 700;
  white-space: pre-wrap;
  h5 {
    color: #333;
    font-size: 18px;
  }

  p {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    width: 100%;
    h5 {
      padding: 20px 0;
    }
  }
`;

const Icons = styled.div`
  a {
    margin-right: 10px;

    svg:hover {
      color: #222;
    }
  }
`;

const ResumeIcon = styled.button`
  display: inline-block;
  padding: 2px 8px;
  border: none;
  border-radius: 4px;
  margin-left: 20px;
  transition: 0.5s ease-in-out all;

  a {
    text-decoration: none;
    margin: 0;
    color: #222;
    font-size: 24px;
  }
  svg {
    color: #222;
  }

  :hover {
    transform: scale(1.2);
    background: #f5a623;
  }
`;

export default function About({ user }) {
  const [aboutTitle, setAboutTitle] = useState(false);
  const aboutRef = useRef();
  aboutRef.current = aboutTitle;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 440;
      if (aboutRef.current !== show) {
        setAboutTitle(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AboutWrapper id="about" selected={aboutTitle}>
      <AboutTitle>
        <H2 selected={aboutTitle}>About Me...</H2>
      </AboutTitle>
      <AboutContainer>
        <Overlay></Overlay>
        <AboutContent>
          <Image src={user.avatar_url} alt="avatar" roundedCircle />
          <Profile>
            <h3>{user.name}</h3>
            <h5>——{user.bio}</h5>
            <p>
              喜歡旅行，也熱愛探索新事物，為了架設旅遊日記的部落格，開始踏入網頁設計的世界。
              <br />
              希望自己能夠培養「解決問題的能力」，同時在過程中探索未來的可能性，朝著前後端的世界邁進。
            </p>
            <Icons>
              <a href={user.html_url} target="_blank" rel="noreferrer nofollow">
                <GithubIcon></GithubIcon>
              </a>
              <a href={user.blog} target="_blank" rel="noreferrer nofollow">
                <MediumIcon></MediumIcon>
              </a>
              <a
                href="https://heidiliu2020.github.io/"
                target="_blank"
                rel="noreferrer nofollow"
              >
                <RssIcon></RssIcon>
              </a>

              <ResumeIcon variant="warning">
                <a
                  href="https://www.cakeresume.com/jungting-liu"
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  <HandIcon></HandIcon> Resume
                </a>
              </ResumeIcon>
            </Icons>
          </Profile>
        </AboutContent>
      </AboutContainer>
    </AboutWrapper>
  );
}
