import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navigation />
      <mainElement>{children}</mainElement>
      <Footer />
    </>
  );
}

const mainElement = styled.main`
  margin: 0;
  padding: 1rem;
  min-height: calc(100vh-8rem);
`;
