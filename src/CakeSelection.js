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
        <Bar/>
        <div className="cake-selection">
            {cakeSelection===null ? (error===null ? (<h1 className="loading">Loading...</h1>) : (<h1>Error has occurred</h1>)) :
            cakeSelection.map((cake)=> (
                <div className="cake" key={cake.id}>
                    
                    <img src={cake.image} className="cakePic"></img>
                    <h2>{cake.name} </h2>
                    <DeleteFromCart id={cake.id} dec={dec} />
                    {cakeCart[cake.id]}
                    <AddToCart id={cake.id} inc={inc} />
                </div>
                
            ))}
        </div>
        </>
    );
}
 
export default CakeSelection;