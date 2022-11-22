import "./App.css";
import LoginPage from "./pages/LoginPage";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
