import { useState } from "react";
import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import StudentContextProvider from "./Context/StudentContextProvider";
import StudentDetails from "./Components/StudentDetails";
import StudentProfile from "./Components/StudentProfile";

function App() {
  return (
    <>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>

      <StudentContextProvider>
        <StudentDetails />
        <StudentProfile />
      </StudentContextProvider>
    </>
  );
}

export default App;
