export async function getStudentById(id_user: number) {
  try {
    const res = await fetch(environment.apiUrl + `/alumnos/${id_user}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await res.json();
    console.log(json);

    return json;
  } catch (error) {}
}

import { environment } from "../environment";

export async function RegisterStudent(formData: any) {
  try {
    const res = await fetch(environment.apiUrl + "/alumnos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const json = await res.json();

    console.log(json);

    return json;
  } catch (error: any) {
    console.log(error);
  }
}
