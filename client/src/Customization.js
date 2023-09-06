import { useState } from "react";
import {Link } from "react-router-dom";
import Step2 from "./Step2";

const Customization = () => {
    const [shape, setShape]=useState("");
    var cake = {}


    return (

        <>
        <div className="square">
            <button onClick={()=>{
                setShape("square");
                cake["shape"]=shape;
                }}><img> </img></button>
        </div>
        <div className="circle">
            <button onClick={()=>{
                setShape("circle");
                cake["shape"] =shape;
                }}><img> </img></button>
        </div>

        <Link to="step2"> <Step2 cake={cake}/></Link>
        </>
        );
}
 
export default Customization;