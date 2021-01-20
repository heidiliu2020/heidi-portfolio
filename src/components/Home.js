import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Banner from "../images/bg_001.jpg";

const HomeWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${Banner}) no-repeat top center / cover;
  position: relative;
`;

const TitleBox = styled.div`
  position: absolute;
  letter-spacing: 1.2;
  margin-right: 10px;
  white-space: nowrap;
  border-radius: 2px;
  transition: 1s ease all;

  ${(props) =>
    props.selected
      ? `top: 65%; left: 45%; background: rgba(54, 191, 54, 0.7); padding: 16px 180px 24px 16px`
      : `top: 30%; left: 60%; background: rgba(245, 166, 35, 0.3); padding: 16px 20px;`};

  @media (max-width: 768px) {
    ${(props) =>
      props.selected
        ? `top: 60%; left: 25%; padding: 16px 24px;`
        : `top: 30%; left: 40%; padding: 16px ;`};
  }
`;

const H2 = styled.h2`
  ${(props) => (props.selected ? `font-size: 52px` : `font-size: 40px`)};

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const H5 = styled.h5`
  ${(props) => (props.selected ? `font-size: 28px` : `font-size: 22px`)};

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export default function Home() {
  const [homeTitle, setHomeTitle] = useState(false);
  const titleRef = useRef();
  titleRef.current = homeTitle;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 60;
      if (titleRef.current !== show) {
        setHomeTitle(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HomeWrapper id="home">
      <TitleBox selected={homeTitle}>
        <H2 selected={homeTitle}>Hi, I'm Heidi Liu :)</H2>
        <H5 selected={homeTitle}>Web Developer | Traveller</H5>
      </TitleBox>
    </HomeWrapper>
  );
}
