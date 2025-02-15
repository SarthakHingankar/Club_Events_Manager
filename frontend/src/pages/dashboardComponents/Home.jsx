import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="bg-purple-100 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-purple-800">
          Welcome to Kaizen
        </h1>
        <p className="text-gray-600">Your hub for club activities and events</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Clubs Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <svg
              className="w-8 h-8 text-purple-600 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h2 className="text-xl font-semibold text-purple-900">Clubs</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Join and participate in various clubs that match your interests.
          </p>
          <button
            onClick={() => navigate("/dashboard/clubs")}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Browse Clubs →
          </button>
        </div>

        {/* Events Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <svg
              className="w-8 h-8 text-purple-600 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <h2 className="text-xl font-semibold text-purple-900">Events</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Discover upcoming events and activities organized by clubs.
          </p>
          <button
            onClick={() => navigate("/dashboard/events")}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            View Events →
          </button>
        </div>

        {/* Calendar Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <svg
              className="w-8 h-8 text-purple-600 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 0H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z M16 2v4 M8 2v4 M3 10h18"
              />
            </svg>
            <h2 className="text-xl font-semibold text-purple-900">Calendar</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Keep track of all your club activities and events in one place.
          </p>
          <button
            onClick={() => navigate("/dashboard/calendar")}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Open Calendar →
          </button>
        </div>

        {/* Chat Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <svg
              className="w-8 h-8 text-purple-600 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <h2 className="text-xl font-semibold text-purple-900">Chat</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Connect and communicate with other club members.
          </p>
          <button
            onClick={() => navigate("/dashboard/chat")}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Start Chatting →
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <svg
              className="w-8 h-8 text-purple-600 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <h2 className="text-xl font-semibold text-purple-900">Profile</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Manage your profile and club memberships.
          </p>
          <button
            onClick={() => navigate("/dashboard/profile")}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            View Profile →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
