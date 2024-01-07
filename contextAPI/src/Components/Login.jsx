import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    setUsername("");
    setPassword("");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // important step
  const { setUser } = useContext(UserContext);

  return (
    <div
      style={{ backgroundColor: "gray", padding: "20px", borderRadius: "20px" }}
    >
      <h2>Login</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          borderRadius: "20px",
        }}
      >
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            borderRadius: "5px",
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            borderRadius: "5px",
          }}
        />
      </div>
      <button
        onClick={handleSubmit}
        style={{
          borderRadius: "10px",
          marginTop: "8px",
          backgroundColor: "purple",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
