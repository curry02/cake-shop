import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import UseFetch from "./UseFetch";
import { Link } from "react-router-dom";

const CakeDetails = () => {

    const {id} = useParams();
    /*const {data:cake, error} = UseFetch('http://localhost:8000/cakeSelection/' + id);*/

    const [cakeSelection, setCakeSelection] = useState(null);
    const [error, setError] = useState(null);

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
        })
        .catch((err)=>{
            setError(err.message);
        })
    }, []);


    return ( 
        <>
        <Link className="back" to="/chooseFromSelection"> {"<"} back </Link>
        <div className="cakeDetails">
            {cakeSelection===null ? (error===null ? (<h1 className="loading">Loading...</h1>) : (<h1>Error has occured</h1>)) :
            <>
                <img className ="detailImage" src={"/images/"+cakeSelection.cakeSelection[id].image+".png"}/> 
                <div className="cakeText">
                    <h1>{cakeSelection.cakeSelection[id].name}</h1>
                    <h2>${cakeSelection.cakeSelection[id].price}</h2>
                    <p>{cakeSelection.cakeSelection[id].size}"</p>
                    <p className="cakeContents">{cakeSelection.cakeSelection[id].contents}</p>
                </div>
            </>
        }
       </div>
       </>
        );
}
 
export default CakeDetails;