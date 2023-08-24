import { useState, useEffect } from "react";
import Bar from "./Bar";
import DeleteFromCart from "./DeleteFromCart";
import AddToCart from "./AddToCart";

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


    const checkout = (cart) => {
        /*filter cakeCart, */
    };

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
            setCakeCart(Array(data.length).fill(0));
        })
        .catch((err)=>{
            setError(err.message);
        })
    }, []);

    return (
        <>
        <Bar checkout={checkout} cart={cakeCart}/>
        <div className="cake-selection">
            {cakeSelection===null ? (error===null ? (<h1 className="loading">Loading...</h1>) : (<h1>Error has occurred</h1>)) :
            
            cakeSelection.map((cake)=> (
                <div className="cake" key={cake.id}>
                    <img className ="cakeImage" src={"/images/"+cake.image+".png"} alt=""/> 
                    <h2>{cake.name} </h2>
                    <DeleteFromCart className ="minus" id={cake.id} dec={dec} />
                    {cakeCart[cake.id]}
                    <AddToCart className="plus" id={cake.id} inc={inc} />
                </div>
                
            ))}
        </div>
        </>
    );
}
 
export default CakeSelection;