import CourseComponent from "../components/CourseComponent";
import {
  ArrowBack,
  BackHand,
  DeleteForever,
  EditAttributes,
  Filter1Rounded,
  KeyboardReturnOutlined,
  PersonPinCircle,
} from "@mui/icons-material";
import RegisterCourseModalComponent from "../components/RegisterCourseModalComponent";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { GetCourses, UpdateCourse } from "../services/CoursesService";
import { CourseType } from "../types/CourseType";
import { Button, Form } from "react-bootstrap";
import AlertComponent from "../components/AlertComponent";
import { PropAlert } from "../types/props/PropAlert";
import DeleteCourseComponent from "../components/DeleteCourseComponent";

function CourseDetailsView() {
  const [modalShow, setModalShow] = useState<boolean>();
  const [alert, setAlert] = useState<PropAlert>({
    visible: false,
    variant: "error",
    description: "",
    title: "",
    actionClose: () => {},
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { course } = location.state;

  const [formData, setFormData] = useState({
    nombre: course.nombre,
    modalidad: course.modalidad,
    descripcion: course.descripcion,
    duracion: course.duracion,
    requisitos_previos: course.requisitos_previos,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const ocultarAlerta = () => {
    setAlert({
      visible: false,
      variant: "error",
      description: "",
      title: "",
      actionClose: () => {},
    });
  };

  const handleEdit = async (e: any) => {
    e.preventDefault();
    const response = await UpdateCourse(course.id_curso, formData);
    setAlert({
      visible: true,
      variant: "success",
      title: "Exito",
      description: "El curso se ha actualizado correctamente",
      actionClose: () => {
        ocultarAlerta();
        navigate("/main");
      },
    });
  };

  return (
    <>
      <div className="h-100 flex-grow-1 align-self-start mx-3 p-4 bg-white">
        <AlertComponent
          visible={alert.visible}
          variant={alert.variant}
          description={alert.description}
          title={alert.title}
          actionClose={alert.actionClose}
        ></AlertComponent>
        <div>
          <a href="/main">
            <KeyboardReturnOutlined></KeyboardReturnOutlined>
          </a>
          <br />
          <br />
          <div className="d-flex align-items-center justify-content-between">
            <h4>Detalle de curso {course.nombre}</h4>
            <div onClick={() => setModalShow(true)}>
              <DeleteForever
                style={{ cursor: "pointer", fontSize: 30 }}
                className="text-danger"
              />
            </div>
          </div>
          <br />
          <Form className="rounded" onSubmit={handleEdit}>
            <Form.Label>Nombre</Form.Label>
            <Form.Group className="mb-3">
              <Form.Control
                defaultValue={course.nombre}
                onChange={handleChange}
                name="nombre"
                type="text"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-4">
              <Form.Label>Modalidad</Form.Label>
              <Form.Select
                defaultValue={course.modalidad}
                onChange={handleChange}
                name="modalidad"
                required
              >
                <option hidden></option>
                <option value="Presencial">Presencial</option>
                <option value="Online">Online</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 mt-4">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                defaultValue={course.descripcion}
                onChange={handleChange}
                name="descripcion"
                type="text"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-4">
              <Form.Label>Duracion</Form.Label>
              <Form.Control
                defaultValue={course.duracion}
                onChange={handleChange}
                name="duracion"
                type="text"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-4">
              <Form.Label>Requisitos previos</Form.Label>
              <Form.Control
                defaultValue={course.requisitos_previos}
                onChange={handleChange}
                name="requisitos_previos"
                type="text"
                required
              />
            </Form.Group>

            <Button className="mt-5 " type="submit" variant="warning">
              <span>Editar curso</span>
            </Button>
          </Form>
        </div>
      </div>
      <DeleteCourseComponent
        show={modalShow}
        course_id_curso={course.id_curso}
        course_nombre={course.nombre}
        onHide={() => setModalShow(false)}
      ></DeleteCourseComponent>
    </>
  );
}

export default CourseDetailsView;
