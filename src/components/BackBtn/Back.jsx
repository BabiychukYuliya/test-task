import { HiArrowLeft } from "react-icons/hi";
import { StyledLink } from './Back.styled';



export const BackLink = ({ to, children }) => {
    return (
      <div>
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
            </StyledLink>
            </div>
  );
};