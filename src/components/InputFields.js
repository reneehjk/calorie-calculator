import React from 'react';
import './styles.css';

const InputFields = ({ unit, weight, height, age, gender, handleWeightChange, handleHeightChange, handleAgeChange, handleGenderChange }) => {
  return (
    <>
      <div>
        <label>
          Weight ({unit === 'metric' ? 'kg' : 'lbs'}):
          <input type="number" value={weight} onChange={handleWeightChange} />
        </label>
      </div>
      <div>
        <label>
          Height ({unit === 'metric' ? 'cm' : 'in'}):
          <input type="number" value={height} onChange={handleHeightChange} />
        </label>
      </div>
      <div>
        <label>
          Age (years):
          <input type="number" value={age} onChange={handleAgeChange} />
        </label>
      </div>
      <div>
        <label>
          Biological Sex:
          <select value={gender} onChange={handleGenderChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </div>
    </>
  );
};

export default InputFields;
