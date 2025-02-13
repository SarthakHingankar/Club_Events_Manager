import React from 'react'
import Navbar from '/src/components/Navbar';
import HeaderLanding from '/src/components/HeaderLanding';

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-violet-200 via-violet-200 to-violet-400">
      <Navbar /> <HeaderLanding />
    </div>
  );
}

export default Landing