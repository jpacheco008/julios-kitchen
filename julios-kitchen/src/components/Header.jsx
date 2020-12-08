import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <Link
        to="/"
        style={{ textDecoration: "none", color: "white" }}
        className="links"
      >
        Home
      </Link>
      <Link
        to="/order"
        style={{ textDecoration: "none", color: "white" }}
        className="links"
      >
        Place Order
      </Link>
      <Link
        to="/recipt"
        style={{ textDecoration: "none", color: "white" }}
        className="links"
      >
        Recipt
      </Link>
    </div>
  );
}
