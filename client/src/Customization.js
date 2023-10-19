import { useState } from "react";
import {Link } from "react-router-dom";
import Step2 from "./Step2";
import Bar from "./Bar";

const Customization = () => {
    const [shape, setShape]=useState("");
    var cake = {}


    return (
<>
        <Bar />
      
        <Link to="step2"> <Step2 cake={cake}/></Link>
        </>
        );
}
 
export default Customization;