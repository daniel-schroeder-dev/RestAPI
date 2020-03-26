export async function logEntry() {
  const response = await fetch("/students");
  return response.json();
}

export async function singleStudent() {
  const response = await fetch("/students/:id");
  return response.json();
}

export async function updateStudent(_id) {
  const response = await fetch(`/students/${_id}`, {
    method: "PUT"
  });
  return response.json();
}

export async function deleteStudent(_id) {
  const response = await fetch(`/students/${_id}`, {
    method: "DELETE"
  });
  return response.json();
}

export async function createStudent(entry) {
  const response = await fetch("/students", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(entry)
  });

  return response.json();
}

//courses api

export async function courseData() {
  const response = await fetch("/courses");
  return response.json();
}

export async function singleCourse() {
  const response = await fetch("/courses/:id");
  return response.json();
}

export async function updateCourse() {
  const response = await fetch("/courses/:id");
  return response.json();
}

export async function deleteCourse() {
  const response = await fetch("/courses/:id");
  return response.json();
}

export async function createCourse(entry) {
  const response = await fetch("/courses", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(entry)
  });

  return response.json();
}
