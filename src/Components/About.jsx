import styled from "styled-components";
import { Row, Col } from "reactstrap";
import { about, CV } from "../images/index_img";

const About = () => {
  return (
    <div>
      <RowResp xs={1} md={2}>
        <Col>
          <Title1>About me.</Title1>
          <Parag>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            explicabo consequuntur reprehenderit facere quis cumque voluptates
            eligendi magnam voluptatem harum facilis, quaerat ratione ipsum
            excepturi, doloremque earum veniam esse. Incidunt!
          </Parag>
          <a
            href="https://drive.google.com/file/d/13hf5JJLtwgFbKU2bT-niV6JLPTw-yL5D/view?usp=sharing"
            target="_blank"
          >
            <Cv src={CV} alt="" />
          </a>
        </Col>
        <Col>
          <Image src={about} alt="" />
        </Col>
      </RowResp>
    </div>
  );
};

const Cv = styled.img`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  display: flex;
  width: 30%;
  margin-top: 15px;
  transition: ease-in-out 0.3s;
  &:hover {
    transition: transform 0.3s;
    transform: scale(1.8);
  }
`;

const Parag = styled.p`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
`;

const RowResp = styled(Row)`
  display: flex;
  margin-top: 5%;
`;

const Image = styled.img`
  width: 80%;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  transition: ease-in-out 0.3s;
  &:hover {
    -webkit-filter: grayscale(100%);
    filter: grayscale(0%);
    transition: ease-in-out 0.3s;
  }
`;

const Title1 = styled.h1`
  font-family: var(--first-font);
  font-size: var(--first-size);
`;

export default About;
