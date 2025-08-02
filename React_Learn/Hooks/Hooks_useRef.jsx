import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); // 🔍 Focus the input box
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enter your name" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
