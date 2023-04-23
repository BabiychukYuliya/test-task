import { Card } from 'components/Card/Card';
import { UserList } from './CardsList.styled';
// import { Container } from 'components/Container/Container';

const CardsList = ({ users }) => {
  return (
    <UserList>
      {users.length > 0 &&
        users.map(({ id, user, avatar, followers, tweets, followed }) => (
          <li key={id}>
                            <Card
            id={id}
            tweets={tweets}
            followers={followers}
            followed={followed}
            user={user}
            avatar={avatar}
          />
          </li>

        ))}
    </UserList>
  );
};

export default CardsList;
