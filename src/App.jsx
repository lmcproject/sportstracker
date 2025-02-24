import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // ✅ Import existing Navbar
import Footer from "./components/Footer"; // ✅ Import existing Footer
import Home from "./pages/Home"; // ✅ Import existing Home page
import Players from "./pages/Players";
import Teams from "./pages/Teams";
import Matches from "./pages/Matches";
import Analytics from "./pages/Analytics";
import PlayerDetails from "./pages/PlayerDetails";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        <Navbar /> {/* ✅ Navbar is now always visible */}
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} /> {/* ✅ Use existing Home page */}
            <Route path="/players" element={<Players />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/players/:playerName" element={<PlayerDetails />} /> {/* ✅ Dynamic Player Details */}
          </Routes>
        </div>

        <Footer /> {/* ✅ Footer is now always visible */}
      </div>
    </Router>
  );
}

export default App;
