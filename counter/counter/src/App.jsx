import { useState } from "react";

import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const up = () => {
    if (score >= 20) return;
    setScore(score + 1);
  };
  const down = () => {
    if (score <= 0) return;
    setScore(score - 1);
  };

  return (
    <>
      <h2>SCORE BOARD (0 T0 20) </h2>
      <h3>SCORE: {score}</h3>
      <button onClick={up}>score⬆️</button>
      <br />
      <button onClick={down}>score⬇️</button>
    </>
  );
}

export default App;
