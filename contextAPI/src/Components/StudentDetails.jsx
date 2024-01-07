import { useContext, useState } from "react";
import StudentContext from "../Context/StudentContext";

export default function StudentDetails() {
  const handleSubmit = (e) => {
    e.preventDefault();
    setStudent({ studentId, studentName, course }); ///here we are sending values through context api
    setCourse("");
    setStudentName("");
    setStudentId("");
  };

  const [studentId, setStudentId] = useState(" ");
  const [studentName, setStudentName] = useState(" ");
  const [course, setCourse] = useState(" ");

  const { setStudent } = useContext(StudentContext);

  return (
    <div
      style={{ backgroundColor: "gray", padding: "20px", borderRadius: "20px" }}
    >
      <h3>Student Details</h3>
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
          placeholder="Id"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          style={{
            borderRadius: "5px",
          }}
        />
        <input
          type="text"
          placeholder="Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          style={{
            borderRadius: "5px",
          }}
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          style={{
            borderRadius: "5px",
          }}
        />
      </div>

      <button
        style={{
          borderRadius: "10px",
          marginTop: "8px",
          backgroundColor: "purple",
        }}
        onClick={handleSubmit}
      >
        Enroll
      </button>
    </div>
  );
}
