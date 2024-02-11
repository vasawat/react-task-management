import "./header.css";
import sun from "../image/sun.png";
import moon from "../image/moon.png";
export default function header(props) {
  const { theme, setTheme } = props;
  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <nav>
      <h1>Task Management</h1>
      <div className="theme">
        <span>{theme === "light" ? "light" : "dark"} mode</span>
        <span onClick={changeTheme}>
          <img className="logo" src={theme === "light" ? moon : sun} alt="" />
        </span>
      </div>
    </nav>
  );
}
