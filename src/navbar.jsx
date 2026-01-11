import Logo from "./assets/react.svg"
function Nav(){
    return(
        <>
        <div className="navbar">
         <img className="logo" src= {Logo} alt="react-logo" />
         <h2>FunFacts</h2>
         <ul>
            
            <li>About</li>
            <li>Message</li>
            <li>Contact</li>
         </ul>
         </div>
         </>
    );
}
export default Nav;