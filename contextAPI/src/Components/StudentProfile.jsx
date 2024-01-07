import { useContext } from "react";
import StudentContext from "../Context/StudentContext";

function StudentProfile() {
  const { student, principal } = useContext(StudentContext);
  if (!student) return <div>Principal {principal} </div>;
  return (
    <div>
      <h2>Welcome! {student.studentName}</h2>
      <h3>Your alloted id is: {student.studentId}</h3>
      <h3>Successfully enrolled in {student.course}.</h3>
      <h1>{principal}</h1>
    </div>
  );
}
export default StudentProfile;
