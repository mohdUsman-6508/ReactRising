import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user, admin } = useContext(UserContext);
  if (!user) return <div>Default Admin is {admin}</div>;
  return (
    <div>
      <h2>Welcome {user.username}</h2>
    </div>
  );
}

export default Profile;
