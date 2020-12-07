
import { Link } from "react-router-dom"

export default function Header() {
  
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/order">Place Order</Link>
        <Link to="/recipt">Recipt</Link>
      </div>
    )
  
}
