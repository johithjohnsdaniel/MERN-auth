import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center p-3 ">
        <Link to="/">
          <h1>Auth App</h1>
        </Link>

        <ui className="flex gap-4 ">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/about">
            <h1>About</h1>
          </Link>
          <Link to="/sign-in">
            <h1>Sign In</h1>
          </Link>
        </ui>
      </div>
    </div>
  );
}

export default Header;
