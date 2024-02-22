import { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Button } from '@chakra-ui/react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';


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
    <>
      <Header />
    <div className='cardscontainer'>
      
      {users.map(user => (
        
        <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' key={user.id}>
          <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src='https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Caffe Latte' />
          <Stack>
            <CardHeader>
                <h2 size="md"> Patient &#8470; {user.id} </h2>
                <strong>Name:</strong> {user.name}
            </CardHeader>
            <CardBody>
            <strong>Username:</strong> {user.username}<br />
            <strong>Email:</strong> {user.email}<br />
            </CardBody>
            <CardFooter>
                <Button id="readmore" ><Link to={`/address/${user.id}`}>Read more</Link></Button>
            </CardFooter>
            </Stack>
      </Card>
      ))}
    </div>
    </>
  );
};

export default UserList;
