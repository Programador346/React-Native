const API = 'http://localhost:3000/task'

export const deleteTask = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};

export const getTask = async (id) => {
  const res = await fetch(`${API}/${id}`);
  return await res.json();
};

export const getTasks = async () => {
  const res = await fetch('http://localhost:3000/task')
  return await res.json();
  };

export const saveTask = async (newTask) => {
  const res = await fetch(API,{
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json"},
    body: JSON.stringify(newTask)
  });
  return await res.json();
}

export const updateTask = async (taskId, newTask) => {
  console.log(taskId, newTask)
  const res = await fetch(`${API}/${taskId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });
  return res;
};