import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';

function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      <div className="w-3/4 p-4">
        {/* Conditionally render DashProfile based on the tab */}
        {tab === 'profile' && <DashProfile />}
      </div>
    </div>
  );
}

export default Dashboard;
