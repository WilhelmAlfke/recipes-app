import { GiAbstract005 } from "react-icons/gi";
import Link from "next/link";

import styled from "styled-components";
export default function Header() {
  return (
    <div>
      <StyledHeader>
        this.is.a.site.
        <abIcon size="4rem" />
        <StyledNavigation>
          <Link href="/" passHref legacyBehavior>
            <Anchor>Home</Anchor>
          </Link>
          <Link href="/dessert" passHref legacyBehavior>
            <Anchor>Desserts</Anchor>
          </Link>
          <Link href="/veggie" passHref legacyBehavior>
            <Anchor>Veggies</Anchor>
          </Link>
        </StyledNavigation>
      </StyledHeader>
    </div>
  );
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 4rem;
  border-bottom: 1px solid var(--text-primary);
  background-color: lightcyan;
`;

const abIcon = styled(GiAbstract005)`
  @media (max-width: 600px) {
    display: none;
  }
`;
const StyledNavigation = styled.nav`
  display: flex;
  gap: 2rem;
`;

const Anchor = styled.a`
  color: var(--text-secondary);
  &:hover {
    cursor: pointer;
    color: var(--text-primary);
  }
`;
