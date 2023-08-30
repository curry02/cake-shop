import {Link, useHistory} from "react-router-dom";
import { useState, useEffect } from "react";

const Checkout = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [plate, setPlate] = useState("None");
    const [message, setMessage] = useState("");

    const [cart, setCart] = useState(null);
    const [error, setError] = useState(null);
    const [total, setTotal] = useState(0);
    const history=useHistory();
    

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
        .then(()=> {
            var t=0;
            for (let i=0; i<cart.length; i++) {
                t=t+cart[i].num*cart[i].cake.price;
            } 
            setTotal(t);
        })
        .catch((err)=>{
            setError(err.message);
        })
    }, [error]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {name, phone, plate, message, cart, total};

        fetch('http://localhost:8000/shop', {
            method: "POST",
            headers: { "Content-type": "application/json"},
            body: JSON.stringify(order)
        }).then(() => {
            history.push("/thankyou")
        })
    };
  
    
    return ( 
        <>
        <Link className="back" to="/chooseFromSelection"> {"<"} back </Link>

        <form className="form" onSubmit={handleSubmit}>

            <h1 className="total">Total: ${total}</h1>

            <label>Name: </label>
            <input type="text" required value={name} onChange={((e)=>setName(e.target.value))}/>

            <label>Phone Number: </label>
            <input type="number" required value={phone} onChange={((e)=>setPhone(e.target.value))}/>

            <label>Edible Cake Message Plate: </label>
            <select value={plate} onChange={((e)=>setPlate(e.target.value))}>
                <option value="None">None</option>
                <option value="White Chocolate">White Chocolate</option>
                <option value="Brown Chocolate">Brown Chocolate</option>
            </select>

            <label>Plate Message / Additional Comments: </label>
            <textarea value={message} onChange={((e)=>setMessage(e.target.value))}></textarea>

            {(cart!==null && cart.length==0) ? <button className="disabled" disabled>Submit</button> : <button className="enabled">Submit</button>
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