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
  padding: 100px;
  color: #222;

  h2 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 46px;
  }

  @media (max-width: 767px) {
    padding: 80px 40px;
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

  :hover {
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
  height: 160px;
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
      <CardContainer className="mb-3 mr-3">
        <ImageContainer>
          <img src={demoImage} alt="demo" />
        </ImageContainer>
        <CardBody>
          <h5>{repo.name}</h5>
          <Card.Text>{repo.description}</Card.Text>
          <Card.Link href={repo.html_url}>Repo Link</Card.Link>
          {repo.homepage && <Card.Link href={repo.homepage}>Demo</Card.Link>}
        </CardBody>
      </CardContainer>
    </RepoContainer>
  );
}

export default function Portfolio({ repos }) {
  return (
    <PortfolioWrapper id="portfolio">
      <h2>Portfolio</h2>
      <div className="d-flex flex-wrap justify-content-center ">
        {repos.map((repo) => (
          <RepoList key={repo.id} repo={repo} />
        ))}
      </div>
    </PortfolioWrapper>
  );
}
