import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import icons from the assets/icons folder
import menuIcon from '../assets/icons/menu.png';
import homeIcon from '../assets/icons/home.png';
import userIcon from '../assets/icons/user.png';
import scoreIcon from '../assets/icons/score.png';
import statsIcon from '../assets/icons/stats.png';
import leaderboardIcon from '../assets/icons/leaderboard.png';

const items = [
  { title: 'Home', url: '/', icon: homeIcon },
  { title: 'Leaderboard', url: '/leaderboard', icon: leaderboardIcon },
  { title: 'Login', url: '/login', icon: userIcon },
  { title: 'Keep Score', url: '/scorecard', icon: scoreIcon },
  { title: 'Stats', url: '/stats', icon: statsIcon },
];

const Sidebar = () => {
  // State to manage the sidebar's visibility (collapsed or expanded)
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Toggle function to collapse/expand the sidebar
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      style={{
        width: isCollapsed ? '60px' : '250px', // Adjust width based on collapsed state
        background: '#002E5D',
        padding: '20px',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        transition: 'width 0.3s ease', // Smooth transition for collapsing/expanding
        display: 'flex',
        flexDirection: 'column',
        alignItems: isCollapsed ? 'center' : 'flex-start', // Align items in the center when collapsed, left-align when expanded
      }}
    >
      {/* Menu Button */}
      <button
        onClick={toggleSidebar}
        style={{
          marginBottom: '10px',
          padding: '10px',
          background: '#333',
          color: '#ffff',
          border: 'none',
          cursor: 'pointer',
          width: '100%',
        }}
      >
        <img
          src={menuIcon}
          alt="Menu"
          style={{ width: '24px', height: '24px' }} // Size the icon appropriately
        />
      </button>

      {/* Sidebar Links */}
      <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
        {items.map((item) => (
          <li
            key={item.title}
            style={{
              marginBottom: '15px',
              display: 'flex',
              justifyContent: isCollapsed ? 'center' : 'flex-start', // Left-align when expanded, center when collapsed
              alignItems: 'center', // Vertically center icons and text
              width: '100%',
            }}
          >
            <Link
              to={item.url}
              style={{
                textDecoration: 'none',
                color: '#ffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: isCollapsed ? 'center' : 'flex-start', // Center when collapsed, left-align when expanded
                width: '100%', // Full width when collapsed
              }}
            >
              <img
                src={item.icon}
                alt={item.title}
                style={{
                  width: '24px',
                  height: '24px',
                  marginRight: isCollapsed ? '0' : '10px', // Adjust spacing when collapsed
                }}
              />
              {!isCollapsed && item.title} {/* Show title only when sidebar is expanded */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
