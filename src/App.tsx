import React from 'react';
import Header from './components/Header';
import dataJson from './data.json';
import './App.css';

const App = () => {
  const { site, profile, data } = dataJson;

  return (
    <div className="App">
      <Header
        logoImage={site.logoImage}
        title={site.title}
        user={profile.firstName}
      />
      <h1>React app</h1>
    </div>
  );
};

export default App;
