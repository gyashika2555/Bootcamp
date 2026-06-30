import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout.jsx';
import FormField from '../components/FormField.jsx';
import Button from '../components/Button.jsx';
import Banner from '../components/Banner.jsx';
import { loginUser } from '../api/auth.js';
import { useAuth } from '../context/AuthContext.jsx';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data } = await loginUser(form);
      if (data?.token) {
        login({ token: data.token, user: data.user });
        navigate('/dashboard');
      } else {
        setError(typeof data === 'string' ? data : data?.msg || 'Unable to sign in');
      }
    } catch (err) {
      setError(err.response?.data?.msg || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      eyebrow="Welcome back"
      title="Sign in to your account"
      subtitle="Enter your credentials to continue to your dashboard."
      footer={
        <span>
          New to Acharya?{' '}
          <Link to="/signup" style={{ color: 'var(--color-ink)', fontWeight: 600 }}>
            Create an account
          </Link>
        </span>
      }
    >
      <form onSubmit={handleSubmit} noValidate>
        <Banner>{error}</Banner>

        <FormField
          label="Email address"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@company.com"
          autoComplete="email"
        />

        <FormField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="••••••••"
          autoComplete="current-password"
          rightSlot={
            <button
              type="button"
              className="field__toggle"
              onClick={() => setShowPassword((s) => !s)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          }
        />

        <div style={{ marginTop: 28 }}>
          <Button loading={loading}>Sign in</Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
