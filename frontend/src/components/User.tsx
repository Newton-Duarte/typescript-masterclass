import React from 'react';

interface IUser {
  name: string;
  email: string;
}

interface UserProps {
  user: IUser;
}

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <div>
      <strong>Nome: </strong> {user.name} <br />
      <strong>E-mail: </strong> {user.email} <br /> <br />
    </div>
  )
};

export default User;