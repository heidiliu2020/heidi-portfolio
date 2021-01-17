import React from "react";
import styled from "styled-components";
import { GithubIcon } from "../utils";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222;
`;

const CopyRight = styled.div`
  display: flex;
  padding: 12px;
  color: #eee;
  letter-spacing: 1.2px;
  p {
    margin: 0 10px;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <CopyRight>
        <p>Heidi's Portfolio © 2021 Copyright</p>
        <a
          href="https://github.com/heidiliu2020"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <GithubIcon></GithubIcon>
        </a>
      </CopyRight>
    </FooterContainer>
  );
}
