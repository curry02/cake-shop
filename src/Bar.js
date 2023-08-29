import {Link} from "react-router-dom";
import Checkout from "./Checkout";


const Bar = () => {
    return (
        <div className="bar">
            <Link to="/order"> {"<"} back </Link>
{/*             <button onClick={   <Checkout cart={cart}/>}className="checkout"> checkout </button> 
 */}        </div>
    );
}
 
export default Bar;