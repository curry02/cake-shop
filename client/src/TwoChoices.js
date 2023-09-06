import {Link} from "react-router-dom";

const TwoChoices = () => {
    return ( 
       <div className="twochoices">
            <Link className="back" to="/"> {"<"} back </Link>
            <div className="buttons">
                <Link to="/chooseFromSelection">Choose From Cake Selection</Link>
                <span />
                <Link to="/customize">Customize</Link>
            </div>
       </div>
       
    );
}
 
export default TwoChoices;