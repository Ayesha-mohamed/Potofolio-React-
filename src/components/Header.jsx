import { Link } from "react-router-dom"
import Image from "../images/img1.jpg"

function Header() {
    return<>
   <div className=" text-white flex justify-between px-10 py-10 bg-purple-600">
    <h1 className="text-3xl">Aisha<span className="text-yellow-500 font-semibold">Mohamed</span></h1>
    <i class="fa-solid fa-bars sm:hidden text-3xl"></i>
    <ul className="sm:flex gap-10 text-2xl hidden">
         <Link to="/"><li>Home</li></Link>
          <Link to="/About"><li>About</li></Link>
          <Link to="/Contact"><li>Contact</li></Link>
    </ul>
  </div>
  
    </>

}
export default Header