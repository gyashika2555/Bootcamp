import React from 'react';
import './Banner.css';

const Banner = ({ tone = 'danger', children }) => {
  if (!children) return null;
  return <div className={`banner banner--${tone}`}>{children}</div>;
};

export default Banner;
