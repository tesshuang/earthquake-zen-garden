import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Feature } from '../types';
import { formatDate } from '../utils';

interface HomeProps {
  pageTitle: string;
  features: Feature[];
}

const Home: React.FC<HomeProps> = ({ pageTitle, features }) => {
  const originalData = [...features];
  const [featureData, setFeatureData] = useState(features);
  const [sorted, setSorted] = useState({
    title: null,
    mag: null,
    time: null,
  });

  const sortData = (condition: string) => {
    const data = [...featureData];
    if (condition === 'title') {
      if (!sorted.title) {
        data.sort((a, b) =>
          a.properties.place.localeCompare(b.properties.place),
        );
        setFeatureData([...data]);
        setSorted({ title: 'asc', mag: null, time: null });
      } else if (sorted.title === 'asc') {
        data.sort((a, b) =>
          b.properties.place.localeCompare(a.properties.place),
        );
        setFeatureData([...data]);
        setSorted({ title: 'des', mag: null, time: null });
      } else {
        setFeatureData([...originalData]);
        setSorted({ title: null, mag: null, time: null });
      }
    } else if (condition === 'mag') {
      if (!sorted.mag) {
        data.sort((a, b) => a.properties.mag - b.properties.mag);
        setFeatureData([...data]);
        setSorted({ mag: 'asc', title: null, time: null });
      } else if (sorted.mag === 'asc') {
        data.sort((a, b) => b.properties.mag - a.properties.mag);
        setFeatureData([...data]);
        setSorted({ mag: 'des', title: null, time: null });
      } else {
        setFeatureData([...originalData]);
        setSorted({ mag: null, title: null, time: null });
      }
    } else if (condition === 'time') {
      if (!sorted.time) {
        data.sort((a, b) => a.properties.time - b.properties.time);
        setFeatureData([...data]);
        setSorted({ title: null, mag: null, time: 'asc' });
      } else if (sorted.time === 'asc') {
        data.sort((a, b) => b.properties.time - a.properties.time);
        setFeatureData([...data]);
        setSorted({ title: null, mag: null, time: 'des' });
      } else {
        setFeatureData([...originalData]);
        setSorted({ title: null, mag: null, time: null });
      }
    }
  };

  const handleArrowSymbol = (direction: string | null) => {
    if (!direction) return null;
    if (direction === 'asc') {
      return <span>&#8593;</span>;
    } else {
      return <span>&#8595;</span>;
    }
  };

  return (
    <div className="home">
      <h1>{pageTitle}</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortData('title')}>
              Title {handleArrowSymbol(sorted.title)}
            </th>
            <th onClick={() => sortData('mag')}>
              Magtitude {handleArrowSymbol(sorted.mag)}
            </th>
            <th onClick={() => sortData('time')}>
              Time {handleArrowSymbol(sorted.time)}
            </th>
          </tr>
        </thead>
        <tbody>
          {featureData.map((feature) => {
            const { place, mag, time } = feature.properties;
            return (
              <tr key={feature.id}>
                <td>
                  <Link to={`/detail/${feature.id}`}>{place}</Link>
                </td>
                <td>{mag}</td>
                <td>{formatDate(time)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
