import React, { useState, useEffect } from "react";
import { auth } from "../../components/firebase";


function Clubs() {
  const [clubs, setClubs] = useState([]);

  const fetchClubsData = async () => {
    try {
      const token = await auth.currentUser.getIdToken();
      const response = await fetch("http://localhost:3000/clubs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setClubs(data); // Save the clubs data to state
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchClubsData(); // Fetch clubs data when the component mounts
  }, []); // Empty dependency array to run this effect only once

  return (
    <div className="clubs-list">
      <h1 className="text-2xl">Clubs</h1>
      {clubs.length > 0 ? (
        clubs.map((club, index) => (
          <div key={index} className="club-item">
            <h2>{club.name}</h2>
            <p>{club.description}</p>
            {/* Add more club details if needed */}
          </div>
        ))
      ) : (
        <p>No clubs available</p>
      )}
    </div>
  );
}

export default Clubs;