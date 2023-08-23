const AddToCart = ({id, inc}) => {

    return ( <button className="increment" onClick={()=>inc(id)}> + </button> );
}
 
export default AddToCart;