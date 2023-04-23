import {Container, LogoBox, DecorBox, Avatar, AvatarEllipse, AvatarLine, TextBox, UserTeweets,UserFollowers,Button} from './Card.styled';

import logo from '../../images/logo.png';
import picture from '../../images/picture.png';
import Ellipse from '../../images/Ellipse.png';
import Line from '../../images/Line.png';
import Hansel from '../../images/Hansel.png';

export const Card = ({ id, user,avatar,tweets, followers}) => {
    return (<Container key={id}>
        <LogoBox>
            <img src={logo} alt='logo'></img>
        </LogoBox>
        <DecorBox>
            <img src={picture} alt='decoration'></img>
        </DecorBox>
        
                {/* <AvatarBox>
            
            
           
        </AvatarBox> */}
        <AvatarEllipse src={Ellipse} alt='ellipse' />
        <AvatarLine src={Line} alt='line' />
        <Avatar src={Hansel} alt='user' width={62} height={62}/>

        <TextBox>
            <UserTeweets>{tweets} tweets</UserTeweets>
            <UserFollowers>{followers} followers</UserFollowers>
        </TextBox>
<Button>Follow</Button>
            </Container>)
}