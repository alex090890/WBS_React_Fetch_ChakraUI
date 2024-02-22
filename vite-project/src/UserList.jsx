import { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import axios from 'axios';
import UserInfo from './UserInfo';
import { Link } from 'react-router-dom';


const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='cardscontainer'>
      {users.map(user => (
        
        <Card align="center" key={user.id}>
            <CardHeader>
                <h2 size="md"> User Information</h2>
                <strong>Name:</strong> {user.name}
            </CardHeader>
            <CardBody>
            <strong>Username:</strong> {user.username}<br />
            <strong>Email:</strong> {user.email}<br />
            </CardBody>
            <CardFooter>

                {/*<UserInfo user={user} />*/}
                <Link to={`/address/${user.id}`}>Read more</Link>
            </CardFooter>
      </Card>
      ))}
    </div>
  );
};

export default UserList;
