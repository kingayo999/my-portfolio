import React from 'react';
import './ScrollBackground.css';

const ScrollBackground = () => {
  return (
    <div className="scroll-bg">
      <div className="scroll-bg-gradient" />
      <div className="scroll-bg-grid" />
      <div className="scroll-orb-wrap scroll-orb-1">
        <div className="scroll-orb-inner" />
      </div>
      <div className="scroll-orb-wrap scroll-orb-2">
        <div className="scroll-orb-inner" />
      </div>
      <div className="scroll-orb-wrap scroll-orb-3">
        <div className="scroll-orb-inner" />
      </div>
      <div className="scroll-orb-wrap scroll-orb-4">
        <div className="scroll-orb-inner" />
      </div>
      <div className="scroll-bg-vignette" />
    </div>
  );
};

export default ScrollBackground;
