import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";

import Attendance from "./pages/attendance";
import Dashboard from "./pages/dashboard";
import Employees from "./pages/employees";
import Profile from "./pages/profile";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />

        <div className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
