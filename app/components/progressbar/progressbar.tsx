import React, { useState, useEffect } from 'react';

const ProgressBar = ({ percentage, color, delay }) => {
  const [fillerWidth, setFillerWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setFillerWidth(percentage);
    }, delay);
  }, [percentage, delay]);

  return (
    <div className="progressBar">
      <div className="filler" style={{ width: `${fillerWidth}%`, backgroundColor: color }}>
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressBar;