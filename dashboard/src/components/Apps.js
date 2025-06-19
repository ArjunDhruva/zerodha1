import React from 'react';
import './App.css';
import playstoreLogo from './playstore.png'; // Download a PNG icon and place it here.
import Logo from './logo.png';

function DownloadApp() {
  return (
    <div className="download-app-banner">
      <div className="download-app-content">
        <h2>Get the Kite App</h2>
        <p>Trade seamlessly on the go. Download the official Zerodha Kite app from the Play Store now.<img src={Logo} alt="Zerodha Logo" className="logo-img" /></p>
        <a
          // href="https://play.google.com/store/apps/details?id=com.zerodhatech.kite3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={playstoreLogo} alt="Download on Play Store" className="playstore-img" />
        </a>
      </div>
    </div>
  );
}

export default DownloadApp;
