import { useState, useEffect } from "react";

function Temperature() {
  const [temp, setTemp] = useState(30);

  useEffect(() => {
    console.log("🌡️ Temperature updated:", temp);
  }, [temp]); // ← run when temp changes

  return (
    <div>
      <p>Current temperature: {temp}°C</p>
      <button onClick={() => setTemp(temp + 1)}>Increase</button>
    </div>
  );
}
