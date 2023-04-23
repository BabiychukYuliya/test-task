import styled from 'styled-components';

export const Container = styled.div`
  width: 380px;
  height: 460px;
  // position: relative;
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

export const LogoBox = styled.div`
position:absolute;
top:20px;
left:20px;
display:flex;
justify-content:center;

& img {
    width:76px;
    height:22px;
}
`;

export const DecorBox = styled.div`
position:absolute;
top:28px;
left:36px;
& img {
    width:308px;
    height:168px;
}
`;

export const TextBox = styled.div`
position:absolute;
display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top:284px;
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
font-family: 'Montserrat';
font-weight: 600;
line-height: calc(22 / 18);
text-transform: uppercase;
color: #373737;
top:374px;
border-style:none;
`;


// export const Avatar = styled.div`
// position:absolute;
// `;

export const AvatarEllipse = styled.img`
position:absolute;
top:178px;
z-index: 100;
`;

export const Avatar = styled.img`
position:absolute;
top:187px;

`;

export const AvatarLine = styled.img`
position:absolute;
top:214px;
`;