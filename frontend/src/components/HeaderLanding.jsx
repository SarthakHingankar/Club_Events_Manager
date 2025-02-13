import React from "react";
import { useNavigate } from "react-router-dom";

function HeaderLanding() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center">
        <div className="text-6xl py-39 px-10 font-mono">
          Manage College Clubs <br /> and Events <br />
          at one place
        </div>

        <img
          src="/frontend/src/assets/ill1.png"
          alt="illustration1"
          className="h-85 px-20 translate-y-15"
        />
      </div>
      <button
        type="button"
        onClick={() => navigate("/sign-up")}
        className="text-black bg-sky-100 hover:bg-sky-200 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-2xl px-5 py-2.5 text-center me-2 mb-2 dark:bg-sky-100 dark:hover:bg-sky-200 dark:focus:ring-sky-500 font-bold transform -translate-y-27 translate-x-65"
      >
        Sign Up
      </button>
    </div>
  );
}

export default HeaderLanding;
