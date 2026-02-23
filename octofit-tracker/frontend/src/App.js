import './App.css';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <div className="app-shell container py-4 px-4">
      <div className="app-brand">
        <img
          src={`${process.env.PUBLIC_URL}/octofitapp-small.png`}
          alt="OctoFit logo"
          className="app-brand-logo"
        />
        <h1 className="mb-0">OctoFit Tracker</h1>
      </div>

      <nav className="app-nav nav nav-pills mb-4">
        <NavLink className="nav-link" to="/users">Users</NavLink>
        <NavLink className="nav-link" to="/teams">Teams</NavLink>
        <NavLink className="nav-link" to="/activities">Activities</NavLink>
        <NavLink className="nav-link" to="/workouts">Workouts</NavLink>
        <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
      </nav>

      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<Navigate to="/users" replace />} />
      </Routes>
    </div>
  );
}

export default App;
