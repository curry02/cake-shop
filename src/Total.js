import { useState, useEffect } from "react";


const Total = () => {
    const [cart, setCart]=useState(null);
    const [error, setError]=useState(null);
    const [total, setTotal]=useState(0);

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
    }, );

    return ( total );
}
 
export default Total;