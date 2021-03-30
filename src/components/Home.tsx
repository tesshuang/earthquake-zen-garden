import React from 'react';
import { Link } from 'react-router-dom';
import { Feature } from '../types';

interface HomeProps {
  pageTitle: string;
  features: Feature[];
}

const Home: React.FC<HomeProps> = ({ pageTitle, features }) => {
  return (
    <div>
      <h1>{pageTitle}</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Magtitude</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => {
            const date = new Date(feature.properties.time)
              .toDateString()
              .slice(4);
            const time = new Date(feature.properties.time).toLocaleString(
              'en-US',
              {
                hour: '2-digit',
                minute: '2-digit',
              },
            );
            console.log(time);
            return (
              <tr key={feature.id}>
                <td>
                  <Link to={`/detail/${feature.id}`}>
                    {feature.properties.place}
                  </Link>
                </td>
                <td>{feature.properties.mag}</td>
                <td>{`${date} ${time}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
