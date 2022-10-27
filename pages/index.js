import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div>
      <Header />
      <Title>extraterrestrial good ice cream (and other)</Title>
      <Navigation />
      <Footer />
    </div>
  );
}

const Title = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 3rem;
  border-bottom: 1px dotted;
  background-color: lightcoral;
`;

const SubTitle = styled.p`
  font-style: bold;
  font-size: 1rem;
`;
