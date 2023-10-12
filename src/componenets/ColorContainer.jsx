import { FaMoon, FaSun } from "react-icons/fa6";
import { useThemeContext } from "../hooks/useThemeContext";

function ColorContainer() {
  const { changeColor, changeTheme } = useThemeContext();
  const { theme } = useThemeContext().state;
  const colors = ["#C70039", "#B2533E", "#B931FC", "#005B41", "#687EFF"];
  return (
    <div className="align-element my-5 flex items-center">
      <div
        className="text-3xl mr-auto cursor-pointer"
        onClick={() => {
          theme === "dark" ? changeTheme("light") : changeTheme("dark");
        }}
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </div>
      <ul className="flex gap-3">
        {colors.map((color) => {
          return (
            <li
              key={color}
              className="w-8 h-8 rounded-[50%] cursor-pointer"
              style={{ backgroundColor: color }}
              onClick={() => {
                changeColor(color);
              }}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}

export default ColorContainer;
