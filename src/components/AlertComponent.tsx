import { Alert, AlertTitle } from "@mui/material";
import { useEffect, useState } from "react";
import { PropAlert } from "../types/props/PropAlert";

export default function AlertComponent({
  variant,
  visible,
  title,
  description,
  actionClose,
}: PropAlert) {
  const hanlderClose = (e: any) => {
    actionClose();
  };

  return (
    <div>
      {visible && (
        <div className="d-flex justify-content-end pt-4 px-5 fixed-top">
          <Alert severity={variant}>
            <div className="d-flex justify-content-between align-align-items-center">
              <AlertTitle>{title}</AlertTitle>
              <span role="button" onClick={hanlderClose}>
                X
              </span>
            </div>
            {description}
          </Alert>
        </div>
      )}
    </div>
  );
}
