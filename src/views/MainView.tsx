import { useEffect } from "react";
import SidebarComponent from "../components/SidebarComponent";
import { Outlet, useNavigate } from "react-router";
function MainView() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("id_usuario")) {
      navigate("/");
    }
  }, []);
  return (
    <div className="container-main p-3 d-flex align-items-center justify-content-between">
      <SidebarComponent></SidebarComponent>
      <Outlet></Outlet>
    </div>
  );
}

export default MainView;
