import "./item.css";
export default function item(props) {
  const { task, deleteTask, editTask } = props;
  return (
    <section className="item">
      <p>{task.title}</p>
      <div>
        <button onClick={() => deleteTask(task.id)}>delete</button>
        <button onClick={() => editTask(task.id)}>edit</button>
      </div>
    </section>
  );
}
