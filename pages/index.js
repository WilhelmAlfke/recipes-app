import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Title>extraterrestrial good ice cream (and other)</Title>
    </div>
  );
}

const Title = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 3rem;
  margin-top: 10%;
`;

const SubTitle = styled.p`
  font-style: bold;
  font-size: 1rem;
`;
