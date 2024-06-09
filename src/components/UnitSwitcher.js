import React from 'react';
import './styles.css';

const UnitSwitcher = ({ unit, handleUnitChange }) => {
  return (
    <div className="unit-switch">
      <button className={unit === 'metric' ? 'active' : ''} onClick={() => handleUnitChange('metric')}>Metric</button>
      <button className={unit === 'imperial' ? 'active' : ''} onClick={() => handleUnitChange('imperial')}>Imperial</button>
    </div>
  );
};

export default UnitSwitcher;
