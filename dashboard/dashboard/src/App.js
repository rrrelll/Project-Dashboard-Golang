import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import MediaFollowers from './components/MediaFollowers';
import GrafikPenjualan from './components/GrafikPenjualan';
import Settings from './components/Settings';

function App() {
  const [salesData, setSalesData] = useState([]);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/media-followers" element={<MediaFollowers />} />
          <Route path="/grafik-penjualan" element={<GrafikPenjualan salesData={salesData} />} />
          <Route path="/settings" element={<Settings salesData={salesData} setSalesData={setSalesData} />} />
          <Route path="/" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
