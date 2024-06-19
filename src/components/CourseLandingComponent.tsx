import { Link, useNavigate } from "react-router-dom";
import { CourseType } from "../types/CourseType";
import { Button } from "react-bootstrap";

function CourseLandingComponent({
  id_curso,
  nombre,
  descripcion,
  modalidad,
  duracion,
  requisitos_previos,
}: CourseType) {
  const navigate = useNavigate();

  return (
    <div
      className="course card mb-3 border-3"
      style={{ maxWidth: "18rem", borderColor: "#00CCB6" }}
    >
      <div className="card-body">
        <h5 className="card-title p-3 text-center">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-text">
          <strong>Modalidad:</strong>{" "}
          <span className="text-primary">{modalidad}</span>
        </p>
        <p className="card-text">
          <strong>Duracion:</strong> {duracion}
        </p>
        <p className="card-text">
          <strong>Requisitos previos:</strong> {requisitos_previos}
        </p>
        <br />
        <div className="text-center">
          <Link to={"/register"}>
            <Button variant="warning">Matricularse al curso</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseLandingComponent;
