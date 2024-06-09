import React, { useState } from 'react';
import Header from './Header';
import UnitSwitcher from './UnitSwitcher';
import InputFields from './InputFields';
import ResultDisplay from './ResultDisplay';
import './styles.css'; // Updated import statement

const CalorieCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [bmr, setBmr] = useState(null);
  const [unit, setUnit] = useState('metric');

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleUnitChange = (newUnit) => {
    if (unit !== newUnit) {
      if (newUnit === 'metric') {
        setWeight((prevWeight) => (prevWeight ? (prevWeight * 0.453592).toFixed(2) : ''));
        setHeight((prevHeight) => (prevHeight ? (prevHeight * 2.54).toFixed(2) : ''));
      } else {
        setWeight((prevWeight) => (prevWeight ? (prevWeight / 0.453592).toFixed(2) : ''));
        setHeight((prevHeight) => (prevHeight ? (prevHeight / 2.54).toFixed(2) : ''));
      }
    }
    setUnit(newUnit);
  };

  const calculateBmr = () => {
    let weightInKg = unit === 'imperial' ? weight * 0.453592 : weight;
    let heightInCm = unit === 'imperial' ? height * 2.54 : height;

    let bmrValue;
    if (gender === 'male') {
      bmrValue = 88.362 + (13.397 * weightInKg) + (4.799 * heightInCm) - (5.677 * age);
    } else {
      bmrValue = 447.593 + (9.247 * weightInKg) + (3.098 * heightInCm) - (4.33 * age);
    }
    setBmr(Math.round(bmrValue));
  };

  const calculateCalories = (multiplier) => {
    if (bmr) {
      return Math.round(bmr * multiplier);
    }
    return '';
  };

  return (
    <div className="calculator-container">
      <Header />
      <div className="calculator-box">
        <UnitSwitcher unit={unit} handleUnitChange={handleUnitChange} />
        <InputFields
          unit={unit}
          weight={weight}
          height={height}
          age={age}
          gender={gender}
          handleWeightChange={handleWeightChange}
          handleHeightChange={handleHeightChange}
          handleAgeChange={handleAgeChange}
          handleGenderChange={handleGenderChange}
        />
        <div>
          <button onClick={calculateBmr}>Calculate BMR</button>
        </div>
        <ResultDisplay bmr={bmr} />
      </div>
      <div className="activity-table-container">
        <div>
          <h2>BMR Based on Activity Level</h2>
          <table className="activity-table">
            <thead>
              <tr>
                <th>Activity Level</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>little to no exercise (less than once per week)</td>
                <td>{calculateCalories(1.2)}</td>
              </tr>
              <tr>
                <td>light exercise (1-3 times per week)</td>
                <td>{calculateCalories(1.375)}</td>
              </tr>
              <tr>
                <td>moderate exercise (3-5 times per week)</td>
                <td>{calculateCalories(1.55)}</td>
              </tr>
              <tr>
                <td>heavy physical exercise (5-6 times per week)</td>
                <td>{calculateCalories(1.725)}</td>
              </tr>
              <tr>
                <td>heavy physical exercise (6-7 times per week)</td>
                <td>{calculateCalories(1.9)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CalorieCalculator;
