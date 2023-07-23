import React from 'react';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="input-container">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email here"
        />
        <input
          type="text"
          name="roomcode"
          id="rooomcode"
          placeholder="Enter Room Code"
        />
        <button>Enter room</button>
      </div>
    </div>
  );
};

export default Homepage;
