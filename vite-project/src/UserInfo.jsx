import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const UserInfo = ({ user }) => {

  const { id } = useParams();
  const [address, setAddress] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/user?id=${id}`)
      .then((response) => response.json())
      .then((data) => setAddress(data.address));
  }, [id]);

  if (!user.address) {
    {/*return <p>Loading...</p>;*/}
    console.log(user);
  }

  return (
    <div>
        <strong>Street:</strong> {address.street} <br />
        <strong>Suite:</strong> {address.suite} <br />
        <strong>City:</strong> {address.city} <br />
        <strong>Zipcode:</strong> {address.zipcode} <br />
    </div>
  );
};

export default UserInfo;
