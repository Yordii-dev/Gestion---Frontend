import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export function TopMenuComponent() {
  return (
    <div className="d-flex align-items-center justify-content-end">
      <Link to={"/login"} className="mx-5 text-white pt-3">
        Ubicacion
      </Link>
      <Link to={"/login"} className="mx-5 text-white pt-3">
        Descripcion de la empresa
      </Link>
      <Link to={"/login"} className="mx-5 text-white pt-3">
        Sobre nosotros
      </Link>
      <Link to={"/login"} className="mx-5 text-white pt-3">
        Iniciar sesion
      </Link>
    </div>
  );
}
