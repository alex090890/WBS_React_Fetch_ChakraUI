import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Button} from '@chakra-ui/react'


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
    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
      <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' alt='Caffe Latte' />
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
  );
};

export default UserInfo;