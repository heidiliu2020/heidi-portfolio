import React from "react";
import styled from "styled-components";
import { Image } from "react-bootstrap";
import { GithubIcon, MediumIcon, RssIcon } from "../utils";
import Banner from "../images/bg_003.jpg";

const AboutWrapper = styled.div`
  color: #eee;
  background: #222;

  h2 {
    text-align: center;
    padding: 160px;
    font-size: 68px;
  }

  @media (max-width: 767px) {
    h2 {
      padding: 160px 0;
      font-size: 48px;
    }
  }
`;

const AboutContainer = styled.div`
  overflow: hidden;
  position: relative;
  background: url(${Banner}) fixed top center / cover;
  color: #000;
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

export default function About({ user }) {
  return (
    <AboutWrapper id="about">
      <h2>About Me...</h2>
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
            </Icons>
          </Profile>
        </AboutContent>
      </AboutContainer>
    </AboutWrapper>
  );
}
