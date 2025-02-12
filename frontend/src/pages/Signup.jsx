import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "/src/components/firebase"; // Ensure this is properly imported and initialized
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log("auth: ", auth); // Check if auth is defined
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
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
              Create Account
            </h1>

            <form onSubmit={handleRegister} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all duration-200 text-gray-800 text-base outline-none"
                    type="text"
                    placeholder="First name"
                    onChange={(e) => setFname(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all duration-200 text-gray-800 text-base outline-none"
                    type="text"
                    placeholder="Last name"
                    onChange={(e) => setLname(e.target.value)}
                    required
                  />
                </div>
              </div>

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
                  placeholder="Create a password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                className="w-full bg-gradient-to-r from-sky-400 to-indigo-400 text-white font-semibold py-4 px-6 rounded-xl hover:from-sky-500 hover:to-indigo-500 transition-all duration-200 shadow-md hover:shadow-lg text-base"
                type="submit"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-sky-500 hover:text-sky-600 font-medium transition-colors duration-200"
                >
                  Log In
                </a>
              </p>
            </div>

            <div className="mt-8">
              <button className="w-full flex items-center justify-center gap-3 px-6 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200">
                <img
                  className="w-5 h-5"
                  src="/api/placeholder/20/20"
                  alt="Google"
                />
                <span className="text-gray-700 font-medium">
                  Continue with Google
                </span>
              </button>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>
                By signing up, you agree to our{" "}
                <a
                  href="#"
                  className="text-sky-500 hover:text-sky-600 transition-colors duration-200"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-sky-500 hover:text-sky-600 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
