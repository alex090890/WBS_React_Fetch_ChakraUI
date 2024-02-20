const UserInfo = ({ user }) => {
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
