import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';

const UserInfo = ({ user }) => {
  const { id } = useParams();
  const [address, setAddress] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/user?id=${id}`)
      .then((response) => response.json())
      .then((data) => setAddress(data.address))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!address) {
    console.error('The address is missing', user);
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

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserInfo;