import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="p-6 text-xl bg-pink-200 text-white">
      <Link to="/" className="mr-4">
        Home
      </Link>
      <Link to="/resume">Resume</Link>
    </div>
  );
}
