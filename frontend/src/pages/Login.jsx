import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "/src/components/firebase";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import GoogleSignUp from "../components/GoogleSignUp";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User loggin in successfully");
      window.location.href = "/dashboard";
      toast.success("User Logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="flex font-sans items-center justify-center bg-gray-50 min-w-screen min-h-screen">
      <div className="w-full max-w-md p-6">
        <div className="bg-gradient-to-r from-sky-400 to-indigo-400 rounded-3xl">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
              Welcome Back
            </h1>

            <form
              action="#"
              method="post"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all duration-200 text-gray-800 text-base outline-none"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all duration-200 text-gray-800 text-base outline-none"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-sky-400 focus:ring-sky-400 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-sky-500 hover:text-sky-600 transition-colors duration-200"
                >
                  Forgot password?
                </a>
              </div>

              <button
                className="w-full bg-gradient-to-r from-sky-400 to-indigo-400 text-white font-semibold py-4 px-6 rounded-xl hover:from-sky-500 hover:to-indigo-500 transition-all duration-200 shadow-md hover:shadow-lg text-base cursor-pointer"
                type="submit"
              >
                Log In
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/sign-up"
                  className="text-sky-500 hover:text-sky-600 font-medium transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </p>
            </div>
            <GoogleSignUp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
