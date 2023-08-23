import Navbar from "./Navbar";
import logo from './pics/Cake.jpg'; 


const Home = () => {
    return ( 
        <div className="home">
            <Navbar />
            <img src={logo} />
            <p> Freshly made with the finest ingredients. </p>
        </div>
     );
}
 
export default Home;