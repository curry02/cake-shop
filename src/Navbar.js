import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Daangoo</h1>
            <div className="right">
                <Link to="/contact" className="contact">Contact</Link>
                <Link to="/order" className="order"> Order </Link>
            </div>
        </nav>

   );
}
 
export default Navbar;