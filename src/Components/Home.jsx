import React from "react";
import styled from "styled-components";
import { FaHandSpock } from "react-icons/fa";
import { palmtree, biarrifornia } from "../images/index_img";

const Home = () => {
  return (
    <>
      <div>
        <Position>
          <Title2>
            Hello, I'm Albin <FaHandSpock />
          </Title2>
          <Logo src={biarrifornia} alt="" />
          <Baseline>Freelance Front-end Web Developer</Baseline>
        </Position>
        <Img src={palmtree} alt="" />
      </div>
    </>
  );
};

const Baseline = styled.p`
  font-family: var(--first-font);
  font-size: 3vw;
  padding-top: 4%;
`;

const Logo = styled.img`
  width: 60%;
`;

const Title2 = styled.h2`
  font-family: var(--first-font);
  font-size: 3vw;
  padding-top: 2%;
  padding-bottom: 3%;
`;

const Position = styled.div`
  position: absolute;
`;

const Img = styled.img`
  width: 100%;
`;

export default Home;
