import { GiAbstract005 } from "react-icons/Gi";

import styled from "styled-components";
export default function Header() {
  <StyledHeader>
    <abIcon size="4rem" />
  </StyledHeader>;
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 4rem;
  border-bottom: 1px solid var(--text-primary);
  background-color: grey;
`;

const abIcon = styled(GiAbstract005)`
  @media (max-width: 600px) {
    display: none;
  }
`;
