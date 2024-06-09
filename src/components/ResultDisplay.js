import React from 'react';
import './styles.css';

const ResultDisplay = ({ bmr }) => {
  return (
    bmr !== null && (
      <div>
        <h2>Your BMR is: {bmr.toFixed(2)} calories/day</h2>
      </div>
    )
  );
};

export default ResultDisplay;
