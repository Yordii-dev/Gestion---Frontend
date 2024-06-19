import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import MainView from "./views/MainView";
import CoursesView from "./views/CoursesView";
import LandingView from "./views/LandingView";
import Landing3View from "./views/Landing3View";
import CourseDetailsView from "./views/CourseDetailsView";
import RegisterStudentView from "./views/RegisterStudentView";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingView />}></Route>
        <Route path="/landing" element={<LandingView />}></Route>
        <Route path="/login" element={<LoginView />}></Route>
        <Route path="/register" element={<RegisterStudentView />}></Route>
        <Route path="/main" element={<MainView />}>
          <Route index element={<CoursesView />}></Route>
          <Route path="courses" element={<CoursesView />}></Route>
          <Route path="course_details" element={<CourseDetailsView />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
