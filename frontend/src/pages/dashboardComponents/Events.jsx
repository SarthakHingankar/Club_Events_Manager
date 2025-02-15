import React, { useState, useEffect } from "react";
import { auth } from "../../components/firebase";

function Events() {
  const [Events, setEvents] = useState([]);

  const fetchEventsData = async () => {
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
        setEvents(data); // Save the clubs data to state
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchEventsData(); // Fetch clubs data when the component mounts
  }, []); // Empty dependency array to run this effect only once

  return (
    <div className="">
      <h1>EVENTSSS</h1>
    </div>
  );
}

export default Events;