import { useNavigate } from "react-router-dom";
import { CourseType } from "../types/CourseType";

function CourseComponent({
  id_curso,
  nombre,
  descripcion,
  modalidad,
  duracion,
  requisitos_previos,
}: CourseType) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("course_details", {
      state: {
        course: {
          id_curso,
          nombre,
          descripcion,
          modalidad,
          duracion,
          requisitos_previos,
        },
      },
    });
  };
  return (
    <div
      className="course card mb-3"
      style={{ maxWidth: "18rem" }}
      onClick={handleClick}
    >
      <div className="card-body">
        <h5 className="card-title p-3 text-center">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-text">
          <strong>Modalidad:</strong>{" "}
          <span className="text-primary">{modalidad}</span>
        </p>
        <p className="card-text">
          <strong>Duracion:</strong> {duracion} horas
        </p>
        <p className="card-text">
          <strong>Requisitos previos:</strong> {requisitos_previos}
        </p>
      </div>
    </div>
  );
}

export default CourseComponent;
