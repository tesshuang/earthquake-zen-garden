import React from 'react';
import { Link } from 'react-router-dom';
interface HeaderProps {
  title: string;
  logoImage: string;
  user: string;
}

const Header: React.FC<HeaderProps> = ({ logoImage, title, user }) => {
  return (
    <header>
      <Link to="/">
        <img src={logoImage} alt={`${title}-logo`} />
      </Link>
      <h1>{title}</h1>
      <div>
        <Link to="/profile">Welcome {user}</Link>
      </div>
    </header>
  );
};

export default Header;
