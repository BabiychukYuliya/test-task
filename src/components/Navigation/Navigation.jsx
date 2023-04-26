
import { Header, Nav, LinkTo } from './Navigation.styled';

const Navigation = () => {
  return (
    <Header>
    <Nav>
          <LinkTo to='/'>Home</LinkTo>

          <LinkTo to='/tweets'>Tweets</LinkTo>
  
      </Nav>
      </Header>
  );
};

export default Navigation;