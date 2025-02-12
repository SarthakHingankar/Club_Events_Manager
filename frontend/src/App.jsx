import { useState } from "react";
import "./index.css";
import Landing from "./pages/landing";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer />
      <Signup />
    </>
  );
}

export default App;
