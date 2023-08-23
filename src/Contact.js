import { Link } from "react-router-dom";
import {ReactComponent as ContactCake} from "./pics/contact.svg";

const Contact = () => {
    return (
        <div className="contactPage">
            <Link className="back" to="/"> {"<"} back </Link>
            <h2>Phone Number: 778-DAANGOO</h2>
            <h2>Email: kellywong0613@gmail.com</h2>
            <div>
                <h3>Hours:</h3>
                <ContactCake className="contactCake"/>      
                <div>
                    <p>Monday: 9am - 6pm</p>
                    <p>Tuesday: 9am - 6pm</p> 
                    <p>Wednesday: 9am - 6pm</p>
                    <p>Thursday: 9am - 6pm</p>
                    <p>Friday: 9am - 7pm</p>
                    <p>Saturday: 9am - 7pm</p>
                    <p>Sunday: 10am - 6pm</p>
                </div>
            </div>      
        </div>
    );
}
 
export default Contact;