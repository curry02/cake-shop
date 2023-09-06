import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Bar from "./Bar";
import DeleteFromCart from "./DeleteFromCart";
import AddToCart from "./AddToCart";
import Checkout from "./Checkout";
import UseFetch from "./UseFetch";

const CakeSelection = () => {
    
    const [cakeSelection, setCakeSelection] = useState(null);
    const [error, setError] = useState(null);
    const [cakeCart, setCakeCart] = useState(null);
    

    const dec = (id) => {
        if (cakeCart[id] ===0){return;}
        else{
            var newArray = cakeCart.slice();
            newArray[id]-=1; 
            setCakeCart(newArray);
        }
    };

    const inc = (id) => {
        var newArray = cakeCart.slice();
        newArray[id]=newArray[id]+1;
        setCakeCart(newArray);
    };

    const write = () => {
        var cartDictionary =[];
        /*cartDictionary: {cake.id, cake object, number of cakes ordered}, write into cart*/ 

        for (let i=0;i<cakeCart.length; i++) {
            if (cakeCart[i]!=0) {
                cartDictionary.push({"id":i, "cake":cakeSelection.cakeSelection[i], "num":cakeCart[i]});
            }
        }

        fetch("http://localhost:8000/cart", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(cartDictionary)
        })
    };
/*
    const {cakeSelection, error1} = UseFetch("http://localhost:8000/cakeSelection");
    const {cakeCart, error2} = UseFetch("http://localhost:9000/cart");

*/
    useEffect(() => {
        fetch('http://localhost:8000/cakeSelection')
        .then(res=> {
            if (!res.ok) {
                throw Error("could not fetch");
            }
            return res.json();
        })
        .then(data=> {
            setCakeSelection(data);
            setError(null);
            setCakeCart(Array(data.cakeSelection.length).fill(0));
            /*take out .cakeSelection*/
        })
        .catch((err)=>{
            setError(err.message);
        })
    }, []);
    

    /*fetch cart.json using UseFetch, setCart with new array after slicing array  */


    return (
        <>
        <Bar />
        {/*disable button if cakeSelection is null, else button works*/}
        {cakeSelection===null? (<Link to="/checkout"><button className="disabled" disabled>checkout</button></Link>):(
        <Link to="/checkout">
            <button className="checkout" onClick={write}>checkout</button>
        </Link>)}

        {/*make cakeSelection after reading json file successfully */}
        <div className="cakeselection">
            {cakeSelection===null ? (error===null ? (<h1 className="loading">Loading...</h1>) : (<h1>Error has occurred</h1>)) :
            /*take out .cakeSelection if running only one json file */
            cakeSelection.cakeSelection.map((cake)=> (
                <div className="cake" key={cake.id}>
                    <img className ="cakeImage" src={"/images/"+cake.image+".png"}/> 
                    <h2>{cake.name} </h2>
                    <DeleteFromCart className ="minus" id={cake.id} dec={dec} />
                    {cakeCart[cake.id]}
                    <AddToCart className="plus" id={cake.id} inc={inc} />
                    <Link className="detailsButton"to={"/cakeSelection/"+cake.id}> {">"}</Link>
                </div>
                
            ))}
        </div>
        </>
    );
}
 
export default CakeSelection;