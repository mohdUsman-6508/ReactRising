import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("p@sWRD34ge");
  const [numberOfChar, setNumberOfChar] = useState(10);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  ///functions ko memorise karega (cahche memory) jitna ho sake
  //generate password
  const generate = useCallback(() => {
    let str = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) str += "0123456789";
    if (char) str += "!@#$%&*?/><+-";

    let s = "";
    for (let i = 0; i <= numberOfChar; i++) {
      let rand = Math.floor(Math.random() * str.length + 1);
      s += str.charAt(rand);
    }
    setPassword(s);
  }, [setPassword, number, char, numberOfChar]);

  useEffect(() => {
    generate();
  }, [setPassword, number, char, numberOfChar, generate]);

  return (
    <>
      <h3 className=" text-blue-600 text-center text-3xl mt-4">
        Password Generator
      </h3>
      <div className="flex items-center justify-center space-x-4 mt-10">
        <input
          type="text"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordRef}
        ></input>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-700 hover:shadow-md"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>

      <div className="flex items-center justify-center space-x-4 mt-10">
        <label className="text-lg font-bold">{numberOfChar}</label>
        <input
          type="range"
          className="w-40"
          value={numberOfChar}
          onChange={(e) => setNumberOfChar(e.target.value)}
        ></input>
        <input
          type="checkbox"
          className="form-checkbox"
          value={number}
          onChange={() => {
            setNumber((number) => !number);
          }}
        ></input>
        <label className="ml-2">Number</label>
        <input
          type="checkbox"
          className="form-checkbox"
          value={char}
          onChange={() => {
            setChar((char) => !char);
          }}
        ></input>
        <label className="ml-2">Character</label>
      </div>
    </>
  );
}

export default App;
