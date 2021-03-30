import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Layout from './components/Layout';
import Profile from './components/Profile';
import dataJson from './data.json';
import './App.css';

const App: React.FC = () => {
  const { site, profile, data } = dataJson;

  return (
    <Router>
      <div className="App">
        <Header
          logoImage={site.logoImage}
          title={site.title}
          user={profile.firstName}
        />
        <Layout>
          <Switch>
            <Route path="/">
              <h1>Home</h1>
            </Route>
            <Route path="/detail">
              <h1>Detail view</h1>
            </Route>
            <Route path="/profile">
              <Profile profile={profile} />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
