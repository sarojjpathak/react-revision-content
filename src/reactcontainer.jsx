import Navbar from "./navbar.jsx"
import Footer from "./footer.jsx";
import Logo from "./assets/react.svg"
function Reactcontainer(){
    return(
        <div className="container1">
           <div className="backimg">  <img src={Logo} alt="" /></div>
  <Navbar/>
  <h1>Fun Facts About React</h1>
  <ul>
    <li>Was first release in 2013</li>
    <li>Was originally created by jorden walke</li>
    <li>Has well over 100k star of github</li>
    <li>Is maintained by Facebook</li>
    <li>Power thousands of enterprises ,including mobile app</li>
  </ul>
  <Footer/>
  </div>
    );

}
export default Reactcontainer;