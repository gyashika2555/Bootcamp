import React from 'react';
import './AuthLayout.css';

const AuthLayout = ({ eyebrow, title, subtitle, children, footer }) => {
  return (
    <div className="auth-shell">
      <aside className="auth-brand">
        <div className="auth-brand__top">
          <span className="auth-brand__mark">login/signup</span>
        </div>

        <div className="auth-brand__body">
          <h1 className="auth-brand__headline">
            Access, held to a&nbsp;higher standard.
          </h1>
          <p className="auth-brand__copy">
            One credential, quietly verified at every step. Built for teams
            who treat identity as infrastructure, not an afterthought.
          </p>

          <div className="ledger" aria-hidden="true">
            <div className="ledger__card ledger__card--3">
              <span className="ledger__line ledger__line--a" />
              <span className="ledger__line ledger__line--b" />
            </div>
            <div className="ledger__card ledger__card--2">
              <span className="ledger__line ledger__line--a" />
              <span className="ledger__line ledger__line--b" />
            </div>
            <div className="ledger__card ledger__card--1">
              <span className="ledger__chip" />
              <span className="ledger__line ledger__line--a" />
              <span className="ledger__line ledger__line--b" />
            </div>
          </div>
        </div>

        <div className="auth-brand__bottom">
          <p>&copy; {new Date().getFullYear()} login/signup Identity</p>
        </div>
      </aside>

      <main className="auth-panel">
        <div className="auth-card">
          {eyebrow && <span className="auth-card__eyebrow">{eyebrow}</span>}
          <h2 className="auth-card__title">{title}</h2>
          {subtitle && <p className="auth-card__subtitle">{subtitle}</p>}

          <div className="auth-card__body">{children}</div>

          {footer && <div className="auth-card__footer">{footer}</div>}
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
