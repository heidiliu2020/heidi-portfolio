import React from "react";
import styled from "styled-components";
import Banner from "../images/bg_001.jpg";

const HomeWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${Banner}) no-repeat top center / cover;
  position: relative;

  div {
    position: absolute;
    top: 40%;
    left: 50%;
    letter-spacing: 1.2;

    h2 {
      font-size: 48px;
    }

    @media (max-width: 767px) {
      left: 50%;
      h2 {
        font-size: 32px;
      }
    }
    @media (max-width: 480px) {
      left: 30%;
    }
  }
`;

export default function Home() {
  return (
    <HomeWrapper>
      <div>
        <h2>Hi, I'm Heidi Liu :)</h2>
        <h5>Web Developer | Traveller</h5>
      </div>
    </HomeWrapper>
  );
}
