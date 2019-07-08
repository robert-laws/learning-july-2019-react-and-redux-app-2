import React from 'react';
import UserCard from './UserCard';

const UserList = (props) => {
  const users = props.users.map((user, index) => <UserCard key={index} name={user} />);

  return(
    <div className="ui three stackable cards">
      {users}
    </div>
  )
}

export default UserList;