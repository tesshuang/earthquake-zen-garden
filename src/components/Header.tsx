import React from 'react';

interface HeaderProps {
  title: string;
  logoImage: string;
  user: string;
}

const Header = ({ logoImage, title, user }: HeaderProps) => {
  return (
    <header>
      <img src={logoImage} alt={`${title}-logo`} />
      <h1>{title}</h1>
      <div>Welcome {user}</div>
    </header>
  );
};

export default Header;
