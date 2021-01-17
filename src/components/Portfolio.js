import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

const PortfolioWrapper = styled.div`
  padding: 140px 120px;
  color: #222;

  h2 {
    text-align: center;
    margin-bottom: 30px;
  }
`;

const RepoContainer = styled.div`
  h5 {
    margin: 4px 0;
  }
`;

function Repos({ repo }) {
  return (
    <RepoContainer>
      <Card style={{ width: "500px" }} className="mb-3 mr-3">
        <Card.Header>
          <h5>{repo.name}</h5>
        </Card.Header>
        <Card.Body>
          <Card.Text>{repo.description}</Card.Text>
          <Card.Link href={repo.html_url}>Repo Link</Card.Link>
          {repo.homepage && <Card.Link href={repo.homepage}>Demo</Card.Link>}
        </Card.Body>
      </Card>
    </RepoContainer>
  );
}

export default function Portfolio({ repos }) {
  return (
    <PortfolioWrapper id="portfolio">
      <h2>Portfolio</h2>
      <div className="d-flex flex-wrap justify-content-center ">
        {repos.map((repo) => (
          <Repos key={repo.id} repo={repo} />
        ))}
      </div>
    </PortfolioWrapper>
  );
}
