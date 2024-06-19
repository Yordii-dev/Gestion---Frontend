import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import AlertComponent from "../components/AlertComponent";
import { Login } from "../services/AuthService";
import { PropAlert } from "../types/props/PropAlert";

function LoginView() {
  const [alert, setAlert] = useState<PropAlert>({
    visible: false,
    variant: "error",
    description: "",
    title: "",
    actionClose: () => {},
  });

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    correo: "",
    contrasena: "",
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

  const loginHandler = async (e: any) => {
    e.preventDefault();

    const response = await Login(formData);
    console.log(response);

    if (response.status == "success") {
      navigate("/main");
      localStorage.setItem("id_usuario", response.data.id_usuario);
      localStorage.setItem("rol_usuario", response.data.rol);
    } else {
      setAlert({
        visible: true,
        variant: "error",
        description: response.details,
        title: response.message,
        actionClose: () => {
          ocultarAlerta();
        },
      });
    }
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
      <div className="w-50 bg-blur mt-5 mx-auto p-4 rounded">
        <h2 className="text-center">Iniciar sesion</h2>
        <Form className="mt-4" onSubmit={loginHandler}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              onChange={handleChange}
              name="correo"
              type="email"
              placeholder="Correo"
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3 mt-4"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control
              onChange={handleChange}
              name="contrasena"
              type="password"
              placeholder="Contraseña"
              required
            />
          </Form.Group>

          <Button
            className="mt-4 mx-auto d-block"
            type="submit"
            variant="primary"
          >
            Iniciar sesion
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default LoginView;
