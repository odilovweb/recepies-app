import { Outlet, Link } from "react-router-dom";
import ColorContainer from "../componenets/ColorContainer";
import { useThemeContext } from "../hooks/useThemeContext";

function RooterLayout() {
  const { color } = useThemeContext().state;
  return (
    <>
      <header style={{ backgroundColor: color }}>
        <nav className="flex align-element justify-between items-center py-2 ">
          <h1 className="text-4xl">Recipie</h1>
          <p className="italic text-center max-w-[200px] min-[650px]:hidden">
            This site is recommended for desktop
          </p>
          <Link className="btn btn-primary" to="/create">
            Create
          </Link>
        </nav>
      </header>
      <ColorContainer />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default RooterLayout;
