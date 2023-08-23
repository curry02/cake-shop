import {Link} from "react-router-dom";


const Bar = () => {
    return (
        <div className="bar">
            <Link to="/"> {"<"} back </Link>
            <button className="checkout"> checkout </button>
        </div>
    );
}
 
export default Bar;