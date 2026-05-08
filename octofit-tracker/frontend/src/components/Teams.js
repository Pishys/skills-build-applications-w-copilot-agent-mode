import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;
    console.log('Fetching from:', url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched data:', data);
        setData(Array.isArray(data) ? data : data.results || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching teams:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Teams</h1>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Members Count</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map(team => (
            <tr key={team.id}>
              <td>{team.name}</td>
              <td>{team.members ? team.members.length : 0}</td>
              <td>{team.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teams;