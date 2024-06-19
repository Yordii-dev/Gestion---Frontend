import CourseComponent from "../components/CourseComponent";
import { Filter1Rounded } from "@mui/icons-material";
import RegisterCourseModalComponent from "../components/RegisterCourseModalComponent";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { GetCourses } from "../services/CoursesService";
import { CourseType } from "../types/CourseType";

function CoursesView() {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [courses, setCourses] = useState<CourseType[]>();

  const handlerClick = async (e: any) => {
    setModalShow(true);
  };

  useEffect(() => {
    (async () => {
      setCourses(await GetCourses());
    })();
  }, []);

  return (
    <>
      <div className="h-100 flex-grow-1 align-self-start mx-3 p-4 bg-white">
        <div className="d-flex align-items-center justify-content-between">
          <h4>Cursos</h4>
          <div>
            <button
              className="rounded text-white bg-blue-dark"
              onClick={handlerClick}
            >
              Registrar nuevo
            </button>
          </div>
        </div>
        {courses?.length == 0 && (
          <div className="mt-4">
            <p className="text-secondary text-center fst-italic">
              Aun no se han creado cursos.
            </p>
          </div>
        )}
        <div className="courses-list mt-3">
          {courses?.map((course: CourseType, i: number) => (
            <CourseComponent
              key={i}
              id_curso={course.id_curso}
              nombre={course.nombre}
              descripcion={course.descripcion}
              modalidad={course.modalidad}
              duracion={course.duracion}
              requisitos_previos={course.requisitos_previos}
            ></CourseComponent>
          ))}
        </div>
      </div>
      <RegisterCourseModalComponent
        show={modalShow}
        onHide={() => setModalShow(false)}
      ></RegisterCourseModalComponent>
    </>
  );
}

export default CoursesView;
