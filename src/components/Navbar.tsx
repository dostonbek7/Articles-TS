import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-slate-600">
      <div className="max-container">
       <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 py-5">
       <Link className="text-2xl font-bold text-white hover:text-orange-500" to="/">
          MyNews
        </Link>

        <nav className="flex items-center gap-4">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/create">Create</Link>
        </nav>
       </div>
      </div>
    </header>
  );
}

export default Navbar;