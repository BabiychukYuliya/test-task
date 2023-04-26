import {
  Container,
  LogoBox,
  DecorBox,
  LineCenter,
  Avatar,
  AvatarBox,
  TextBox,
  UserTeweets,
  UserFollowers,
    Button,
    ButtonText
} from './Card.styled';
import { load } from 'components/services/localStorage';


import logo from '../../images/logo.png';
import picture from '../../images/picture.png';

export const Card = ({ id, avatar, tweets, followers, onFollowClick }) => {
    const isFollowing = load(`tweets_${id}`);

   const handleFollowClick = () => {
    onFollowClick(id, isFollowing);
  };


  return (
    <Container>
      <LogoBox src={logo} alt="logo" />
      <DecorBox src={picture} alt="decoration" />
      <LineCenter />
      <AvatarBox>
        <Avatar src={avatar} />
      </AvatarBox>
      <TextBox>
        <UserTeweets>{tweets} tweets</UserTeweets>
        <UserFollowers>{followers} followers</UserFollowers>
      </TextBox>
      <Button
        type='button'
        onClick={handleFollowClick}
        isFollowing={isFollowing}
      >
        <ButtonText isFollowing={isFollowing}>
          {isFollowing ? 'Following' : 'Follow'}
        </ButtonText>
      </Button>
    </Container>
  );
};
