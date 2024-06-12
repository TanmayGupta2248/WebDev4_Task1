import React, { useState } from 'react';
import './App.css';
import { SketchPicker } from 'react-color';

function App() {
  const [isLight, setIsLight] = useState(true);
  const [bgColor, setBgColor] = useState('#ffffff');

  const toggleBackgroundColor = () => {
    setIsLight(!isLight);
  };

  const handleChangeComplete = (color) => {
    setBgColor(color.hex);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor, color: isLight ? 'black' : 'white' }}>
      <header className="App-header">
        <h1>Toggle Background Color</h1>
        <button onClick={toggleBackgroundColor}>Toggle Background</button>
        <SketchPicker color={bgColor} onChangeComplete={handleChangeComplete} />
      </header>
    </div>
  );
}

export default App;
