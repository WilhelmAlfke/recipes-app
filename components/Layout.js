import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Header />

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
