import { Link } from "react-router-dom";

const Thankyou = () => {
    return ( 
    <>
    <h1 className="thankyou">Thank you for your order! </h1>
    <h1>Hope to see you again!</h1>
    <Link to="/" className="goHome">Home Page</Link>
    </>
     );
}
 
export default Thankyou;