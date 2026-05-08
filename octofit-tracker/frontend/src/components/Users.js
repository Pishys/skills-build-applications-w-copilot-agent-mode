import React, { useEffect, useState } from 'react';

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;
    console.log('Fetching from:', url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched data:', data);
        setData(Array.isArray(data) ? data : data.results || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching users:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Users</h1>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Date Joined</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.date_joined}</td>
              <td>{user.is_active ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;