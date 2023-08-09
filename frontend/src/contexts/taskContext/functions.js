export const createTask = async (title, description, dueDate) => {
  try {
    const response = await fetch("http://localhost:5000/api/todo/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title,
        description,
        dueDate,
      }),
    });
    const json = await response.json();

    let obj = { msg: json.message, success: json.success };
    return obj;
  } catch (error) {
    const obj = { success: false, msg: "Some error occured" };
    return obj;
  }
};

export const getTasks = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/todo/gettodos", {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    let obj = { tasks: json.todos, success: json.success };
    return obj;
  } catch (error) {
    const obj = { success: false, msg: "Some error occured" };
    return obj;
  }
};

export const updateTask = async (name, value, id) => {
  try {
    const url = `http://localhost:5000/api/todo/updatetodo/${id}?${name}=${value}`;

    const response = await fetch(url, {
      method: "GET",
    });

    const json = await response.json();

    let obj = { msg: json.message, success: json.success };
    return obj;
  } catch (error) {
    const obj = { success: false, msg: "Some error occured" };
    return obj;
  }
};
