import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;
    console.log('Fetching from:', url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched data:', data);
        setData(Array.isArray(data) ? data : data.results || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching leaderboard:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Leaderboard</h1>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>User</th>
            <th>Rank</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map(entry => (
            <tr key={entry.id}>
              <td>{entry.user.username}</td>
              <td>{entry.rank}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;