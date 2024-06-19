import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../context/Context";
import { UserType } from "../types/UserType";
import { getStudentById } from "../services/StudentService";

function SidebarComponent() {
  const navigate = useNavigate();
  const { selectedOption, setSelectedOption } = useContext(MyContext);
  const [user, setUser] = useState<any>();

  useEffect(() => {
    (async () => {
      const rol = localStorage.getItem("rol_usuario");
      if (rol == "Alumno") {
        const id_student = Number(localStorage.getItem("id_alumno"));
        const response = await getStudentById(id_student);

        if (response.status == "success") {
          setUser(response.data);
        }
      }
      if (rol == "Administrador") {
        setUser({
          nombre: "Administrador",
        });
      }
    })();
  }, []);
  const clickHanlder = (e: any) => {
    if (e.target.text) {
      setSelectedOption(e.target.text);
    }
  };
  const cerrarSesionHandler = (e: any) => {
    localStorage.removeItem("id_usuario");
    navigate("/login");
  };
  return (
    <div className="container-sidebar bg-blue-dark px-2">
      <div className="container-photo mt-3 mx-auto text-center">
        <img src="http://via.placeholder.com/640x360" alt="" />
        <h5 className="mt-2">{user?.nombre}</h5>
        <h5 className="mt-2">...</h5>
        {/* <p className="text-success">
          {usuario?.id_rol == 1 ? "Municipio" : "Proveedor"}
        </p> */}
      </div>
      <div className="mt-5">
        <div
          className={`option rounded mb-3 ${
            selectedOption == "Cursos" && "active-option"
          }`}
          role="button"
          onClick={clickHanlder}
        >
          <p className="py-2 px-3 m-0">
            <Link
              to="courses"
              style={{ color: "white", fontWeight: "normal" }}
              className="d-block text-decoration-none"
            >
              Cursos
            </Link>
          </p>
        </div>
        {user?.rol == "Administrador" && (
          <div
            className={`option  text-white rounded mb-3 ${
              selectedOption == "Publicar" && "active-option"
            }`}
            role="button"
            onClick={clickHanlder}
          >
            <p className="py-2 px-3 m-0">
              <Link
                to="postear"
                style={{ color: "#212529", fontWeight: "normal" }}
                className="d-block text-decoration-none"
              >
                Publicar
              </Link>
            </p>
          </div>
        )}
        {user?.rol == "Alumno" && (
          <div
            className={`option rounded text-white mb-3 ${
              selectedOption == "Notificaciones" && "active-option"
            }`}
            role="button"
            onClick={clickHanlder}
          >
            <p className="py-2 px-3 m-0">
              <Link
                to="notify"
                style={{ color: "#212529", fontWeight: "normal" }}
                className="d-block text-decoration-none"
              >
                Notificaciones
              </Link>
            </p>
          </div>
        )}
        <div
          className={`option rounded  text-white mx-2 mb-3 cerrar-sesion-option ${
            selectedOption == "Cerrar sesion" && "active-option"
          }`}
          role="button"
          onClick={cerrarSesionHandler}
        >
          <p className="py-2 px-3 m-0">Cerrar sesion</p>
        </div>
      </div>
    </div>
  );
}

export default SidebarComponent;
