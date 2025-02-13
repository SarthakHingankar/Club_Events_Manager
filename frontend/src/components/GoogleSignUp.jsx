import React from "react";
import Google from "../assets/Google.png";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";

function GoogleSignUp() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        window.location.href = "/dashboard";
      }
    });
  }
  return (
    <div className="mt-8">
      <button
        className="w-full flex items-center justify-center gap-3 px-6 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200 cursor-pointer"
        onClick={googleLogin}
      >
        <img className="w-8 h-8" src={Google} alt="Google" />
        <span className="text-gray-700 font-medium">Continue with Google</span>
      </button>
    </div>
  );
}

export default GoogleSignUp;
