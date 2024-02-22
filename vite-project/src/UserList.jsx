import { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Button } from '@chakra-ui/react'
import axios from 'axios';
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
        
        <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' key={user.id}>
          <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' alt='Caffe Latte' />
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
  );
};

export default UserList;
