import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const Work = () => {
  const [work, setWork] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/project")
      .then((res) => {
        console.log(res.data);
        setWork(res.data);

        setLoading(false);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <span>Loading ...</span>
      </div>
    );
  }

  return (
    <div>
      <Title1>Work.</Title1>
      <p>{work[0].name}</p>
      <p>{work[0].description}</p>
      <p>{work[0].date}</p>
      <p>{work[0].duration}</p>
      <p>{work[1].name}</p>
      <p>{work[1].description}</p>
      <p>{work[1].date}</p>
      <p>{work[1].duration}</p>
      <p>{work[2].name}</p>
      <p>{work[2].description}</p>
      <p>{work[2].date}</p>
      <p>{work[2].duration}</p>
    </div>
  );
};

const Title1 = styled.h1`
  font-family: var(--first-font);
  font-size: var(--first-size);
`;

export default Work;
