import React from 'react';
import { Feature } from '../types';
import { formatDate } from '../utils';

interface DetailProps {
  feature: Feature;
}

const Detail: React.FC<DetailProps> = ({ feature }) => {
  const { title, place, mag, time, status, tsunami, type } = feature.properties;
  return (
    <div>
      <h3>{title}</h3>
      <table className="content">
        <thead>
          <tr>
            <th>Title</th>
            <th>Magnitude</th>
            <th>Time</th>
            <th>Status</th>
            <th>Tsunami</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{place}</td>
            <td>{mag}</td>
            <td>{formatDate(time)}</td>
            <td>{status}</td>
            <td>{tsunami}</td>
            <td>{type}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
