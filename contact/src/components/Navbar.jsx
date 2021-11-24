import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return <nav className="navbar bg-dark container">
        <h4> <Link to="/contacts"  className='link'> Contacts </Link> </h4>
        <h4> <Link to="/create"  className='link'> Create Contacts </Link> </h4>
    </nav>
}

export default Navbar;