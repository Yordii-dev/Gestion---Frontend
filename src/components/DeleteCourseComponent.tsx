import { Alert, AlertTitle } from "@mui/material";
import { useEffect, useState } from "react";
import { PropAlert } from "../types/props/PropAlert";
import { Button, Modal } from "react-bootstrap";
import { DeleteCourse } from "../services/CoursesService";
import { useNavigate } from "react-router";

export default function DeleteCourseComponent(props: any) {
  const navigate = useNavigate();

  const deleteHandler = async (e: any) => {
    console.log(props.course_id_curso);

    const response = await DeleteCourse(props.course_id_curso);
    //console.log(response);

    navigate("/main");
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="alert alert-danger">
          <Modal.Header closeButton>
            <h4>Eliminar curso {props.course_nombre}</h4>
          </Modal.Header>
          <Modal.Body>
            <div>
              <p>Esta accion es irreversible</p>
            </div>
            <div
              onClick={deleteHandler}
              className="d-flex align-items-center justify-content-end"
            >
              <Button variant="danger">Eliminar</Button>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}
