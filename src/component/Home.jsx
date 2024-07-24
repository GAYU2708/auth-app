import React from 'react';

const Home = ({ details }) => {
  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {details.name}!</h1>
  
    </div>
  );
};

export default Home;
