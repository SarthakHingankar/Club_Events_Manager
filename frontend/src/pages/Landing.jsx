import React from 'react'
import Navbar from '/src/components/Navbar';
import HeaderLanding from '/src/components/HeaderLanding';

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-pink-200 via-purple-400 to-indigo-600">
      <Navbar />
      <HeaderLanding />
    </div>
  );
}

export default Landing