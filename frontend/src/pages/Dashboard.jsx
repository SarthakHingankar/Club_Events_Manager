import React, { useState, useEffect } from "react";
import Clubs from "./dashboardComponents/clubs";
import { auth } from "../components/firebase"; // Assuming auth is already configured

function Dashboard() {
  const [activeSection, setActiveSection] = useState("home");

  // Function to handle the GET request
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the current user and token
        const user = auth.currentUser;
        if (user) {
          const token = await user.getIdToken(); // Fetch the Firebase token

          // Make the API request
          const response = await fetch("http://localhost:3000/", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          const data = await response.json();
          console.log("Fetched Data:", data); // Do something with the fetched data
        } else {
          console.error("No user is signed in");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function when the dashboard loads
  }, []); // Empty dependency array ensures this runs only once on component mount

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // You can add navigation to login page here if needed
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case "clubs":
        return <Clubs />; // Render the Clubs component dynamically
      default:
        return <p>Welcome to the dashboard! Choose a section to explore.</p>;
    }
  };

  return (
    <div className="bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
      {/* Mobile sidebar toggle */}
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <div className="flex">
        {/* Sidebar */}
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 flex flex-col">
            <ul className="space-y-2 font-medium flex-grow">
              <li>
                <button
                  onClick={() => setActiveSection("home")}
                  className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {/* Home icon */}
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  <span className="ms-3">Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection("clubs")}
                  className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {/* Clubs/Users icon */}
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                  <span className="ms-3">Clubs</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection("events")}
                  className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {/* Events icon */}
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ms-3">Events</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection("calender")}
                  className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {/* Calendar icon */}
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ms-3">Calendar</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection("chat")}
                  className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {/* Chat icon */}
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
                  </svg>
                  <span className="ms-3">Chat</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection("profile")}
                  className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {/* Profile icon */}
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ms-3">Profile</span>
                </button>
              </li>
            </ul>

            {/* Logout button at the bottom */}
            <div className="mt-auto pb-4">
              <button
                onClick={handleLogout}
                className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {/* Logout icon */}
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm7 4a1 1 0 11-2 0 1 1 0 012 0z"
                    clipRule="evenodd"
                  ></path>
                  <path d="M5 12.5a.5.5 0 01.5-.5h7a.5.5 0 010 1H5.5a.5.5 0 01-.5-.5z"></path>
                  <path d="M8 7a1 1 0 00-1 1v4a1 1 0 002 0V8a1 1 0 00-1-1z"></path>
                </svg>
                <span className="ms-3">Logout</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="p-4 md:ml-64 w-full min-h-screen">
          {/* Top section */}
          <div className="p-4 bg-white bg-opacity-50 rounded-lg shadow mb-6">
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              Dashboard Overview
            </h2>
            {/* Add your content for the top section here */}
          </div>

          {/* Main content area */}
          <div className="p-6 bg-white bg-opacity-50 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            </h2>
            <div className="content-container">{renderSection()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
