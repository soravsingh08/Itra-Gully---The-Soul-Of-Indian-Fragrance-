import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        <h1 className="loader-logo">ITRA GULLY</h1>
        <div className="loader-line-container">
          <div className="loader-line"></div>
        </div>
        <p className="loader-subtitle">LIQUID ROYALTY Since 1500</p>
      </div>
    </div>
  );
};

export default Loader;