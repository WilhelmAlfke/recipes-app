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
          <Link passHref href="/" legacyBehavior>
            <Anchor>Home</Anchor>
          </Link>
          <Link passHref href="/dessert" legacyBehavior>
            <Anchor>Desserts</Anchor>
          </Link>
          <Link passHref href="/veggie" legacyBehavior>
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
