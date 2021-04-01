import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Layout from './components/Layout';
import Profile from './components/Profile';
import Home from './components/Home';
import Detail from './components/Detail';
import dataJson from './data.json';
import './App.css';

const App: React.FC = () => {
  const { site, profile, data } = dataJson;
  const { metadata, features } = data;

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
            <Route path="/profile">
              <Profile profile={profile} />
            </Route>
            <Route
              path="/detail/:id"
              render={({ match }) => (
                <Detail
                  feature={features.find(
                    (feature) => feature.id === match.params.id,
                  )}
                />
              )}
            />
            <Route path="/">
              <Home pageTitle={metadata.title} features={features} />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
