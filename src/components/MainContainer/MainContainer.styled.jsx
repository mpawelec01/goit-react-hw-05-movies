import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.3);

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding-bottom: 5px;
  text-decoration: none;
  font-weight: 500;
  padding-left: 20px;
  color: black;
  &.active {
    color: salmon;
  }
`;
