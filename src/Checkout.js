import {Link} from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [plate, setPlate] = useState("White Chocolate");
    const [message, setMessage] = useState("");

    /*fetch*/


    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {name, phone, plate, message, }
    };
  
    
    return ( 
        <>
        <Link className="back" to="/chooseFromSelection"> {"<"} back </Link>
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" required />

            <label>Phone Number: </label>
            <input type="numbers" required />

            <label>Edible Cake Message Plate: </label>
            <select>
                <option value="White Chocolate">White Chocolate</option>
                <option value="Brown Chocolate">Brown Chocolate</option>
            </select>

            <label>Plate Message / Additional Comments: </label>
            <textarea></textarea>

            <button>Checkout</button>
        </form>
        </>
    );
}
 
export default Checkout;