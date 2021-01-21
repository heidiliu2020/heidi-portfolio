import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import { getUser, getAllRepos } from "../webAPI";
import Loading from "./Loading";

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getUser().then((res) => {
      setUser(res);
      setIsLoading(false);
    });

    getAllRepos().then((res) => {
      // 決定顯示哪些
      const rawRepos = res.reverse().filter((repo) => {
        if (repo.name !== "mentor-program-4th") {
          if (repo.name !== "this-is-codediary") {
            if (repo.name !== "react-demo-json-api-server") return repo;
          }
        }
      });
      setRepos(rawRepos);
      setIsLoading(false);
    });
  }, []);

  return (
    <Wrapper>
      <Header />
      <Home />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <About user={user} />
          <Portfolio repos={repos} />
        </>
      )}
      <Contact />
      <Footer />
    </Wrapper>
  );
}
