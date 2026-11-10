import { useParams, Link } from "react-router-dom";
import students from "../data/students";

function StudentDetails() {
  const { id } = useParams();

  const student = students.find((item) => item.id === id);

  if (!student) {
    return (
      <div className="details-container">
        <h2>Student Not Found</h2>
        <Link to="/">Go Back</Link>
      </div>
    );
  }

  const totalMarks = student.marks.reduce(
    (sum, subject) => sum + subject.marks,
    0
  );

  const maximumMarks = student.marks.reduce(
    (sum, subject) => sum + subject.total,
    0
  );

  const percentage = ((totalMarks / maximumMarks) * 100).toFixed(2);

  return (
    <div className="details-container">
      <Link to="/" className="back-btn">← Back to Students</Link>

      <div className="profile-header">
        <img src={student.image} alt={student.name} />

        <div>
          <h1>{student.name}</h1>
          <p>{student.id}</p>
          <span className="status">{student.status}</span>
        </div>
      </div>

      <section className="details-section">
        <h2>Personal Information</h2>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
        <p><strong>Student ID:</strong> {student.id}</p>
      </section>

      <section className="details-section">
        <h2>College Information</h2>
        <p><strong>College:</strong> {student.college}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Academic Year:</strong> {student.academicYear}</p>
        <p><strong>Semester:</strong> {student.semester}</p>
      </section>

      <section className="details-section">
        <h2>Registration Details</h2>
        <p><strong>Registration Date:</strong> {student.registrationDate}</p>
        <p><strong>Expiry Date:</strong> {student.expiryDate}</p>
      </section>

      <section className="details-section">
        <h2>Academic Performance</h2>

        <div className="marks-summary">
          <div>
            <h3>{totalMarks}/{maximumMarks}</h3>
            <p>Total Marks</p>
          </div>

          <div>
            <h3>{percentage}%</h3>
            <p>Percentage</p>
          </div>
        </div>

        <table className="marks-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Obtained Marks</th>
              <th>Total Marks</th>
            </tr>
          </thead>

          <tbody>
            {student.marks.map((subject, index) => (
              <tr key={index}>
                <td>{subject.subject}</td>
                <td>{subject.marks}</td>
                <td>{subject.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="details-section">
        <h2>Achievements & Certificates</h2>

        <ul className="achievement-list">
          {student.achievements.map((achievement, index) => (
            <li key={index}>🏆 {achievement}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default StudentDetails;