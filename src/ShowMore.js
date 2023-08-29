const ShowMore = (cake) => {

    const showDetails = (cake) => {
    return (
        <div className="details">
            <h1>{cake.name}</h1>
            <h2>{cake.price}</h2>
            <p>{cake.size}</p>
            <p>{cake.contents}</p>
        </div>
    )
    }

    return (
        <button onClick={()=>{showDetails(cake)}}> {">"} </button>
    );
}
 
export default ShowMore;