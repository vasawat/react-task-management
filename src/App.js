import "./App.css";
import Header from "./components/header";
import AddForm from "./components/addForm";
import Item from "./components/item";
import { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [edit, setEdit] = useState(null);
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("task")) || [],
  );
  const [theme,setTheme] = useState("light")
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);
  function deleteTask(id) {
    setTask(task.filter((item) => item.id !== id));
  }
  function saveTask(e) {
    e.preventDefault();
    if (!title) {
      alert("invalid");
    } else if (edit !== null) {
      const updateTask = task.map((item) => {
        if (item.id === edit) {
          return { ...item, title: title };
        }
        return item;
      });
      setTask(updateTask);
      setEdit(null);
      setTitle("");
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 100),
        title: title,
      };
      setTask([...task, newTask]);
      setTitle("");
    }
  }
  function editTask(id) {
    setEdit(id);
    const newEdit = task.find((item) => item.id === id);
    setTitle(newEdit.title);
  }
  return (
    <div className={"app "+theme}>
      <Header theme={theme} setTheme={setTheme}/>
      <div className="container">
        <AddForm
          title={title}
          setTitle={setTitle}
          saveTask={saveTask}
          edit={edit}
        />
        {task.map((data) => (
          <Item
            key={data.id}
            task={data}
            setTask={setTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
