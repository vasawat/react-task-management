import "./addForm.css";
export default function addForm(props) {
    const { title, setTitle, saveTask, edit } = props;
  return (
    <section className="mainTask">
      <h2 className="textHead">Task management</h2>
      <form action="" onSubmit={saveTask}>
        <div className="formControl">
          <input
            type="text"
            className="inputText"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="btn">
            {edit ? "update":"add"}
          </button>
        </div>
      </form>
    </section>
  );
}
