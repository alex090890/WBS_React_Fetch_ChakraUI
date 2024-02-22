import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div>
        <strong>Street:</strong> {address?.street} <br />
        <strong>Suite:</strong> {address?.suite} <br />
        <strong>City:</strong> {address?.city} <br />
        <strong>Zipcode:</strong> {address?.zipcode} <br />
    </div>
  );
};

export default UserInfo;