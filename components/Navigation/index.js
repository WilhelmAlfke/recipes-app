import styled from "styled-components";

export default function Navigation() {
  return (
    <ItemList>
      <li>Veggies</li>
      <li>IceCream</li>
    </ItemList>
  );
}

const ItemList = styled.ul`
  display: flex;
  direction: column;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
`;
