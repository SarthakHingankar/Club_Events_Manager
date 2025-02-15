import React, { useState, useEffect } from "react";
import { auth } from "../../components/firebase";

function Clubs() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchClubsData = async () => {
    try {
      setLoading(true);
      const user = auth.currentUser;
      if (!user) {
        setError("User not authenticated");
        setLoading(false);
        return;
      }

      const token = await user.getIdToken();
      const response = await fetch("http://localhost:3000/clubs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setClubs(data);
      } else {
        setError(`Failed to fetch clubs: ${response.statusText}`);
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClubsData();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Banner section at the top */}
      <div className="bg-purple-100 bg-opacity-70 rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-3xl font-bold text-purple-800">Explore Clubs</h1>
        <p className="text-gray-700 mt-2">
          Discover and join clubs that match your interests
        </p>

        {/* Search or filter could go here */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search clubs..."
            className="w-full p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Main content area */}
      <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-6">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        ) : clubs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubs.map((club, index) => (
              <div
                key={index}
                className="club-item border border-gray-200 rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:border-purple-300"
              >
                <div className="flex items-start">
                  {/* Club image or icon placeholder */}
                  <div className="bg-purple-200 rounded-full p-3 mr-4">
                    <svg
                      className="w-8 h-8 text-purple-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                  </div>

                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold text-purple-900">
                      {club.name}
                    </h2>
                    <p className="text-gray-600 mt-1">{club.description}</p>

                    {/* Additional club details if available */}
                    {club.memberCount && (
                      <p className="text-sm text-gray-500 mt-2">
                        <span className="font-medium">{club.memberCount}</span>{" "}
                        members
                      </p>
                    )}

                    {/* Action button */}
                    <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-1 px-4 rounded-md text-sm transition-colors duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <svg
              className="w-16 h-16 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <p className="text-xl text-gray-600">No clubs available</p>
            <p className="text-gray-500 mt-2">
              Check back later or create a new club
            </p>
            <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-md transition-colors duration-300">
              Create Club
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Clubs;