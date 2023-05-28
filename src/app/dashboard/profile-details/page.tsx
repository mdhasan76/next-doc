import React from 'react';
import AmniDetails from './amniDetails';
import ProfileCard from './ProfileCard';

const page = () => {
    return (
        <div>
          <p>profile details  </p>
          <div>
            <p>This is Profile card</p>
            <ProfileCard/>
          </div>
          <div>
            <AmniDetails/>
          </div>
        </div>
    );
};

export default page;