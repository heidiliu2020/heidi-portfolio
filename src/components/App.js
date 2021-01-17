import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import { getUser, getAllRepos } from "../webAPI";

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

export default function App() {
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getUser().then((res) => {
      console.log(res);
      setUser(res);
    });

    getAllRepos().then((res) => {
      console.log(res);
      const rawRepos = res.filter((repo) => {
        if (repo.name !== "mentor-program-4th") {
          if (repo.name !== "this-is-codediary") return repo;
        }
      });
      setRepos(rawRepos);
    });
  }, []);

  return (
    <Wrapper>
      <Header />
      <Home />
      <About user={user} />
      <Portfolio repos={repos} />
      <Contact user={user} />
      <Footer />
    </Wrapper>
  );
}
