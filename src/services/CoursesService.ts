import { environment } from "./../environment.ts";

export async function GetCourses() {
  const res = await fetch(`${environment.apiUrl}/cursos`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await res.json();
  return json;
}

export async function CreateCourse(formData: any) {
  try {
    const res = await fetch(`${environment.apiUrl}/cursos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const json = await res.json();
    return json;
  } catch (error: any) {}
}

export async function UpdateCourse(idCourse: number, formData: any) {
  const res = await fetch(`${environment.apiUrl}/cursos/${idCourse}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const json = await res.json();
  return json;
}

export async function DeleteCourse(idCourse: number) {
  const res = await fetch(`${environment.apiUrl}/cursos/${idCourse}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await res.json();
  return json;
}
