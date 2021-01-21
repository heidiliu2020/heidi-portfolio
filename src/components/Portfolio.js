import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import expressBoard from "../images/express-board.png";
import portfolio from "../images/portfolio.png";
import blog from "../images/tech-blog.png";
import reactBlog from "../images/react-blog.png";
import succulents from "../images/succulents society.jpg";
import sweetbreath from "../images/sweetbreath2.png";

const PortfolioWrapper = styled.div`
  padding: 200px 120px 150px 120px;
  color: #222;
  position: relative;

  @media (max-width: 767px) {
    padding: 200px 40px 100px 40px;
  }
`;

const TitleBox = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  padding: 16px 20px 16px 160px;
  background: rgba(54, 191, 54, 0.5);
  h2 {
    font-size: 58px;
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 48px;
    }
    padding: 16px 16px 16px 80px;
  }
`;

const RepoContainer = styled.div`
  h5 {
    margin-bottom: 10px;
    color: #222;
  }
  p {
    color: #444;
  }
`;

const CardContainer = styled(Card)`
  width: 320px;
  white-space: pre-wrap;
  transition: ease-in-out all 0.5s;
  box-shadow: 0 0px 2px 0px rgba(180, 180, 180, 0.32);

  :hover {
    box-shadow: 0 3px 8px 1px rgba(100, 100, 100, 0.32);
    img {
      transform: scale(1.15);
      transition: ease-in-out all 0.5s;
    }
  }

  @media (max-width: 767px) {
    width: 300px;
  }
`;

const ImageContainer = styled.div`
  height: 180px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const CardBody = styled(Card.Body)`
  height: 180px;
`;

function RepoList({ repo }) {
  const [demoImage, setDemoImage] = useState("");

  // 根據 repo.name 顯示 demo 圖片
  useEffect(() => {
    if (repo.name === "express-board-demo") setDemoImage(expressBoard);
    if (repo.name === "heidi-portfolio") setDemoImage(portfolio);
    if (repo.name === "heidiliu2020.github.io") setDemoImage(blog);
    if (repo.name === "react-blog-demo") setDemoImage(reactBlog);
    if (repo.name === "succulents-society") setDemoImage(succulents);
    if (repo.name === "sweetbreath") setDemoImage(sweetbreath);
  }, []);

  return (
    <RepoContainer>
      <CardContainer className="mb-4 mr-4">
        <ImageContainer>
          <img src={demoImage} alt="demo" />
        </ImageContainer>
        <CardBody>
          <h5>{repo.name}</h5>
          <Card.Text>{repo.description}</Card.Text>
          <Card.Link
            href={repo.html_url}
            target="_blank"
            rel="noreferrer nofollow"
          >
            Repo Link
          </Card.Link>
          {repo.homepage && (
            <Card.Link
              href={repo.homepage}
              target="_blank"
              rel="noreferrer nofollow"
            >
              Demo
            </Card.Link>
          )}
        </CardBody>
      </CardContainer>
    </RepoContainer>
  );
}

export default function Portfolio({ repos }) {
  return (
    <PortfolioWrapper id="portfolio">
      <TitleBox>
        <h2>Portfolio</h2>
      </TitleBox>
      <div className="d-flex flex-wrap justify-content-center ">
        {repos.map((repo) => (
          <RepoList key={repo.id} repo={repo} />
        ))}
      </div>
    </PortfolioWrapper>
  );
}
