import React, { useState, useEffect } from 'react';

interface ProgressBarProps {
  percentage: number; // Specify the type of percentage
  color: string;     // Specify the type of color
  delay: number;     // Specify the type of delay
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, color, delay }) => {
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
