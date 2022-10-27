import styled from "styled-components";

export default function Footer() {
  return (
    <FooterBackground>
      <p>the bottom of the page</p>
    </FooterBackground>
  );
}

const FooterBackground = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4%;
  background-color: blueviolet;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Bottomtext = styled.p`
  font-size: 0.3rem;
  color: greenyellow;
`;
