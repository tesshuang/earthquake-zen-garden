import React from 'react';
import { Profile } from '../types';

interface ProfileProps {
  profile: Profile;
}

const Profile: React.FC<ProfileProps> = ({ profile }) => {
  const { firstName, lastName, avatarImage, phone, email, bio } = profile;
  return (
    <div>
      <h3>Profile</h3>
      <div className="profile">
        <img src={avatarImage} alt={`${firstName} ${lastName}`} />
        <div>
          <div className="info">
            <h4>First name</h4>
            <p>{firstName}</p>
          </div>
          <div className="info">
            <h4>Last name</h4>
            <p>{lastName}</p>
          </div>
          <div className="info">
            <h4>Phone</h4>
            <p>{phone}</p>
          </div>
          <div className="info">
            <h4>Email</h4>
            <p>{email}</p>
          </div>
          <div className="info">
            <h4>Bio</h4>
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
