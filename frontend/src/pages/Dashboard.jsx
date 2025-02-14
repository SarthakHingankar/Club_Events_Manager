import React from 'react'

function Dashboard() {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4">
      <div className="row-span-6">1</div>
      <div className="col-span-4 row-span-2">2</div>
      <div className="col-span-4 row-span-4 col-start-2 row-start-3">3</div>
    </div>
  );
}

export default Dashboard