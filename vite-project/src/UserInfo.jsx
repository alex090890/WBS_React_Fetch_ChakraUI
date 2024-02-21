import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserInfo = ({ user }) => {

  const { id } = useParams();
  const [address, setAddress] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setAddress(data.address));
  }, [id]);


  return (
    <div>
        <strong>Street:</strong> {user.address.street} <br />
        <strong>Suite:</strong> {user.address.suite} <br />
        <strong>City:</strong> {user.address.city} <br />
        <strong>Zipcode:</strong> {user.address.zipcode} <br />
    </div>
  );
};

export default UserInfo;
