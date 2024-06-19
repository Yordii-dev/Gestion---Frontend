import { useContext, useEffect, useState } from "react";
import SidebarComponent from "../components/SidebarComponent";
import { Outlet, useNavigate } from "react-router";
import { MyContext } from "../context/Context";
import { TopMenuComponent } from "../components/TopMenuComponent";
import CourseComponent from "../components/CourseComponent";
import { CourseType } from "../types/CourseType";
import { GetCourses } from "../services/CoursesService";

function Landing3View() {
  const [courses, setCourses] = useState<any>();
  useEffect(() => {
    (async () => {
      setCourses(await GetCourses());
    })();
  }, []);
  return (
    <div className="vh-100 bg-image text-white">
      <TopMenuComponent></TopMenuComponent>

      <br />
      <div className="container">
        <h4>Selecciona tus cursos</h4>
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
  );
}

export default Landing3View;
