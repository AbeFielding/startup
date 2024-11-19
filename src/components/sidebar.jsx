import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';  // Importing the sidebar CSS

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
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Menu Button */}
      <button
        onClick={toggleSidebar}
        style={{
          marginBottom: '10px',
          padding: '10px',
          background: '#fff',
          color: '#333',
          border: '2px solid #333',
          cursor: 'pointer',
          width: '100%',
          borderRadius: '5px',
        }}
      >
        <img
          src={menuIcon}
          alt="Menu"
          style={{ width: '24px', height: '24px' }}
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
              justifyContent: isCollapsed ? 'center' : 'flex-start',
              alignItems: 'center',
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
                justifyContent: isCollapsed ? 'center' : 'flex-start',
                width: '100%',
              }}
            >
              <img
                src={item.icon}
                alt={item.title}
                style={{
                  width: '24px',
                  height: '24px',
                  marginRight: isCollapsed ? '0' : '10px',
                }}
              />
              {!isCollapsed && item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
