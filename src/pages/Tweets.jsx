import { fetchUsers } from "components/services/fetchUser";
import CardsList from "components/CardsList/CardsList";
import { useEffect, useState } from 'react';


const Tweets = () => {
  const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
useEffect(() => {
    setIsLoading(true);
    fetchUsers()
      .then(users => {
        setUsers(users);
        setIsLoading(false);
      })
      .catch(error => console.log('error', error.message));
  }, []);

  return isLoading ? <b>Loading...</b> : <CardsList users={users} />;
}

export default Tweets;