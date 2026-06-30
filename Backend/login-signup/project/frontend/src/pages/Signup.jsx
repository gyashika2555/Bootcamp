import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout.jsx';
import FormField from '../components/FormField.jsx';
import Button from '../components/Button.jsx';
import Banner from '../components/Banner.jsx';
import { registerUser } from '../api/auth.js';
import { useAuth } from '../context/AuthContext.jsx';

const Signup = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    try {
      const { data } = await registerUser(form);
      if (data?.token) {
        login({ token: data.token, user: data.user });
        navigate('/dashboard');
      } else {
        setError(data?.msg || 'Unable to create account');
      }
    } catch (err) {
      setError(err.response?.data?.msg || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      eyebrow="Get started"
      title="Create your account"
      subtitle="Set up access in under a minute."
      footer={
        <span>
          Already have an account?{' '}
          <Link to="/login" style={{ color: 'var(--color-ink)', fontWeight: 600 }}>
            Sign in
          </Link>
        </span>
      }
    >
      <form onSubmit={handleSubmit} noValidate>
        <Banner>{error}</Banner>

        <FormField
          label="Full name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Ada Lovelace"
          autoComplete="name"
        />

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
          placeholder="At least 6 characters"
          autoComplete="new-password"
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
          <Button loading={loading}>Create account</Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Signup;
