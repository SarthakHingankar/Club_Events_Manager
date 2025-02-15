import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { AuthProvider, useAuth } from "./context/AuthContext";
import TestToken from "./pages/TestToken";

// Move ProtectedRoute outside of App component
const ProtectedRoute = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <Dashboard />;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/*" element={<ProtectedRoute />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/test-token" element={<TestToken />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
