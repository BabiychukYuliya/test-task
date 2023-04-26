import { fetchUsers, updateUserData } from "components/services/fetchUser";
import CardsList from "components/CardsList/CardsList";
import { useEffect, useState } from 'react';
import { save } from "components/services/localStorage";
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { BackLink } from "components/BackBtn/Back";
import Loader from "components/Loader/Loader";
import { slice } from 'lodash';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(3);
  const [isCompleted, setIsCompleted] = useState(false);
  const initialUsers = slice(users, 0, index)
  
    
useEffect(() => {
    setIsLoading(true);
    fetchUsers()
      .then(users => {
        setUsers(users);
        setIsLoading(false);
      })
      .catch(error => console.log('error', error.message));
  }, []);

  const handleFollowClick = (userId, isFollowing) => {
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        const updatedUser = {
          ...user,
          followers: user.followers + (isFollowing ? -1 : 1),
        };
        updateUserData(user.id, { followers: updatedUser.followers });
        return updatedUser;
      }
      return user;
    });
    setUsers(updatedUsers);

    const keyStorage = `tweets_${userId}`;
    save(keyStorage, isFollowing ? false : true);
  };

  const onLoadMoreBtn = () => {
   setIndex(index + 3)
    if (index >= users.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }
  
  return isLoading ? (
    <Loader />
  ) : (<>
    <BackLink to='/'>Back</BackLink>
    <CardsList users={initialUsers} onFollowClick={handleFollowClick} />;
    {!isCompleted && <LoadMoreBtn onLoadMoreBtn={onLoadMoreBtn} />}
  </>)
}

export default Tweets;