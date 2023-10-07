import { Outlet, Link } from "react-router-dom";

function RooterLayout() {
  return (
    <>
      <header className="bg-slate-500">
        <nav className="flex align-element justify-between items-center py-2 ">
          <h1 className="text-4xl">Recipie</h1>
          <Link className="btn btn-primary" to="/create">
            Create
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default RooterLayout;
