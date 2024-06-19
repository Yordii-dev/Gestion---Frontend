import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { TopMenuComponent } from "../components/TopMenuComponent";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { RegisterStudent } from "../services/StudentService";
import { Signin } from "../services/AuthService";
import AlertComponent from "../components/AlertComponent";
import { PropAlert } from "../types/props/PropAlert";

function RegisterStudentView() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState<PropAlert>({
    visible: false,
    variant: "error",
    description: "",
    title: "",
    actionClose: () => {},
  });
  const ocultarAlerta = () => {
    setAlert({
      visible: false,
      variant: "error",
      description: "",
      title: "",
      actionClose: () => {},
    });
  };

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    fecha_nacimiento: "",
    direccion: "",
    telefono: "",
    genero: "",
    id_usuario: 0,

    correo: "",
    contrasena: "",
    rol: "Alumno",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const registerStudentHandler = async (e: any) => {
    e.preventDefault();
    const responseUser = await Signin(formData);

    if (responseUser.status == "success") {
      formData.id_usuario = responseUser.data.id_usuario;

      await RegisterStudent(formData);

      setAlert({
        visible: true,
        variant: "success",
        title: "Exito",
        description: "Se ha registrado correctamente",
        actionClose: () => {
          ocultarAlerta();
          navigate("/main");
          localStorage.setItem("id_usuario", responseUser.data.id_usuario);
          localStorage.setItem("rol_usuario", responseUser.data.rol);
        },
      });
    }

    e.preventDefault();
  };
  return (
    <div className="vh-100 bg-image">
      <AlertComponent
        visible={alert.visible}
        variant={alert.variant}
        description={alert.description}
        title={alert.title}
        actionClose={alert.actionClose}
      ></AlertComponent>
      <div className="d-flex align-items-center">
        <Link to="/" className="text-white mx-5 pt-3">
          Home
        </Link>
      </div>
      <br />

      <Form
        className="w-50 bg-blur  mx-auto p-4 rounded"
        onSubmit={registerStudentHandler}
      >
        <div className="d-flex justify-content-between">
          <div className="w-50 mx-2">
            <h5>Ingresa tu informacion personal</h5>
            <br />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="nombre"
                type="text"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3 mt-4"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="apellido"
                type="text"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3 mt-4"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Dni</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="dni"
                type="number"
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3 mt-4"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Fecha de nacimiento</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="fecha_nacimiento"
                type="date"
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3 mt-4"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Genero</Form.Label>
              <Form.Select
                defaultValue={""}
                onChange={handleChange}
                name="genero"
                required
              >
                <option hidden></option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="w-50 mx-2">
            <div className="d-flex flex-column">
              <h5>Ingresa tu informacion de cuenta</h5>
              <br />
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="correo"
                  type="email"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="contrasena"
                  type="password"
                  required
                />
              </Form.Group>
            </div>

            <div style={{ marginTop: "53px" }}>
              <h5>Ingresa tu informacion de contacto</h5>
              <br />
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Direccion</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="direccion"
                  type="text"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3 mt-4"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="telefono"
                  type="number"
                  required
                />
              </Form.Group>
            </div>
          </div>
        </div>
        <br />
        <div className="d-flex align-items-center justify-content-center">
          <div>
            <Button type="submit" className="btn btn-primary">
              Registrarse y matricularse al curso
            </Button>

            <p className="text-center mt-3">
              Si ya tienes una cuenta, <Link to={"/login"}>inicia sesion</Link>
              <br /> y matriculate a este curso.
            </p>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default RegisterStudentView;
