import {Link} from "react-router-dom";


const Bar = (checkout, cart) => {
    return (
        <div className="bar">
            <Link to="/order"> {"<"} back </Link>
            <button onClick={()=>checkout(cart)}className="checkout"> checkout </button>
        </div>
    );
}
 
export default Bar;