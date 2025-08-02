import React, { useState } from "react";

function WaterTracker() {
  const [glasses, setGlasses] = useState(0); // 0 is the initial state

  const drinkWater = () => {
    setGlasses(glasses + 1); // updates the state
  };

  return (
    <div>
      <h2>Glasses of Water Drunk: {glasses}</h2>
      <button onClick={drinkWater}>Drink Water</button>
    </div>
  );
}
