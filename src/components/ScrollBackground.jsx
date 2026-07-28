import React from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import './ScrollBackground.css';

const ScrollBackground = () => {
  const { scrollY } = useScroll();

  const blob1Y = useTransform(scrollY, [0, 2000], [0, -200]);
  const blob2Y = useTransform(scrollY, [0, 2000], [0, 250]);
  const blob1X = useTransform(scrollY, [0, 2000], [0, -120]);
  const blob2X = useTransform(scrollY, [0, 2000], [0, 140]);
  const blob3Y = useTransform(scrollY, [0, 2000], [0, -180]);
  const blob3X = useTransform(scrollY, [0, 2000], [0, 100]);
  const blob3Rotate = useTransform(scrollY, [0, 2000], [0, 80]);
  const gridY = useTransform(scrollY, [0, 2000], [0, -60]);

  return (
    <div className="scroll-bg">
      <div className="scroll-bg-gradient" />

      <Motion.div className="scroll-bg-grid" style={{ y: gridY }} />

      <Motion.div className="scroll-orb-wrap scroll-orb-1" style={{ y: blob1Y, x: blob1X }}>
        <div className="scroll-orb-inner" />
      </Motion.div>

      <Motion.div className="scroll-orb-wrap scroll-orb-2" style={{ y: blob2Y, x: blob2X }}>
        <div className="scroll-orb-inner" />
      </Motion.div>

      <Motion.div className="scroll-orb-wrap scroll-orb-3" style={{ y: blob3Y, x: blob3X, rotate: blob3Rotate }}>
        <div className="scroll-orb-inner" />
      </Motion.div>

      <Motion.div className="scroll-orb-wrap scroll-orb-4">
        <div className="scroll-orb-inner" />
      </Motion.div>

      <div className="scroll-bg-vignette" />
    </div>
  );
};

export default ScrollBackground;
