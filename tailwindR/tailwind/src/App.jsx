import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <p className="text-3xl font-bold underline">Hello,what are you doing!</p>
      <Thought para={"Thought 1"} />
      <Thought para={"Thought 2"} />
      <Thought />
    </>
  );
}

function Thought({ para = "A great thought" }) {
  return (
    <div>
      <p className="bg-red-50">{para}</p>
    </div>
  );
}

export default App;
