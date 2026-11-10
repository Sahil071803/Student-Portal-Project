import { Link } from "react-router-dom";

function Student({ student }) {
  return (
    <Link
      to={`/student/${student.id}`}
      className="portal-card-link"
    >
      <div className="portal-card">
        <div className="portal-card-top">
          <img src={student.image} alt={student.name} />

          <span className="student-status">
            {student.status}
          </span>
        </div>

        <h2>{student.name}</h2>
        <p className="student-id">{student.id}</p>

        <div className="portal-info">
          <p><strong>Course:</strong> {student.course}</p>
          <p><strong>College:</strong> {student.college}</p>
          <p><strong>Academic Year:</strong> {student.academicYear}</p>
          <p><strong>Semester:</strong> {student.semester}</p>
        </div>

        <div className="portal-card-footer">
          <span>View Student Profile</span>
          <span>→</span>
        </div>
      </div>
    </Link>
  );
}

export default Student;