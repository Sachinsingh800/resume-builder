// CustomCursor.js
import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        setCursorPosition({ x: e.pageX, y: e.pageY });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = () => {
      setIsHovered(true);
    };

    const handleMouseOut = () => {
      setIsHovered(false);
    };

    document.querySelectorAll('a').forEach((a) => {
      a.addEventListener('mouseover', handleMouseOver);
      a.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      document.querySelectorAll('a').forEach((a) => {
        a.removeEventListener('mouseover', handleMouseOver);
        a.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  const cursorClasses = `cursor ${isHovered ? 'hover' : ''}`;

  return (
    <div
      className={cursorClasses}
      style={{
        top: `${cursorPosition.y}px`,
        left: `${cursorPosition.x}px`,
        transform: `scale(${isHovered ? 2 : 1})`,
      }}
    ></div>
  );
};

export default CustomCursor;
