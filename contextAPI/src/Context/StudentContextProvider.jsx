import React, { useState } from "react";
import StudentContext from "./StudentContext";

const StudentContextProvider = ({ children }) => {
  const [student, setStudent] = useState("");
  const principal = "Osman";
  return (
    <StudentContext.Provider value={{ student, setStudent, principal }}>
      {children}
    </StudentContext.Provider>
  );
};
export default StudentContextProvider;
