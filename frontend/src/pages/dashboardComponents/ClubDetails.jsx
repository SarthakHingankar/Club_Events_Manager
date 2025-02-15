import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ClubDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const club = location.state?.club;

  if (!club) {
    return (
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative">
        <strong className="font-bold">Notice: </strong>
        <span className="block sm:inline">No club data available.</span>
        <button
          onClick={() => navigate("/dashboard/clubs")}
          className="mt-4 text-yellow-700 hover:text-yellow-800 underline"
        >
          Return to Clubs
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate("/dashboard/clubs")}
          className="text-purple-600 hover:text-purple-700 flex items-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Clubs
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-purple-900 mb-4">{club.name}</h1>
        <p className="text-gray-600 mb-6">{club.description}</p>

        <div className="space-y-4">
          <div className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span>
              Created at: {new Date(club.created_at).toLocaleDateString()}
            </span>
          </div>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition-colors duration-200">
            Join Club
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClubDetails;
