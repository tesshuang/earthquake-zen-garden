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
      <div className="two-column">
        <h4>Title</h4>
        <p>{place}</p>
      </div>
      <div className="two-column">
        <h4>Magnitude</h4>
        <p>{mag}</p>
      </div>
      <div className="two-column">
        <h4>Time</h4>
        <p>{formatDate(time)}</p>
      </div>
      <div className="two-column">
        <h4>Status</h4>
        <p>{status}</p>
      </div>
      <div className="two-column">
        <h4>Tsunami</h4>
        <p>{tsunami}</p>
      </div>
      <div className="two-column">
        <h4>Type</h4>
        <p>{type}</p>
      </div>
    </div>
  );
};

export default Detail;
