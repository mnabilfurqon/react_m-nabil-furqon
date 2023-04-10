import React from 'react';
import { Link } from 'react-router-dom';

function UserDetail(props) {
  const { match } = props;
  const userId = match.params.id;

  return (
    <div>
      <h1>User Detail</h1>
      <p>User ID: {userId}</p>
      {/* Tampilkan data lengkap dari user */}
    </div>
  );
}

export default UserDetail;
