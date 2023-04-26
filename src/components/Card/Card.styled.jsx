import styled from 'styled-components';

export const Container = styled.div`
  width: 380px;
  height: 460px;
  position: relative;
    display: flex;
  flex-direction: column;
   align-items: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const LogoBox = styled.img`
position:absolute;
top:20px;
left:20px;
    width:76px;
    height:22px;
`;

export const DecorBox = styled.img`
margin-bottom: 28px;
    width:308px;
    height:168px;
    padding: 28px 36px;
`;

export const LineCenter = styled.div`
position: absolute;
width: 380px;
height: 8px;
top: 214px;
background: #EBD8FF;

box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
`;


export const AvatarBox = styled.div`
position: absolute;
top:178px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;`;


export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  background-color: #5736a3;
  border-radius: 50%;`;


export const TextBox = styled.div`
padding-bottom: 26px;
padding-top: 16px;
display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

export const UserTeweets = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  text-transform: uppercase;
  margin:0px;
  color: #EBD8FF;
font-family: 'Montserrat';
`;


export const UserFollowers = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  text-transform: uppercase;
  margin:0px;
  color: #EBD8FF;
  font-family: 'Montserrat';
`;

export const Button = styled.button`
width: 196px;
height: 50px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
position:absolute;
top:374px;
border-style:none;

background-color: ${({ isFollowing }) =>
    isFollowing ? '#5CD3A8' : '#EBD8FF'};
`;

export const ButtonText = styled.p`
font-family: 'Montserrat';
font-weight: 600;
line-height: calc(22 / 18);
text-transform: uppercase;
color: #373737;
`;