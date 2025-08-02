import React from 'react';

// --- Welcome Component ---
function Welcome({ name = "Guest", message = "Welcome to our site!" }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>{message}</p>
    </div>
  );
}

// --- Main App Component ---
function App() {
  return (
    <div>
      <Welcome name="Ranjit" message="Have a great day!" />
      <Welcome /> {/* Will show default props */}
    </div>
  );
}

export default App;
