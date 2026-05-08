import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/logo192.png" alt="Octofit Tracker Logo" className="me-2" style={{height: '30px'}} />
            Octofit Tracker
          </Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/activities">Activities</Link>
            <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
            <Link className="nav-link" to="/teams">Teams</Link>
            <Link className="nav-link" to="/users">Users</Link>
            <Link className="nav-link" to="/workouts">Workouts</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/" element={
          <div className="container mt-4">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">Welcome to Octofit Tracker</h1>
                <p className="card-text">Track your fitness activities, view leaderboards, manage teams, and get personalized workout suggestions.</p>
                <a href="/activities" className="btn btn-primary">Get Started</a>
              </div>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
    </div>
  );
}

export default App;
