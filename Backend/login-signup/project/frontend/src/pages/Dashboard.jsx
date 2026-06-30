import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Button from '../components/Button.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { fetchDashboard } from '../api/auth.js';

const initials = (name, email) => {
  const source = name?.trim() || email || '';
  if (!source) return '?';
  const parts = source.split(' ').filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return source.slice(0, 2).toUpperCase();
};

const Dashboard = () => {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();
  const [status, setStatus] = useState('checking');

  useEffect(() => {
    let active = true;
    fetchDashboard(auth?.token)
      .then(() => {
        if (active) setStatus('verified');
      })
      .catch(() => {
        if (active) setStatus('error');
      });
    return () => {
      active = false;
    };
  }, [auth]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const displayName = auth?.user?.name || auth?.user?.email || 'there';

  return (
    <div className="dash">
      <nav className="dash__nav">
        <span className="dash__brand">login/signup</span>
        <div className="dash__user">
          <span style={{ fontSize: 13.5, color: 'var(--color-muted)' }}>
            {auth?.user?.email}
          </span>
          <span className="dash__avatar">{initials(auth?.user?.name, auth?.user?.email)}</span>
          <Button variant="ghost" type="button" onClick={handleLogout} style={{ width: 'auto' }}>
            Sign out
          </Button>
        </div>
      </nav>

      <main className="dash__main">
        <span className="dash__eyebrow">
          {status === 'checking' && 'Verifying session…'}
          {status === 'verified' && 'Session verified'}
          {status === 'error' && 'Session check failed'}
        </span>
        <h1 className="dash__title">Welcome back, {displayName.split('@')[0]}.</h1>
        <p className="dash__subtitle">
          Your token was issued by the login/signup auth service and verified against
          the protected /dashboard route on every visit.
        </p>

        <div className="dash__grid">
          <div className="dash__card">
            <p className="dash__card-label">Account email</p>
            <p className="dash__card-value" style={{ fontSize: 17, wordBreak: 'break-all' }}>
              {auth?.user?.email}
            </p>
          </div>
          <div className="dash__card">
            <p className="dash__card-label">Auth method</p>
            <p className="dash__card-value" style={{ fontSize: 17 }}>JWT Bearer</p>
            <p className="dash__card-note">Issued on sign in, valid for 365 days</p>
          </div>
          <div className="dash__card">
            <p className="dash__card-label">Backend status</p>
            <p className="dash__card-value" style={{ fontSize: 17 }}>
              {status === 'verified' ? 'Connected' : status === 'checking' ? '—' : 'Unreachable'}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
