import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import Total from "./Total";

const Checkout = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [plate, setPlate] = useState("None");
    const [message, setMessage] = useState("");

    const [cart, setCart] = useState(null);
    const [error, setError] = useState(null);
    const [total, setTotal] = useState(0);
    /*fetch*/

    useEffect(() => {
        fetch('http://localhost:8000/cart')
        .then(res=> {
            if (!res.ok) {
                throw Error("could not fetch");
            }
            return res.json();
        })
        .then(data=> {
            setCart(data);
            setError(null);
        })
        .catch((err)=>{
            setError(err.message);
        })
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {name, phone, plate, message, }
    };
  
    
    return ( 
        <>
        <Link className="back" to="/chooseFromSelection"> {"<"} back </Link>

        <form className="form" onSubmit={handleSubmit}>

            <h1 className="total">Total: $<Total /></h1>


            <label>Name: </label>
            <input type="text" required />

            <label>Phone Number: </label>
            <input type="number" required />

            <label>Edible Cake Message Plate: </label>
            <select>
                <option value="None">None</option>
                <option value="White Chocolate">White Chocolate</option>
                <option value="Brown Chocolate">Brown Chocolate</option>
            </select>

            <label>Plate Message / Additional Comments: </label>
            <textarea></textarea>

            {(cart!==null && cart.length==0) ? <button disabled>Submit</button> : <button>Submit</button>
        }
        </form>

        <div className="orders">
            {cart===null ? (error===null ? (<h1 className="loading">Loading...</h1>) : (<h1>Error has occurred</h1>)) :

            cart.map((order)=> (
                <div className="cake" key={order.id}>
                    <img className ="cakeImage" src={"/images/"+order.cake.image+".png"}/> 
                    <h2>{order.cake.name} </h2>
                    <h3>Amount: {order.num}</h3>
                </div>
                ))}
        </div>

        </>
    );
}
 
export default Checkout;