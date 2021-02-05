import styled from "styled-components";

const Contact = () => {
  return (
    <div>
      <Title1>Contact.</Title1>
      <Title3>Let's create your next experience together</Title3>
      <Parag>hello@biarrifornia.com</Parag>
    </div>
  );
};

const Parag = styled.p`
  font-size: 25px;
`;

const Title3 = styled.h3`
  font-family: var(--first-font);
  padding-bottom: 20px;
`;

const Title1 = styled.h1`
  font-family: var(--first-font);
  font-size: var(--first-size);
  padding-bottom: 20px;
`;

export default Contact;
