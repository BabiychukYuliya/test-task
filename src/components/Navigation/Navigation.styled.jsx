import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  
  width: 1200px;
  height: 70px;
  border-bottom: 1px solid #2e237e;
  margin: 0 auto;`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 10px;`;

export const LinkTo = styled(NavLink)`
 font-size: 30px;
   border-radius: 15px;
  padding: 10px;
    :hover {
    background-color: #EBD8FF;
  }
  &.active {
    background-color: #EBD8FF;
  }
`;