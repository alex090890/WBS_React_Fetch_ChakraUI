import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Button } from '@chakra-ui/react';
import Message from './Message';

import Header from './Header';


const UserInfo = () => {
  const { id } = useParams();
  const [address, setAddress] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setAddress(data.address))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

 

  return (
    <>
      <Header />
      <div className="cardscontainer">
    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' >
      <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src='https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Автор фото с Pexels: Luis del Río: ' />
      <Stack>
        <CardHeader>
          <h2>Postal address</h2>
        </CardHeader>
        <CardBody>
          <strong>Street:</strong> {address?.street} <br />
          <strong>Suite:</strong> {address?.suite} <br />
          <strong>City:</strong> {address?.city} <br />
          <strong>Zipcode:</strong> {address?.zipcode} <br />
        </CardBody>
        <CardFooter>
          <RouterLink to="/">
            <Button id='readmore'>To the main page</Button>
          </RouterLink>
        </CardFooter>
      </Stack>
        </Card>
        <Message />
        </div>
    </>
  );
};

export default UserInfo;