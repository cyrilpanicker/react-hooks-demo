import React, { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  return width;
};

const WindowWidth = () => {
  const width = useWindowWidth();
  return (
    <div>width of the widnow is {width}</div>
  );
}

export default WindowWidth;