import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Student from "./components/Student";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentDetails from "./pages/StudentDetails";

import students from "./data/students";
import "./App.css";

function Home() {
  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
  }

  return (
    <div className="portal-container">
      <header className="portal-header">
        <div>
          <h1>Student Portal</h1>
          <p>Manage and view student academic profiles</p>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="portal-welcome">
        <h2>Student Directory</h2>
        <p>Select a student to view their complete profile.</p>
      </div>

      <div className="portal-stats">
        <div className="stat-box">
          <h2>{students.length}</h2>
          <p>Total Students</p>
        </div>

        <div className="stat-box">
          <h2>{students.filter(s => s.status === "Active").length}</h2>
          <p>Active Students</p>
        </div>
      </div>

      <div className="portal-grid">
        {students.map(student => (
          <Student key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/:id"
          element={
            <ProtectedRoute>
              <StudentDetails />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;