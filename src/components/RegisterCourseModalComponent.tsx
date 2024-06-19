import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/Context";
import { CreateCourse } from "../services/CoursesService";

import $ from "jquery";
import "jquery-datetimepicker";
import "jquery-datetimepicker/build/jquery.datetimepicker.min.css";

function RegisterCourseModalComponent(props: any) {
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Inicializar DateTimePicker

    $("#datetimepicker").datetimepicker({
      datepicker: false,
      format: "H:i",
      step: 15, // Intervalo de minutos
      onChangeDateTime: function (dp: any, $input: any) {
        handleChange({ target: { name: "duracion", value: $input.val() } });
      },
    });
  }, [handleChange]);
  const [formData, setFormData] = useState({
    nombre: "",
    modalidad: "",
    descripcion: "",
    duracion: "",
    requisitos_previos: "",
  });

  const handleRegister = async (e: any) => {
    e.preventDefault();
    console.log(formData);

    const response = await CreateCourse(formData);
    console.log(response);

    location.reload();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Registrar curso</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="rounded" onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Label>Imagen del curso</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="imagen"
              type="file"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="nombre"
              type="text"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3 mt-4">
            <Form.Label>Modalidad</Form.Label>
            <Form.Select
              defaultValue={""}
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
            <Form.Label>Duracion</Form.Label>
            <Form.Control
              onChange={handleChange}
              id="datetimepicker"
              name="duracion"
              placeholder="hh:mm"
              type="text"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3 mt-4">
            <Form.Label>Requisitos previos</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="requisitos_previos"
              type="text"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3 mt-4">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              as={"textarea"}
              onChange={handleChange}
              name="descripcion"
              type="text"
              rows={3}
              required
            />
          </Form.Group>

          <Button className="mt-5 " type="submit" variant="primary">
            Registrar curso
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default RegisterCourseModalComponent;
