import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get the clubId from the URL
import { auth } from "../../components/firebase";

function ClubDetails() {
  const { clubId } = useParams(); // Extract clubId from the URL
  const [clubDetails, setClubDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchClubDetails = async () => {
    try {
      setLoading(true);
      const user = auth.currentUser;
      if (!user) {
        setError("User not authenticated.");
        setLoading(false);
        return;
      }

      const token = await user.getIdToken();
      const response = await fetch(`http://localhost:3000/clubs/${clubId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setClubDetails(data);
      } else {
        setError(`Failed to fetch club details: ${response.statusText}`);
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClubDetails();
  }, [clubId]); // Fetch club details whenever clubId changes

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      ) : clubDetails ? (
        <>
          <h2 className="text-3xl font-bold text-purple-800">
            {clubDetails.name}
          </h2>
          <p className="text-gray-700 mt-4">{clubDetails.description}</p>
          <p className="text-sm text-gray-500 mt-2">
            Members: {clubDetails.memberCount}
          </p>
          {/* Additional details can be added here */}
        </>
      ) : (
        <p>No club details found.</p>
      )}
    </div>
  );
}

export default ClubDetails;
