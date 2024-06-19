import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { TopMenuComponent } from "../components/TopMenuComponent";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetCourses } from "../services/CoursesService";
import { CourseType } from "../types/CourseType";
import CourseComponent from "../components/CourseComponent";
import CourseLandingComponent from "../components/CourseLandingComponent";
/* En tu archivo CSS */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "../components/SliderComponent";

function LandingView() {
  const [courses, setCourses] = useState<CourseType[]>();
  const [modalShow, setModalShow] = useState(false);
  const handlerClick = async (e: any) => {
    setModalShow(true);
  };

  useEffect(() => {
    (async () => {
      setCourses(await GetCourses());
    })();
  }, []);

  const handleChange = (e: any) => {
    // const { name, value } = e.target;
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
  };

  const loginHandler = async (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="vh-100 text-white bg-image">
      <TopMenuComponent></TopMenuComponent>
      <br />
      <div>
        <div className="mx-5">
          <div className="d-flex justify-content-between align-items-center">
            <div className="w-50 mx-2 p-2 rounded bg-blur">
              <h1 className="fw-bold">INSTITUTO NAME</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                magnam eius blanditiis consectetur provident eveniet saepe neque
                tenetur quod. Laudantium, quae minima? Consectetur quam a
                tempora enim quibusdam vel adipisci.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              </p>
              <p className="" style={{ color: "#00CCB6" }}>
                Matriculate hoy
              </p>
            </div>
            <div className="w-50  ">
              <SliderComponent></SliderComponent>
            </div>
          </div>
          <h4 className="mt-5">Cursos academicos</h4>
          <div className="courses-list mt-3">
            {courses?.map((course: CourseType, i: number) => (
              <CourseLandingComponent
                key={i}
                id_curso={course.id_curso}
                nombre={course.nombre}
                descripcion={course.descripcion}
                modalidad={course.modalidad}
                duracion={course.duracion}
                requisitos_previos={course.requisitos_previos}
              ></CourseLandingComponent>
            ))}
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default LandingView;
