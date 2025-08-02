import { useState, useCallback } from 'react';

function useLogger(value) {
  return useCallback(() => {
    console.log("Logging value:", value);
  }, [value]);
}

function App() {
  const [input, setInput] = useState("");

  const logInput = useLogger(input);

  return (
    <>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something"
      />
      <button onClick={logInput}>Log</button>
    </>
  );
}
