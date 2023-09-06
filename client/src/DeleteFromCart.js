const DeleteFromCart = ({id, dec}) => {


    return ( <button className="decrement" onClick={()=>dec(id)}> - </button> );
}
 
export default DeleteFromCart;